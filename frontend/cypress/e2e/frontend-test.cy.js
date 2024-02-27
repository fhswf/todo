
const PORT = process.env.PORT || 3000;

describe('Todo App', () => {
    beforeEach(() => {
        cy.visit(`localhost:${PORT}/`);
    });

    it('Seite laden', () => {
        cy.contains('h1', 'Todo Liste')
    });

    it('Todo hinzufügen', () => {
        cy.get('#todo').type('Cypress Todo')
        cy.get('#due').type('2024-02-29')
        cy.get('#status').select(0)
        cy.get('form').submit()
        cy.contains('.todo .title', 'Cypress Todo')
    });

});