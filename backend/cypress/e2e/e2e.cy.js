import {expectTodoToBe, fillInForm, findTodoByTitle, getCurrentTodoCount} from "../e2e-test-utils.js";

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

    it('sollte ein todo löschen', () => {
        const todoCountBefore = getCurrentTodoCount();
        fillInForm('sollte ein todo löschen', '2025-11-12', 'erledigt');
        const todo = findTodoByTitle('sollte ein todo löschen');
        const todoCountAfterCreate = getCurrentTodoCount();
        expect(todoCountAfterCreate).to.equal(todoCountBefore + 1);
        todo.find('button.delete').click();
        const todoCountAfterDelete = getCurrentTodoCount();
        expect(todoCountAfterDelete).to.equal(todoCountBefore);
    });

    // Fehlermeldung ??
    it('sollte ein todo ohne Namen nicht erstellen', () => {
        const todoCountBefore = getCurrentTodoCount();
        fillInForm('', '2026-11-12', 'offen');
        const todoCountAfterCreate = getCurrentTodoCount();
        expect(todoCountAfterCreate).to.equal(todoCountBefore);
    });

    // Fehlermeldung ??
    it('sollte ein todo mit ungültigem Datum nicht erstellen', () => {
        const todoCountBefore = getCurrentTodoCount();
        cy.get('input#todo').type('sollte ein todo mit ungültigem Datum nicht erstellen');
        cy.get('input#due').type('123');
        cy.get('select#status').select('offen');
        cy.get('input[type=submit]').click();
        const todoCountAfterCreate = getCurrentTodoCount();
        expect(todoCountAfterCreate).to.equal(todoCountBefore);
    });

    it('sollte den status eines todos ändern', () => {
        fillInForm('sollte den status eines todos ändern', '2026-11-12', 'offen');
        const todo = findTodoByTitle('sollte den status eines todos ändern');
        const button = todo.find('button.status');
        expect(button).to.contain('offen');
        button.click();
        expectTodoToBe('sollte den status eines todos ändern', '2026-11-12', 'in Bearbeitung');
    });

    it('sollte todos laden', () => {
        fillInForm('sollte todos laden', '2026-11-12', 'offen');
        cy.reload();
        cy.wait(1000);
        expectTodoToBe('sollte todos laden', '2026-11-12', 'offen');
    });

    it('sollte heutiges Datum als Standarddatum setzen', () => {
        const date = cy.get('input#due').should('have.value', new Date().toLocaleDateString());
        expect(date).to.equal(new Date().toLocaleDateString());
    });
});
