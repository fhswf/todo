import express from 'express';
import DB from './db.js'

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import {checkExact, checkSchema, validationResult} from 'express-validator';
import cookieParser from 'cookie-parser';
import { getRandomValues } from 'crypto';

const PORT = process.env.PORT || 3000;

const TOKEN_URL = "https://jupiter.fh-swf.de/keycloak/realms/webentwicklung/protocol/openid-connect/token"


const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Todo API',
            version: '1.0.0',
            description: 'Todo API Dokumentation',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
        components: {
            schemas: {
                Todo: {
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
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            },
        },
        security: [{
            bearerAuth: []
        }],

    },
    apis: ['./index.js'],
};



/** Zentrales Objekt für unsere Express-Applikation */
const app = express();

app.use(cookieParser())
app.use(express.static('../frontend'));
app.use(express.json());

/** Middleware für Swagger */
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/** global instance of our database */
const db = new DB();

/** Initialize database connection */
async function initDB() {
    await db.connect();
    console.log("Connected to database");
}


// Validation rules for todos, check if title is not empty and at least 3 characters long and the todo only has the allow properties
const todoValidationRules = [
    checkExact(
        checkSchema({
            _id: {
                in: ['body'],
                optional: true,
                isString: true,
            },
            title: {
                in: ['body'],
                isString: true,
                notEmpty: {
                    errorMessage: 'Titel darf nicht leer sein'
                },
                isLength: {
                    options: { min: 3 },
                    errorMessage: 'Title must be at least 3 characters long'
                }
            },
            due: {
                in: ['body'],
                optional: true,
                isISO8601: true,
            },
            status: {
                in: ['body'],
                optional: true,
                isInt: true,
            }
        })
    )
];


/** Middleware for authentication. 
 * This middleware could be used to implement JWT-based authentication. Currently, this is only a stub.
*/
let authenticate = (req, res, next) => {
    // check if there is an authorization header, fail if not
    if (!req.headers.authorization) {
        res.status(401).send({ error: 'Unauthorized' });
        return;
    }
    next();
}


/** Return all todos. 
 *  Be aware that the db methods return promises, so we need to use either `await` or `then` here! 
 * @swagger
 * /todos:
 *  get:
 *    summary: Gibt alle Todos zurück
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
                res.status(500).send({ error: 'Internal Server Error' });
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
app.put('/todos/:id', authenticate, todoValidationRules,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).send({ error: errors.array() });
            return;
        }

        let id = req.params.id;
        let todo = req.body;
        if (!checkCorrectStatus(todo.status)) {
            res.status(400).send({ error: 'Invalid status value' });
            return;
        }
        if (!todo) {
            res.status(400).send({ error: 'Todo fehlt' });
            return;
        }
        if (todo._id !== id) {
            console.log("id in body does not match id in path: %s != %s", todo._id, id);
            res.status(400).send({ error: 'id in body does not match id in path'});
            return;
        }
        return db.update(id, todo)
            .then(todo => {
                if (todo) {
                    res.send(todo);
                } else {
                    res.status(404).send({ error: `Todo with id ${id} not found` });
                }
            })
            .catch(err => {
                console.log("error updating todo: %s, %o, %j", id, todo, err);
                res.status(500).send({ error: `Error updating todo: ${err} or an integer, ${id}` });
            })
    });

function checkCorrectStatus(status) {

    // check if status is a number
    if (isNaN(status)) {
        return false;
    }
    // check if status is an integer
    if (!Number.isInteger(status)) {
        return false;
    }
    // check if status is in the correct range
    if (status < 0 || status > 2) {
        return false;
    }
    return true;
}

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
app.post('/todos', authenticate, todoValidationRules,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ error: errors.array() });
        }

        let todo = req.body;
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
                    res.status(404).send({ error: `Todo with id ${id} not found` });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).send({ error: `Error deleting todo: ${err} or an integer, ${id}` });
            });
    }
);


let server;
await initDB()
    .then(() => {
        server = app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    })

export { app, server, db }
