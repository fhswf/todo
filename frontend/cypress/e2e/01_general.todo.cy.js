describe('To-Do App', () => {
  before(() => {
    // Lösche alle To-Dos vor jedem Test
    cy.request('DELETE', 'http://localhost:3000/todos');
  });

  beforeEach( () => {
    // Besuche die Anwendung vor jedem Test
    cy.visit('http://localhost:3000/todo.html');
  });

  it('load application', () => {
    // Überprüfen, ob die Seite korrekt geladen wird
    cy.get('.new-todo').should('be.visible');
    cy.get('#todo-list').should('exist');
  });

  it('form exists', () => {
    // Überprüfen, ob ein <form> vorhanden ist
    cy.get('form').should('exist');
  });

  it('inputs and submit button exists', () => {
    // Überprüfen, ob die Eingabefelder und ein Button im Formular vorhanden sind
    cy.get('form').within(() => {
      cy.get('input[type="text"]').should('exist'); // Textfeld prüfen
      cy.get('input[type="date"]').should('exist'); // Zu erledigen bis prüfen
      cy.get('select#status').should('exist'); // Status prüfen
      cy.get('input[type="submit"]').should('exist'); // Absenden-Button prüfen
    });
  });
});