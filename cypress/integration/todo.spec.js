describe('Todo Application', () => {

    beforeEach(() => {
        cy.visit('https://glowing-umbrella-69gqr6p4667pf6rg-3000.app.github.dev/todo.html'); // URL der Todo-Anwendung anpassen
        cy.get('button[type="submit"]').click();
        cy.wait(1000);
    });

    it('should add a new todo item', () => {
        cy.get('#todo').type('Manfred Schabulke');
        cy.get('#due').type('2023-12-31');
        cy.get('#status').select('offen');
        cy.get('input[type="submit"]').click();
        cy.get('#todo-list').should('contain', 'Manfred Schabulke');
    });

    /*it('should mark a todo item as completed', () => {
        cy.get('.todo-list li').first().find('input[type="checkbox"]').check();
        cy.get('.todo-list li').first().should('have.class', 'completed');
    });

    it('should delete a todo item', () => {
        cy.get('.todo-list li').first().find('button.delete').click();
        cy.get('.todo-list').should('not.contain', 'Todo zu löschen');
    });*/
});