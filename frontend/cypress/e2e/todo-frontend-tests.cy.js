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
  
    cy.get('#todo #status').eq(0).should('contain', 'offen');
    cy.get('#todo #status').eq(0).click();
    cy.get('#todo #status').eq(0).should('contain', 'in Bearbeitung');
  });
});


