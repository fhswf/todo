import request from 'supertest';
import { app, server, db } from './index';
import getKeycloakToken from './utils';

let token; // Speichert den abgerufenen JWT-Token

beforeAll(async () => {
    token = await getKeycloakToken();
});

//Aufruf ohne Token
describe('GET /todos (unautorisiert)', () => {
    it('sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird', async () => {
        const response = await request(app).get('/todos');//Ohne Token

        expect(response.statusCode).toBe(401);
        expect(response.body.error).toBe('Unauthorized');
    });
});

describe('POST /todos (unautorisiert)', () => {
    it('sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .send(newTodo);//POST Ohne Token


        expect(response.statusCode).toBe(401);
        expect(response.body.error).toBe('Unauthorized');
    });
});

describe('PUT /todos/:id (unautorisiert)', () => {
    it('sollte einen 401-Fehler zurückgeben, wenn ein fehlerhaftes Token bereitgestellt wird', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
        .post('/todos')
        .set('Authorization', `Bearer ${token}`)//Gültiger Token zur Erstellung
        .send(newTodo);

        const id = response.body._id;

        const updatedTodo = {
        "title": "Übung 4 machen",
        "due": "2022-11-12T00:00:00.000Z",
        "status": 1,
        "_id": `${id}`
        };

        const updateResponse = await request(app)
        .put(`/todos/${id}`)
        .set('Authorization', `Bearer 1`)//Update mit falschem Token
        .send(updatedTodo);

        expect(updateResponse.statusCode).toBe(401);
        expect(updateResponse.body.error).toBe('Unauthorized');
    });
});

describe('DELETE /todos/:id (unauthorisiert)', () => {
    it('sollte einen 401-Fehler zurückgeben, wenn kein Token bereitgestellt wird', async () => {
        const newTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 0
        };

        const response = await request(app)
            .post('/todos')
            .send(newTodo);

        const deleteResponse = await request(app)
            .delete(`/todos/${response.body._id}`);//Löschen ohne Token


        expect(deleteResponse.statusCode).toBe(401);
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
    it('sollte den Fehler 400 zurückgeben, falls das Todo unvollständig ist', async () => {
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
        const updatedTodo = {
            "title": "Übung 4 machen",
            "status": 1,
            "_id": `${id}`
        };
        const updateResponse = await request(app)
            .put(`/todos/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(updatedTodo);

        expect(updateResponse.statusCode).toBe(400);
        expect(updateResponse.body.error).toBe('Bad Request');
    });
    it('sollte einen 400-Fehler zurückgeben, wenn das Todo ungültig ist', async () => {
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
        const updatedTodo = {
            "title": "Übung 4 machen",
            "due": "2022-11-12T00:00:00.000Z",
            "status": 1,
            "invalid": "invalid"
        };
        const updateResponse = await request(app)
            .put(`/todos/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(updatedTodo);

        expect(updateResponse.statusCode).toBe(400);
        expect(updateResponse.body.error).toBe('Bad Request');
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

        expect(deleteResponse.statusCode).toBe(204);//Erfolgsrückmeldung zum Löschen

        const getResponse = await request(app)
            .get(`/todos/${response.body._id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(getResponse.statusCode).toBe(404);//Erfolgsrückmeldung zum nicht gefundenen Objekt
    });
});


afterAll(async () => {
    server.close()
    db.close()
})
