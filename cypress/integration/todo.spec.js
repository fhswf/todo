

describe('Todo List', () => {
    it('Adds a new todo', () => {
      cy.visit('/'); // Assuming your todo app is served on the root path
  
      cy.get('input[name="title"]').type('Test todo');
      cy.get('input[name="due"]').type('2024-02-10');
      cy.get('select[name="status"]').select('offen');
      cy.get('input[type="submit"]').click();
  
      cy.contains('.todo .title', 'Test todo').should('exist');
    });
  
    it('Changes the status of a todo', () => {
      cy.visit('/');
  
      cy.get('.todo .status').eq(0).should('contain', 'offen');
      cy.get('.todo .status').eq(0).click();
      cy.get('.todo .status').eq(0).should('contain', 'in Bearbeitung');
    });
  
    it('Deletes a todo', () => {
      cy.visit('/');
  
      cy.get('.todo .delete').eq(0).click();
      cy.contains('.todo .title', 'Test todo').should('not.exist');
    });
  });
  