import { createTodo, getTodoById, updateTodoStatus, deleteTodo } from './todoService';

describe('ToDo Service Unit Tests', () => {
    let todo;

    beforeEach(() => {
        todo = {
            title: "Test ToDo",
            due: "2024-11-16T00:00:00.000Z",
            status: 0,
        };
    });

    it('sollte ein ToDo erstellen', () => {
        const newTodo = createTodo(todo);
        expect(newTodo).toMatchObject(todo);
        expect(newTodo._id).toBeDefined();
    });

    it('sollte ein ToDo anhand der ID abrufen', () => {
        const newTodo = createTodo(todo);
        const fetchedTodo = getTodoById(newTodo._id);
        expect(fetchedTodo).toEqual(newTodo);
    });

    it('sollte den Status eines ToDos aktualisieren', () => {
        const newTodo = createTodo(todo);
        const updatedTodo = updateTodoStatus(newTodo._id, 1);
        expect(updatedTodo.status).toBe(1);
    });

    it('sollte ein ToDo löschen', () => {
        const newTodo = createTodo(todo);
        const result = deleteTodo(newTodo._id);
        expect(result).toBe(true);
    });
});
