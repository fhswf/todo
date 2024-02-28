import express from 'express'; // Express-Framework für das Erstellen von RESTful APIs
import DB from './db.js'; // Unsere Datenbank-Verbindungsklasse
import swaggerUi from 'swagger-ui-express'; // Middleware für das Anzeigen von Swagger-Dokumentation
import swaggerJsdoc from 'swagger-jsdoc'; // Middleware für das Generieren von Swagger-Dokumentation
import { check, validationResult } from 'express-validator'; // Middleware für die Validierung von Anfragen
import cookieParser from 'cookie-parser'; // Middleware für das Verarbeiten von Cookies


// Definiere die URL für den Token
const TOKEN_URL = "https://jupiter.fh-swf.de/keycloak/realms/webentwicklung/protocol/openid-connect/token";
const PORT = process.env.PORT || 3000; // Definiere den Port, auf dem der Server lauscht

// Middleware zur Validierung von Anfragen
const validate = (req, res, next) => {
    // Überprüfe die Validierungsergebnisse und handle entsprechend
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next(); // Führe die nächste Middleware aus, wenn keine Fehler vorliegen
    }
    // Bei Validierungsfehlern sende eine fehlerhafte Anfrage zurück
    return res.status(400).json({
        error: "Bad Request",
        errors: errors.array()
    });
};

// Validierungsregeln für Todo-Anfragen
const todoValidationRules = [
    check('title')
        .notEmpty()
        .withMessage('Titel darf nicht leer sein')
        .isLength({ min: 3 })
        .withMessage('Titel muss mindestens 3 Zeichen lang sein'),
    check().custom((value, { req }) => {
        const invalidFields = Object.keys(req.body).filter(key => !['title', 'due', 'status'].includes(key));
        if (invalidFields.length > 0) {
            throw new Error(`Ungültiges Feld(er) gefunden: ${invalidFields.join(', ')}`);
        }
        return true;
    }) 
];

// Middleware für die Validierung der Todo-Anfragen
const validateTodo = (req, res, next) => {
    // Führe die Validierung der Todo-Anfragen durch
    const validations = todoValidationRules.map(rules => rules.map(rule => rule(req)));
    Promise.all(validations.flat())
        .then(() => next()) // Führe die nächste Middleware aus, wenn die Validierung erfolgreich ist
        .catch(errors => res.status(400).json({ error: 'Bad Request', errors }));
};
// Middleware für die Authentifizierung
let authenticate = (req, res, next) => {
    const token = req.headers.authorization; // Hole den Autorisierungs-Header aus der Anfrage
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' }); // Bei fehlendem Token sende eine 401-Fehlermeldung zurück
    }
    next(); // Führe die nächste Middleware aus, wenn die Authentifizierung erfolgreich ist
};

// Swagger-Optionen
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0', // OpenAPI version
        info: {
            title: 'Todo API', // Title of the API
            version: '1.0.0', // Version of the API
            description: 'API-Dokumentation für Todo-Verwaltung', // Description of the API
        },
        servers: [{ url: `http://localhost:${PORT}` }], // Server URL for the API
        components: {
            schemas: {
                Todo: { // Schema for Todo object
                    type: 'object',
                    properties: {
                        _id: {
                            type: 'string',
                            description: 'MongoDB ID',
                            example: '6439519dadb77c080671a573',
                        },
                        title: {
                            type: 'string',
                            description: 'Titel des Todos',
                            example: 'Für die Klausur Webentwicklung lernen',
                        },
                        due: {
                            type: 'string',
                            description: 'Fälligkeitsdatum',
                            example: '2023-01-14T00:00:00.000Z',
                        },
                        status: {
                            type: 'integer',
                            description: 'Status des Todos',
                            example: 0,
                        },
                    },
                },
            },
            securitySchemes: {
                bearerAuth: { // Security scheme for bearer token authentication
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            },
            
        },
        security: [{ bearerAuth: [] }], // Security definition for the API
    },
    apis: ['./index.js'], // Paths to files containing API documentation
};


// Express-App initialisieren
const app = express();
app.disable("x-powered-by"); // Deaktiviere die X-Powered-By-Header, um die Sicherheit zu erhöhen
app.use(cookieParser()); // Middleware für das Verarbeiten von Cookies
app.use(express.static('frontend')); // Middleware für das Servieren von statischen Dateien (z. B. HTML, CSS, JavaScript)
app.use(express.json()); // Middleware für das Parsen von JSON-Daten

// Middleware für die Swagger-Dokumentation
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Globale Datenbankinstanz initialisieren
let db = new DB();

// Datenbankverbindung initialisieren
async function initDB() {
    await db.connect(); // Verbinde mit der Datenbank
    console.log("Connected to database"); // Gib eine Meldung aus, wenn die Verbindung hergestellt wurde
}

/** Return all todos. 
 *  Be aware that the db methods return promises, so we need to use either `await` or `then` here! 
 * @swagger
 * /todos:
 *  get:
 *    summary: Gibt alle Todos  zurück
 *    tags: [Todos]
 *    responses:
 *      '401':
 *         description: Nicht autorisiert
 *      '500':
 *         description: Serverfehler
 *      '200':
 *        description: Eine Liste aller Todos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Todo'
 */
app.get('/todos', authenticate,
    async (req, res) => {
        let todos = await db.queryAll();
        res.send(todos);
    }
);

/** Return a single todo by id.
 * @swagger
 * /todos/{id}:
 *  get:
 *   summary: Gibt ein Todo zurück
 *   tags: [Todos]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *         required: true
 *         description: Die ID des Todos
 *   responses:
 *     '200':
 *       description: Das Todo
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     '404':
 *        description: Todo nicht gefunden
 *     '500':
 *        description: Serverfehler
 */
app.get('/todos/:id', authenticate,
    async (req, res) => {
        let id = req.params.id;
        return db.queryById(id)
            .then(todo => {
                if (todo) {
                    res.send(todo);
                } else {
                    res.status(404).send({ error: `Todo with id ${id} not found` });
                }
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    }
);



/** Update a todo by id.
 * @swagger
 * /todos/{id}:
 *   put:
 *    summary: Aktualisiert ein Todo
 *    tags: [Todos]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *         required: true
 *         description: Die ID des Todos
 *         example: 5f9a3b2a9d9b4b2d9c9b3b2a
 *    requestBody:
 *      description: Das Todo
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *           $ref: '#/components/schemas/Todo'
 *    responses:
 *    '200':
 *     description: Das aktualisierte Todo
 *     content:
 *       application/json:
 *         schema:
 *          $ref: '#/components/schemas/Todo'
 *    '400':
 *       description: Ungültige Eingabe
 *    '404':
 *       description: Todo nicht gefunden
 *    '500':
 *      description: Serverfehler
 */
app.put('/todos/:id', authenticate,
    async (req, res) => {
        let id = req.params.id;
        let todo = req.body;
        if (todo._id !== id) {
            console.log("id in body does not match id in path: %s != %s", todo._id, id);
            res.sendStatus(400, "{ message: id in body does not match id in path}");
            return;
        }
        return db.update(id, todo)
            .then(todo => {
                if (todo) {
                    res.send(todo);
                } else {
                    res.sendStatus(404);
                }
            })
            .catch(err => {
                console.log("error updating todo: %s, %o, %j", id, todo, err);
                res.sendStatus(500);
            })
    });

/** Create a new todo.
 * @swagger
 * /todos:
 *  post:
 *   summary: Erstellt ein neues Todo
 *   tags: [Todos]
 *   requestBody:
 *     description: Das Todo
 *     required: true
 *     content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/Todo'
 *   responses:
 *     '201':
 *       description: Das erstellte Todo
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     '400':
 *       description: Ungültige Eingabe
 *     '500':
 *       description: Serverfehler
 */
app.post('/todos', authenticate, todoValidationRules, validate,
    async (req, res) => {
        let todo = req.body;
        if (!todo) {
            res.sendStatus(400, { message: "Todo fehlt" });
            return;
        }
        return db.insert(todo)
            .then(todo => {
                res.status(201).send(todo);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    }
);

/** Delete a todo by id.
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Löscht ein Todo
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *           description: Die ID des Todos
 *     responses:
 *        '204':
 *          description: Todo gelöscht
 *        '404':
 *          description: Todo nicht gefunden
 *        '500':
 *          description: Serverfehler
 */
app.delete('/todos/:id', authenticate,
    async (req, res) => {
        let id = req.params.id;
        return db.delete(id)
            .then(todo => {
                if (todo) {
                    res.sendStatus(204);
                } else {
                    res.sendStatus(404);
                }
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    }
);

// Server initialisieren
let server;
await initDB()
    .then(() => {
        server = app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    })

export { app, server, db }
