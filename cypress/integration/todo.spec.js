describe('Todo Application', () => {

    beforeEach(() => {
        cy.visit('https://glowing-umbrella-69gqr6p4667pf6rg-3000.app.github.dev/todo.html'); // URL der Todo-Anwendung anpassen
        cy.get('button[type="submit"]').click();
        cy.wait(1000);
    });

    it('should add a new todo item', () => {
        cy.get('#todo').type('Einkaufen');
        cy.get('#due').type('2024-12-31');
        cy.get('#status').select('offen');
        cy.get('input[type="submit"]').click();
        cy.get('#todo-list').should('contain', 'Einkaufen');
    });
/*
    it('should mark a todo item as completed', () => {
        cy.get('.todo').contains('Einkaufen').parent().find('button.status').click();
        cy.get('.todo').contains('Einkaufen').parent().find('button.status').should('not.contain', 'offen');
    });

    it('should edit a todo item', () => {
        // Zählen der Todo-Elemente vor dem Editieren
        cy.get('.todo').its('length').then((initialCount) => {
            // Editieren des Todo-Elements
            cy.get('.todo').contains('Einkaufen').parent().find('button.edit').click();
            cy.get('#todo').should('have.value', 'Einkaufen');
            cy.get('#due').should('have.value', '2024-12-31');
            cy.get('#status').should('have.value', 0);
            cy.get('#todo').clear().type('Einkaufen erledigt');
            cy.get('input[type="submit"]').click();
            cy.get('#todo-list').should('contain', 'Einkaufen erledigt');

            // Zählen der Todo-Elemente nach dem Editieren und Überprüfen, ob die Anzahl gleich ist
            cy.get('.todo').its('length').should('eq', initialCount);
        });
    });
*/
    it('should delete a todo item', () => {
        cy.get('.todo').contains('Einkaufen').parent().find('button.delete').click();
        cy.get('.todo-list').should('not.contain', 'Einkaufen');
    });
});