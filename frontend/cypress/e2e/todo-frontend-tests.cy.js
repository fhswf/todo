describe('Todo List', () => {
    it('Adds a new todo', () => {
     cy.visit('/todo.html'); 
     it('loads the initial page', () => {
      cy.contains('h1', 'Todo Liste')
    })

    it('allows users to add a new todo', () => {
      cy.get('#todo').type('Neues Todo von Cypress')
      cy.get('#due').type('2025-01-01')
      cy.get('#status').select('offen')
      cy.get('form').submit()
      cy.contains('.todo .title', 'Neues Todo von Cypress')
  })
});
});


describe('UI Tests', () => {
  it('changes the status of a todo', () => {
    cy.visit('/todo.html');
  
    cy.get('#status').select('offen');
    cy.get('#status').should('have.value', '0');
    cy.get('#status').select('in Bearbeitung');
    cy.get('#status').should('have.value', '1');
    cy.get('#status').select('erledigt');
    cy.get('#status').should('have.value', '2');
  });
});


const { v4: uuidv4 } = require('uuid');

describe('Todo List Test (add todo)', () => {
  it('should add a new todo identified by GUID', () => {

    cy.visit('/todo.html');

    const uniqueId = uuidv4();

    cy.get('#todo').type(`Todo_${uniqueId}`);
    cy.get('#due').type('2024-02-18');
    cy.get('#status').select('offen');

    cy.get('#todo-form').submit();

    cy.get('#todo-list').should('contain', `Todo_${uniqueId}`);
  });
});