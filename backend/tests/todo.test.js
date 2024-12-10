import request from 'supertest';
import {app, db, server} from '../index.js';
import getKeycloakToken from './utils.js';
import {beforeAll, describe, expect, it} from "@jest/globals";

let token = null; // Speichert den abgerufenen JWT-Token

beforeAll(async () => {
    try {
        token = await getKeycloakToken();
    } catch (error) {
        console.log('Fehler beim Abrufen des Tokens: ', error);
        fail('Fehler beim Abrufen des Tokens');
    }
});

describe('GET /todos (unautorisiert)', () => {
    it('sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird', async () => {
        const response = await request(app).get('/todos'); // Kein Authorization-Header

        expect(response.statusCode).toBe(401);
        expect(response.body.error).toBe('Unauthorized');
    });
});

describe('GET /todos', () => {
    it('sollte alle Todos abrufen', async () => {

        const response = await request(app)
            .get('/todos')
            .set('Authorization', `Bearer ${token}`); // Fügen Sie den Authorization-Header hinzu

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

describe('GET /todos/:id', () => {
    it('sollte ein Todo abrufen', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        const id = response.body._id;

        const getResponse = await request(app)
            .get(`/todos/${id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(getResponse.statusCode).toBe(200);
        expect(getResponse.body.title).toBe(newTodo.title);
        expect(getResponse.body.due).toBe(newTodo.due);
    });

    it('sollte einen 404-Fehler zurückgeben, wenn das Todo nicht gefunden wurde', async () => {
        const id = '123456789012345678901234';

        const getResponse = await request(app)
            .get(`/todos/${id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(getResponse.statusCode).toBe(404);
        expect(getResponse.body.error).toMatch(/Todo with id .+ not found/);
    });

    it('sollte einen 500-Fehler zurückgeben, wenn die ID nicht gültig ist', async () => {
        const response = await request(app)
            .get('/todos/1234645645645dsdvevsdzr')
            .set('Authorization', `Bearer ${token}`); // Fügen Sie den Authorization-Header hinzu

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Internal Server Error');
    });
});

describe('PUT /todos/:id', () => {
    it('sollte ein Todo aktualisieren', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        const updatedTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 1,
            "_id": response.body._id
        };

        const updateResponse = await request(app)
            .put(`/todos/${response.body._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(updatedTodo);

        expect(updateResponse.statusCode).toBe(200);
        expect(updateResponse.body.status).toBe(updatedTodo.status);
    });

    it('sollte ein 400-Fehler zurückgeben, wenn die Ids nicht übereinstimmen', async () => {
        const updatedTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 1,
            "_id": "123456789012345678901234"
        };

        const updateResponse = await request(app)
            .put(`/todos/122345`)
            .set('Authorization', `Bearer ${token}`)
            .send(updatedTodo);

        expect(updateResponse.statusCode).toBe(400);
        expect(updateResponse.body.error).toBe('id in body does not match id in path');
    });

    it('sollte einen 404-Fehler zurückgeben, wenn das Todo nicht gefunden wurde', async () => {
        const updatedTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 1,
            "_id": "123443211234432112344321"
        };

        const updateResponse = await request(app)
            .put(`/todos/${updatedTodo._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(updatedTodo);

        expect(updateResponse.statusCode).toBe(404);
        expect(updateResponse.body.error).toMatch(/Todo with id .+ not found/);
    });

    it('sollte einen 500-Fehler zurückgeben, wenn die ID nicht gültig ist', async () => {
        const updatedTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 1,
            "_id": "123456789012345678901234www"
        };

        const response = await request(app)
            .put('/todos/123456789012345678901234www')
            .set('Authorization', `Bearer ${token}`)
            .send(updatedTodo);

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Error updating todo: BSONError: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters or an integer, 123456789012345678901234www');
    });

    it('sollte einen 400-Fehler zurückgeben, wenn der Name des Todos invalide ist', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        // Neues ToDo erstellen
        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        const invalidUpdate = {
            "title": "1" // Titel ist zu kurz
        };

        // Versuchen, das ToDo mit ungültigem Titel zu aktualisieren
        const updateResponse = await request(app)
            .put(`/todos/${response.body._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(invalidUpdate);

        expect(updateResponse.statusCode).toBe(400);
        expect(updateResponse.body.error).toEqual([{
            value: '1',
            msg: 'Title must be at least 3 characters long',
            path: 'title',
            type: 'field',
            location: 'body'
        }]);
    })
});

describe('POST /todos', () => {
    it('sollte ein neues Todo erstellen', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(newTodo.title);
        expect(response.body.due).toBe(newTodo.due);
    });

    it('sollte einen 400-Fehler zurückgeben, wenn das Todo unvollständig ist', async () => {
        const newTodo = {
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0,
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toEqual([
            {
                type: 'field',
                value: undefined,
                msg: 'Invalid value',
                path: 'title',
                location: 'body'
            },
            {
                type: 'field',
                value: undefined,
                msg: 'Titel darf nicht leer sein',
                path: 'title',
                location: 'body'
            },
            {
                type: 'field',
                value: undefined,
                msg: 'Title must be at least 3 characters long',
                path: 'title',
                location: 'body'
            }
        ]);
    });

    it('sollte einen 400-Fehler zurückgeben, wenn das Todo nicht valide ist', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0,
            "invalid": "invalid"
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toEqual([
            {
                "fields": [
                    {
                        "location": "body",
                        "path": "invalid",
                        "value": "invalid"
                    }
                ],
                "msg": "Unknown field(s)",
                "type": "unknown_fields"
            }
        ]);
    });

    it('sollte einen 400-Fehler zurückgeben, wenn kein Todo bereitgestellt wird', async () => {
        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send();

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toEqual([
            {
                type: 'field',
                value: undefined,
                msg: 'Invalid value',
                path: 'title',
                location: 'body'
            },
            {
                type: 'field',
                value: undefined,
                msg: 'Titel darf nicht leer sein',
                path: 'title',
                location: 'body'
            },
            {
                type: 'field',
                value: undefined,
                msg: 'Title must be at least 3 characters long',
                path: 'title',
                location: 'body'
            }
        ]);
    });

    it('sollte einen 400-Fehler zurückgeben, wenn der Name des Todos invalide ist', async () => {
        const newTodo = {
            "title": "", // Titel ist leer
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        }

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toEqual([
            {
                value: '',
                msg: 'Titel darf nicht leer sein',
                path: 'title',
                type: 'field',
                location: 'body'
            },
            {
                value: '',
                msg: 'Title must be at least 3 characters long',
                path: 'title',
                type: 'field',
                location: 'body'
            }
        ]);
    });
});

describe('DELETE /todos/:id', () => {
    it('sollte ein Todo löschen', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        const deleteResponse = await request(app)
            .delete(`/todos/${response.body._id}`)
            .set('Authorization', `Bearer ${token}`);


        expect(deleteResponse.statusCode).toBe(204);

        const getResponse = await request(app)
            .get(`/todos/${response.body._id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(getResponse.statusCode).toBe(404);
        expect(getResponse.body.error).toMatch(/Todo with id .+ not found/);
    });

    it('sollte einen 404-Fehler zurückgeben, wenn das Todo nicht gefunden wurde', async () => {
        const id = '333333333333333333333333';

        const deleteResponse = await request(app)
            .delete(`/todos/${id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(deleteResponse.statusCode).toBe(404);
        expect(deleteResponse.body.error).toMatch('Todo with id 333333333333333333333333 not found');
    });

    it('sollte einen 500-Fehler zurückgeben, wenn die ID nicht gültig ist', async () => {
        const response = await request(app)
            .delete('/todos/123456789012345678901234www')
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Error deleting todo: BSONError: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters or an integer, 123456789012345678901234www');
    });
});
describe('PUT /todos/:id (Fehlerhafte Aktualisierung)', () => {
    it('sollte mit einem 400-Fehler fehlschlagen, wenn der Status ungültig ist', async () => {
        const newTodo = {
            "title": "Ungültigen Status testen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        // Neues ToDo erstellen
        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        const invalidUpdate = {
            "title": "Ungültigen Status testen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": "invalid_status" // Status ist kein gültiger Wert
        };

        // Versuchen, das ToDo mit ungültigem Status zu aktualisieren
        const updateResponse = await request(app)
            .put(`/todos/${response.body._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(invalidUpdate);

        expect(updateResponse.statusCode).toBe(400);
        expect(updateResponse.body.error).toEqual([{
            "location": "body",
            "msg": "Invalid value",
            "path": "status",
            "type": "field",
            "value": "invalid_status"
        }]);
    });
});


afterAll(async () => {
    server.close()
    db.close()
})
