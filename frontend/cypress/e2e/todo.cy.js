const PORT = process.env.PORT || 3000;

describe('Todo', function () {

    beforeEach(() => {
        cy.visit(`http://localhost:${PORT}/todo.html`);
      });

    it('successfully loads', function () {
        cy.visit(`http://localhost:${PORT}/todo.html`) // ändern Sie URL zu Ihrer App
    });

    it('fügt ein neues Todo hinzu und zeigt es an', function () {
        cy.get('#todo').type('Test Todo');
        cy.get('#due').type('2024-11-20');
        cy.get('#status').select('offen');
        cy.get('[type="submit"]').click();
    
        cy.get('#todo-list .todo').should('have.length', 1);
        cy.contains('Neue Aufgabe');
        cy.contains('2024-11-20');
        cy.contains('offen');
    });

    it('zeigt eine Fehlermeldung, wenn kein Titel eingegeben wurde', function () {
        cy.get('#due').type('2024-11-20');
        cy.get('[type="submit"]').click();
    
        cy.contains('Bitte geben Sie einen Titel ein');
    });

    it('ändert den Status eines Todos', function () {
        cy.get('#todo').type('Another Task');
        cy.get('#due').type('2024-11-21');
        cy.get('[type="submit"]').click();

        cy.get('.status').click();
        cy.contains('in Bearbeitung');
    });

    it('löscht ein Todo', function () {
        cy.get('#todo').type('Task to Delete');
        cy.get('#due').type('2024-11-22');
        cy.get('[type="submit"]').click();

        cy.get('.delete').click();
        cy.get('#todo-list .todo').should('have.length', 0);
    });
});
