describe('todo app general tests', () => {
  before(() => {
    // delete all todos before start the tests
    cy.request('DELETE', 'http://127.0.0.1:3000/todos');
  });

  beforeEach( () => {
    // visit the application before each test
    cy.visit('http://127.0.0.1:3000/todo.html');
  });

  it('check if application succesfully load', () => {
    // check if the site/elements are correctly loaded
    cy.get('.new-todo').should('be.visible');
    cy.get('#todo-list').should('exist');
  });

  it('form exists', () => {
    // check if the form exists
    cy.get('form').should('exist');
  });

  it('inputs and submit button exists', () => {
    // check if the elements of the form exists
    cy.get('form').within(() => {
      cy.get('input[type="text"]').should('exist'); // todo title
      cy.get('input[type="date"]').should('exist'); // due date
      cy.get('select#status').should('exist'); // state
      cy.get('input[type="submit"]').should('exist'); // submit button
    });
  });
});