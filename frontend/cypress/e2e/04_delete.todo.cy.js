describe('todo app delete tests', () => {
  let todoItemDelete = {
    id: 0,
    title: 'cypress-delete',
    date: '2024-11-16',
    state: 0, // open
  };

  beforeEach( () => {
    // visit the application before each test
    cy.visit('http://127.0.0.1:3000/todo.html');
  });

  it('delete todo', () => {
    // add delete todo
    cy.get('#todo-form input#todo').type(todoItemDelete.title);
    cy.get('#todo-form input#due').type(todoItemDelete.date);
    cy.get('#todo-form select#status').select(todoItemDelete.state);
    cy.get('#todo-form input[type="submit"]').click();

    cy.get('#todo-list .todo').last().invoke('attr', 'id')
    .then((id) => {
      cy.log('get id of todo item: ' + id);
      todoItemDelete.id = id;

      // delete todo
      cy.get(`#todo-list #${todoItemDelete.id}`).find('button.delete').click();

      // check if the element not exists
      cy.get(`#todo-list #${todoItemDelete.id}`).should('not.exist');
    });
  });
});