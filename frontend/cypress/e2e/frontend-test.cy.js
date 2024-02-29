
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

    it('Todo ändern', () => {
        cy.get('#todo-list').last()
        cy.get('.todo .edit').last().click()
        cy.get('#todo').clear().type('Cypress Todo geändert')
        cy.get('#due').clear().type('2024-02-28')
        cy.get('form').submit()
        cy.contains('.todo .title', 'Cypress Todo geändert')
    });

    it('Todo Status ändern', () => {
        cy.get('#todo-list').last().get('.status').last().click()
        cy.get('#todo-list').last().get('.status').contains('in Bearbeitung')
    });

    it('Todo löschen', () => {
        cy.get('#todo-list').last().get('.todo .delete').last().click()
        cy.contains('.todo .title', 'Cypress Todo geändert').should('not.exist')
    });

});