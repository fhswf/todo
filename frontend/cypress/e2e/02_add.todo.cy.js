describe('To-Do App', () => {
  beforeEach( () => {
    // Besuche die Anwendung vor jedem Test
    cy.visit('http://localhost:3000/todo.html');
  });

  it('create todo cypress-input', () => {
    const newItem = 'cypress-input';
    const newDate = "2024-11-16";
    const newStatus = "offen";

    cy.get('#todo').type(newItem);
    cy.get('#due').type(newDate);
    cy.get('#status').type(newStatus);
    cy.get('input[type="submit"]').click();

    // Überprüfen, ob das neue Element hinzugefügt wurde
    cy.get('#todo-list')
      .should('contain', newItem)
      .should('contain', newDate)
      .should('contain', newStatus);
  });
  
  it('created todo cypress-input check form reset', () => {
    cy.get('#due').should('have.value', '2024-12-03');
    cy.get('#status').should('have.value', 'offen');
    cy.get('#todo').should('have.value', '');
  });

  it('should not create empty todo', () => {
    cy.get('input[type="submit"]').click();

    // Überprüfen, ob keine leeren Elemente hinzugefügt werden
    cy.get('.todo-list').children().filter(c => c.text().trim() === '').should('have.length', 0);
  });
});