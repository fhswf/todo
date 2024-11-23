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
        expect(MongoClient.connect).toHaveBeenCalledTimes(1);

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

    it('sollte einen 404-Fehler zurückgeben, wenn das Todo nicht gefunden wurde', async () => {
        const updatedTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 1,
            "_id": "123456789012345678901234"
        };

        const updateResponse = await request(app)
            .put(`/todos/${updatedTodo._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(updatedTodo);

        expect(updateResponse.statusCode).toBe(404);
        expect(updateResponse.body.error).toMatch(/Todo with id .+ not found/);
    });
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
        expect(response.body.error).toBe('Bad Request');
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
        expect(response.body.error).toBe('Bad Request');
    });

    it('sollte einen 400-Fehler zurückgeben, wenn kein Todo bereitgestellt wird', async () => {
        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Bad Request');
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
        const id = '123456789012345678901234';

        const deleteResponse = await request(app)
            .delete(`/todos/${id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(deleteResponse.statusCode).toBe(404);
        expect(deleteResponse.body.error).toMatch(/Todo with id .+ not found/);
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
            "status": "invalid_status" // Status ist kein gültiger Wert
        };

        // Versuchen, das ToDo mit ungültigem Status zu aktualisieren
        const updateResponse = await request(app)
            .put(`/todos/${response.body._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(invalidUpdate);

        expect(updateResponse.statusCode).toBe(400);
        expect(updateResponse.body.error).toBe('Invalid status value');
    });
});


afterAll(async () => {
    server.close()
    db.close()
})
