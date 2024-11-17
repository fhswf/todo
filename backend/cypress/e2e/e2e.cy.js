import {createTodo} from "../e2e-test-utils.js";

describe('ToDo App End-to-End Tests', () => {
    beforeEach(() => {
        cy.visit('todo.html');
        cy.wait(1000);
    });

    it('sollte ein neues ToDo erstellen', () => {

        createTodo('Übung 4 machen', '2022-11-12', 'in Bearbeitung');

        const expectedDate = new Date('2022-11-12').toLocaleDateString();
        cy.get('div.todo').should('have.length', '1');
        cy.get('div.todo .title').first().should('contain', 'Übung 4 machen');
        cy.get('div.todo .due').first().should('contain', expectedDate);
        cy.get('div.todo button.status').first().should('contain', 'in Bearbeitung');

        cy.get('div.todo').first().get('button.delete').click();
        cy.get('div.todo').should('have.length', '0');
    });

    it('sollte ein todo bearbeiten', () => {});

    it('sollte ein todo löschen', () => {});

    it('sollte ein todo ohne Namen nicht erstellen', () => {});

    it('sollte ein todo mit ungültigem Datum nicht erstellen', () => {});
});
