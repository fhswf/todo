describe('ToDo App End-to-End Tests', () => {
    beforeEach(() => {
        cy.visit('htpp://localhost:3000/todo.html'); // Besucht die URL der Anwendung
    });

    it('sollte ein neues ToDo erstellen', () => {

        cy.get('.status').should('have.length', 3);
    });
});
