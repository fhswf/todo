import express from 'express';
import DB from './db.js'

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import { check, validationResult } from 'express-validator';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';

const PORT = process.env.PORT || 3000;

const TOKEN_URL = "https://jupiter.fh-swf.de/keycloak/realms/webentwicklung/protocol/openid-connect/token"


const opts ={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyn2vP592Ju/iKXQW1DCrSTXyQXyo11Qed1SdzFWC+mRtdgioKibzYMBt2MfAJa6YoyrVNgOtGvK659MjHALtotPQGmis1VVvBeMFdfh+zyFJi8NPqgBTXz6bQfnu85dbxVAg95J+1Ud0m4IUXME1ElOyp1pi88+w0C6ErVcFCyEDS3uAajBY6vBIuPrlokbl6RDcvR9zX85s+R/s7JeP1XV/e8gbnYgZwxcn/6+7moHPDl4LqvVDKnDq9n4W6561s8zzw8EoAwwYXUC3ZPe2/3DcUCh+zTF2nOy8HiN808CzqLq1VeD13q9DgkAmBWFNSaXb6vK6RIQ9+zr2cwdXiwIDAQAB
-----END PUBLIC KEY-----`,
    issuer: "https://jupiter.fh-swf.de/keycloak/realms/webentwicklung"
}

passport.use(new JwtStrategy(opts, (payload, done) => {
    return done(null, payload)    
    })
);

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
app.disable("x-powered-by");

app.use(cookieParser())
app.use(express.static('../frontend'));
app.use(express.json());

/** Middleware für Swagger */
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



/** global instance of our database */
let db = new DB();

/** Initialize database connection */
async function initDB() {
    await db.connect();
    console.log("Connected to database");
}


const todoValidationRules = [
    check('title')
        .notEmpty()
        .isLength({ min: 3 })
        .isString(),
    check('due')
        .notEmpty()
        .isString(),
    check('status')
        .notEmpty()
        .isInt({min: 0, max: 2}),
    check('invalid')
        .not()
        .equals('invalid')
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(400).json({
        error: "Bad Request",
        errors: errors.array()
    });
}


/** Middleware for authentication. 
 * This middleware could be used to implement JWT-based authentication. Currently, this is only a stub.
*/
const authenticate = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (error, payload) =>{
        if (error || !payload){
            return res.status(401).send({error: 'Unauthorized'})
        }
        next();
    })(req, res, next)
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
app.put('/todos/:id', authenticate, todoValidationRules, validate,
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



let server;
await initDB()
    .then(() => {
        server = app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    })

export { app, server, db }
