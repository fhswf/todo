describe('To-Do App', () => {
  beforeEach( () => {
    // Besuche die Anwendung vor jedem Test
    cy.visit('http://localhost:3000/todo.html');
  });

  it('change todo state to worked on from button', () => {
    const newItem = 'cypress-change';
    const newDate = '2024-01-01';

    // To-Do hinzufügen
    cy.get('#todo').type(newItem);
    cy.get('#due').type(newDate);
    cy.get('input[type="submit"]').click();

    // Prüfen ob das Element da ist
    cy.get('#todo-list').should('contain', newItem);

    // Markiere das neue Element als in Bearbeitung
    cy.contains(newItem).parent().find('.status').click();

    // Überprüfen, ob das Element als in Bearbeitung markiert wurde
    cy.contains(newItem).parent().find('.status').should('have.text', 'in Bearbeitung');
  });

  it('change todo state to finished from button', () => {
    const newItem = 'cypress-change';

    // Prüfen ob das Element da ist
    cy.get('#todo-list').should('contain', newItem);

    // Markiere das neue Element als abgeschlossen
    cy.contains(newItem).parent().find('.status').click();

    // Überprüfen, ob das Element als abgeschlossen markiert ist
    cy.contains(newItem).parent().find('.status').should('have.text', 'erledigt');
  });

  it('change todo check form load', () => {
    const newItem = 'cypress-change';
    const newDate = '2024-01-01';
    const newState = 'erledigt';

    // Prüfen ob das Element da ist
    cy.get('#todo-list').should('contain', newItem);

    // Bearbeite das Element
    cy.contains(newItem).parent().find('.edit').click();

    // Prüfen ob die Daten ins Formular geladen werden
    cy.get('#todo').should(newTodo);
    cy.get('#due').should(newDate);
    cy.get('#status').should(newState);
  });

  it('change todo date to 2024-12-01', () => {
    const newItem = 'cypress-change';
    const newDate = '2024-12-01';

    // Prüfen ob das Element da ist
    cy.get('#todo-list').should('contain', newItem);

    // Bearbeite das Element
    cy.contains(newItem).parent().find('.edit').click();

    // Prüfen ob die Daten ins Formular geladen werden
    cy.get('#due').type(newDate);

    // Formular absenden
    cy.get('input[type="submit"]').click();

    // Prüfen ob das Element geändert wurde
    cy.get('#todo-list').should('contain', newDate);
  });

  it('change todo text to cypress-change-changed', () => {
    const currentItem = 'cypress-change';
    const newItem = 'cypress-change-changed';

    // Prüfen ob das Element da ist
    cy.get('#todo-list').should('contain', currentItem);

    // Bearbeite das Element
    cy.contains(currentItem).parent().find('.edit').click();

    // Prüfen ob die Daten ins Formular geladen werden
    cy.get('#todo').type('-changed');

    // Formular absenden
    cy.get('input[type="submit"]').click();

    // Prüfen ob das Element geändert wurde
    cy.get('#todo-list').should('contain', newItem);
  });

  //TODO Status prüfen für formular
});