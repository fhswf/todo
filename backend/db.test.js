import DB from './db'; // Make sure to include the file extension
import { ObjectId } from 'mongodb';



describe('DB', () => {
  let db;

  beforeAll(async () => {
    db = new DB();
    await db.connect();
  });

  afterAll(async () => {
    await db.close();
  });

  beforeEach(async () => {
    await db.clearAll();
  });

  describe('queryAll', () => {
    it('should fetch all todos', async () => {
      await db.insert({ title: 'Todo 1'});
      await db.insert({ title: 'Todo 2'});

      // Execute
      const todos = await db.queryAll();

      // Verify
      expect(todos.length).toBe(2);
    });
  });

  describe('queryById', () => {
    it('should fetch a todo by id', async () => {
      // Setup: Insert a test todo
      const insertedTodo = await db.insert({ title: 'Todo 3'});
      const id = insertedTodo._id.toString();

      // Execute
      const todo = await db.queryById(id);

      // Verify
      expect(todo).toEqual(expect.objectContaining({ title: 'Todo 3' }));
    });
  });

  // Continue with tests for update, delete, insert
  describe('update', () => {
    it('should update a todo', async () => {
      // Setup: Insert a test todo
      const insertedTodo = await db.insert({ title: 'Todo 3'});
      const id = insertedTodo._id.toString();

      // Execute
      const updatedTodo = await db.update(id, { title: 'Todo 3'});

      // Verify
      expect(updatedTodo).toEqual(expect.objectContaining({ title: 'Todo 3', }));
    });
  });

  describe('delete', () => {
    it('should delete a todo', async () => {
      // Setup: Insert a test todo
      const insertedTodo = await db.insert({ title: 'Todo 3'});
      const id = insertedTodo._id.toString();

      // Execute
      const deletedTodo = await db.delete(id);

      // Verify
      expect(deletedTodo).toEqual(expect.objectContaining({ title: 'Todo 3' }));
    });
  });

  describe('insert', () => {
    it('should insert a todo', async () => {
      // Setup: Insert a test todo
      const insertedTodo = await db.insert({ title: 'Todo 3'});

      // Verify
      expect(insertedTodo).toEqual(expect.objectContaining({ title: 'Todo 3' }));
    });
  });
});

