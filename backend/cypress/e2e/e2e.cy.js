describe('ToDo App End-to-End Tests', () => {
    beforeEach(() => {
        cy.visit('/'); // Besucht die URL der Anwendung
    });

    it('sollte ein neues ToDo erstellen', () => {
        cy.get('[data-cy="todo-input"]').type('Neues ToDo');
        cy.get('[data-cy="add-todo-button"]').click();

        cy.get('[data-cy="todo-list"]').should('contain', 'Neues ToDo');
    });

    it('sollte den Status eines ToDos aktualisieren', () => {
        cy.get('[data-cy="todo-list"] li:first [data-cy="status-button"]').click();

        cy.get('[data-cy="todo-list"] li:first').should('have.class', 'completed');
    });

    it('sollte ein ToDo löschen', () => {
        cy.get('[data-cy="todo-list"] li:first [data-cy="delete-button"]').click();

        cy.get('[data-cy="todo-list"] li:first').should('not.exist');
    });
});
