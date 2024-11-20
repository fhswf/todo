import {expectTodoToBe, fillInForm, findTodoByTitle} from "../e2e-test-utils.js";

describe('ToDo App End-to-End Tests', () => {
    beforeEach(() => {
        cy.visit('todo.html');
        cy.wait(1000);
    });

    it('sollte ein neues ToDo erstellen', () => {

        fillInForm('sollte ein neues ToDo erstellen', '2022-11-12', 'in Bearbeitung');

        const expectedDate = new Date('2022-11-12').toLocaleDateString();
        cy.get('div.todo').should('have.length', '1');
        expectTodoToBe('sollte ein neues ToDo erstellen', expectedDate, 'in Bearbeitung');

        cy.get('div.todo').first().get('button.delete').click();
        cy.get('div.todo').should('have.length', '0');
    });

    it('sollte ein todo bearbeiten', () => {
        fillInForm('sollte ein todo bearbeiten', '2023-11-12', 'offen');

        const todo = findTodoByTitle('sollte ein todo bearbeiten');
        todo.find('button.edit').click();

        fillInForm('sollte ein todo bearbeiten haben', '2024-11-12', 'erledigt');

        expectTodoToBe('sollte ein todo bearbeiten haben', '2024-11-12', 'erledigt');
    });

    it('sollte ein todo löschen', () => {});

    it('sollte ein todo ohne Namen nicht erstellen', () => {});

    it('sollte ein todo mit ungültigem Datum nicht erstellen', () => {});

    it('sollte den status eines todos ändern', () => {});

    it('sollte todos laden', () => {});

    it('sollte heutiges Datum als Standarddatum setzen', () => {});
});
