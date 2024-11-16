import request from 'supertest';
import { app, server } from './index'; // Importiere die Express-App und den Server

describe('ToDo API Integration Tests', () => {
    let todoId;
    const newTodo = {
        title: "Integration Test ToDo",
        due: "2024-11-16T00:00:00.000Z",
        status: 0,
    };

    afterAll(() => {
        server.close(); // Schließe den Server nach allen Tests
    });

    it('sollte ein neues ToDo erstellen', async () => {
        const response = await request(app).post('/todos').send(newTodo);
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(newTodo.title);
        todoId = response.body._id; // Speichert die ID für spätere Tests
    });

    it('sollte alle ToDos abrufen', async () => {
        const response = await request(app).get('/todos');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.find(todo => todo._id === todoId)).toBeDefined();
    });

    it('sollte ein spezifisches ToDo abrufen', async () => {
        const response = await request(app).get(`/todos/${todoId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe(newTodo.title);
    });

    it('sollte den Status eines ToDos aktualisieren', async () => {
        const response = await request(app)
            .put(`/todos/${todoId}`)
            .send({ status: 1 });
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe(1);
    });

    it('sollte ein ToDo löschen', async () => {
        const response = await request(app).delete(`/todos/${todoId}`);
        expect(response.statusCode).toBe(204);

        // Überprüfen, ob das ToDo tatsächlich gelöscht wurde
        const checkResponse = await request(app).get(`/todos/${todoId}`);
        expect(checkResponse.statusCode).toBe(404);
    });
});
