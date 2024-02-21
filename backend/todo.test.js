import request from 'supertest';
import { app, server, db } from './index';
import getKeycloakToken from './utils';
import { body } from 'express-validator';

let token; // Speichert den abgerufenen JWT-Token

beforeAll(async () => {
    token = await getKeycloakToken();
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

describe('POST /todos', () => {
    it('sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response= await request(app)
            .post('/todos')
            .send(newTodo);
        expect(response.statusCode).toBe(401);
    });

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

    it('sollte einen 400-Fehler zurückgeben, wenn der Titel fehlt', async () => {
        const newTodo = {
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0,
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);
        expect(response.statusCode).toBe(400);
    });

    it('sollte einen 400-Fehler zurückgeben, wenn ToDo fehlt', async () => {
        const newTodo = {};

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);
        expect(response.statusCode).toBe(400);
    });

    it('sollte einen 400-Fehler zurückgeben, wenn das Datum fehlt', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);
        expect(response.statusCode).toBe(400);
    });

    it('sollte einen 400-Fehler zurückgeben, wenn der Status fehlt', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z"
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);
        expect(response.statusCode).toBe(400);
    });

    it('sollte einen 400-Fehler zurückgeben, wenn das Datum nicht valide ist', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "invalid",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        expect(response.statusCode).toBe(400);
    });

    it('sollte einen 400-Fehler zurückgeben, wenn das Datum leer ist', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        expect(response.statusCode).toBe(400);
    });

    it('sollte einen 400-Fehler zurückgegen, wenn Titel zu kurz ist', async () => {
        const newTodo = {
            "title": "s",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        expect(response.statusCode).toBe(400);
    })

    it('sollte einen 400-Fehler zurückgegen, wenn Status ungültig ist', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 756
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);
        expect(response.statusCode).toBe(400);
    });

});


describe('GET /todos/id', () => {
    it('sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
            .post(`/todos`)
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);
        
        const id = response.body._id;
        const getResponse=await request(app)
            .get(`/todos/${id}`)

        expect(getResponse.statusCode).toBe(401);
        expect(getResponse.body.error).toBe('Unauthorized');
    });

    it('sollte einen 404-Fehler zurückgeben, wenn kein ToDo gefunden wird', async () => {  
        const getResponse = await request(app)
            .get(`/todos/1234`)
            .set('Authorization', `Bearer ${token}`);

        expect(getResponse.statusCode).toBe(404);
    });

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
    it('sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird', async () => {
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

        const updateResponse = await request(app)
            .put(`/todos/${id}`)
            .send(newTodo);
        
        expect(updateResponse.statusCode).toBe(401);
    })

    //test
    it('sollte einen 400-Fehler zurückgeben, todoID im Body anders', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);
        
        const newTodo122= {
            "_id": "123456789012345678901234",
           "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };
        const id = response.body._id;
        
        const updateResponse = await request(app)
            .put(`/todos/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo122);
        console.log(updateResponse.body);
        expect(updateResponse.statusCode).toBe(400);
    });

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

    it('sollte einen 400-Fehler zurückgeben, wenn das Datum nicht valide ist', async () => {
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
            "due": "invalid",
            "status": 1,
            "_id": response.body._id
        };

        const updateResponse = await request(app)
            .put(`/todos/${response.body._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(updatedTodo);

        expect(updateResponse.statusCode).toBe(400);
    })
    it('sollte einen 400-Fehler zurückgeben, wenn Titel zu kurz ist', async () => {
        const newTodo = {
            "title": "Ü",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .set('Authorization', `Bearer ${token}`)
            .send(newTodo);

        const updatedTodo = {
            "title": "Ü",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 1,
            "_id": response.body._id
        };

        const updateResponse = await request(app)
            .put(`/todos/${response.body._id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(updatedTodo);

        expect(updateResponse.statusCode).toBe(400);
    });
});

describe('DELETE /todos/:id', () => {

    it('sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird', async () => {
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


        expect(deleteResponse.statusCode).toBe(401);
        expect(deleteResponse.body.error).toBe('Unauthorized');
    });

    it('sollte einen 404-Fehler zurückgeben, wenn kein ToDo zu löschen gefunden', async () => {
        const deleteResponse = await request(app)
            .delete(`/todos/1234`)
            .set('Authorization', `Bearer ${token}`);


        expect(deleteResponse.statusCode).toBe(404);
    });

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
    });
});

afterAll(async () => {
    server.close()
    db.close()
})
