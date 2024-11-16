describe('To-Do App', () => {
  beforeEach( () => {
    // Besuche die Anwendung vor jedem Test
    cy.visit('http://localhost:3000/todo.html');
  });

  it('Lade die Anwendung', () => {
    // Überprüfen, ob die Seite korrekt geladen wird
    // cy.contains('Todo Liste').should('be.visible');
    cy.get('.new-todo').should('be.visible');
    cy.get('#todo-list').should('exist');
  });

  it('Es gibt ein Formular', () => {
    // Überprüfen, ob ein <form> vorhanden ist
    cy.get('form').should('exist');
  });

  it('Das Formular hat Eingabefelder und ein Absendebutton (submit)', () => {
    // Überprüfen, ob die Eingabefelder und ein Button im Formular vorhanden sind
    cy.get('form').within(() => {
      cy.get('input[type="text"]').should('exist'); // Textfeld prüfen
      cy.get('input[type="submit"]').should('exist'); // Absenden-Button prüfen
    });
  });

  it('Prüfe, ob eine Eingabe funktioniert', () => {
    const newItem = 'Cypress-Input';
    const newDate = "2024-11-16";
    const newStatus = "offen";
    
    cy.get('#todo').type(newItem);
    cy.get('#due').type(newDate);
    cy.get('#status').type(newStatus);
    cy.get('input[type="submit"]').click();

    // Überprüfen, ob das neue Element hinzugefügt wurde
    cy.get('#todo-list')
      .should('contain', newItem);
  });

  it('ändere ein Todo als erledigt', () => {
    const newItem = 'Write Tests';

    // To-Do hinzufügen
    cy.get('#todo').type(newItem);
    cy.get('input[type="submit"]').click();

    // Markiere das neue Element als abgeschlossen
    cy.contains(newItem).parent().find('.todo-checkbox').click();

    // Überprüfen, ob das Element als abgeschlossen markiert ist
    cy.contains(newItem).should('have.class', 'completed');
  });

  it('lösche ein Item', () => {
    const newItem = 'Delete Me';

    // To-Do hinzufügen
    cy.get('.todo-input').type(newItem);
    cy.get('.todo-add-button').click();

    // Lösche das Element
    cy.contains(newItem).parent().find('.todo-delete-button').click();

    // Überprüfen, ob das Element gelöscht wurde
    cy.get('.todo-list').should('not.contain', newItem);
  });

  it('should not allow adding an empty to-do item', () => {
    cy.get('.todo-add-button').click();

    // Überprüfen, ob keine leeren Elemente hinzugefügt werden
    cy.get('.todo-list').children().should('have.length', 0);
  });

  it('should filter completed and active items', () => {
    const items = ['Task 1', 'Task 2', 'Task 3'];

    // Aufgaben hinzufügen
    items.forEach((item) => {
      cy.get('.todo-input').type(item);
      cy.get('.todo-add-button').click();
    });

    // Markiere "Task 2" als abgeschlossen
    cy.contains('Task 2').parent().find('.todo-checkbox').click();

    // Zeige nur abgeschlossene Aufgaben an
    cy.get('.filter-completed').click();
    cy.get('.todo-list').should('contain', 'Task 2').and('not.contain', 'Task 1').and('not.contain', 'Task 3');

    // Zeige nur aktive Aufgaben an
    cy.get('.filter-active').click();
    cy.get('.todo-list').should('not.contain', 'Task 2').and('contain', 'Task 1').and('contain', 'Task 3');
  });

  it('should clear all completed items', () => {
    const items = ['Clean room', 'Wash dishes'];

    // Aufgaben hinzufügen
    items.forEach((item) => {
      cy.get('.todo-input').type(item);
      cy.get('.todo-add-button').click();
    });

    // Markiere alle Aufgaben als abgeschlossen
    items.forEach((item) => {
      cy.contains(item).parent().find('.todo-checkbox').click();
    });

    // Lösche alle abgeschlossenen Aufgaben
    cy.get('.clear-completed-button').click();

    // Überprüfen, ob die Liste leer ist
    cy.get('.todo-list').children().should('have.length', 0);
  });
});