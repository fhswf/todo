import {expectTodoToBe, fillInForm, findTodoByTitle, getCurrentTodoCount} from "../e2e-test-utils.js";

describe('ToDo App End-to-End Tests', () => {
    beforeEach(() => {
        cy.visit('todo.html');
        cy.wait(1000);
    });

    it('sollte ein neues ToDo erstellen', () => {
        //const formInput = ['Todo_1', '2022-11-12', 'in Bearbeitung'];
        fillInForm('Todo_1', '2022-11-12', 'in Bearbeitung');
        expectTodoToBe('Todo_1', '2022-11-12', 'in Bearbeitung');
        //fillInForm('Todo_1', '2022-11-12', 'in Bearbeitung');
        //expectTodoToBe('Todo_1', '2022-11-12', 'in Bearbeitung');
        //const expectedDate = new Date('2022-11-12').toLocaleDateString();
        //cy.get('div.todo').should('have.length', '1');
        //expectTodoToBe('sollte ein neues ToDo erstellen', expectedDate, 'in Bearbeitung');

        //cy.get('div.todo').first().get('button.submit').click();
        //cy.get('div.todo').should('have.length', '0');
    });

    it('sollte ein todo bearbeiten', () => {
        //const formInput = ['Todo_2', '2024-11-12', 'in Bearbeitung'];
        fillInForm('Todo_2', '2024-11-12', 'in Bearbeitung');
        expectTodoToBe('Todo_2', '2024-11-12', 'in Bearbeitung');

        const todo = findTodoByTitle('Todo_2');
        todo.find('button.edit').click();
        fillInForm('Todo_2_bearbeitet', '2024-11-12', 'erledigt');
        expectTodoToBe('Todo_2_bearbeitet', '2024-11-12', 'erledigt');
    });

    //Fehlermeldung, da scheint ein Problem vorzuliegen
    it('sollte ein todo löschen', () => {
        fillInForm('Todo_3', '2024-11-12', 'in Bearbeitung');
        expectTodoToBe('Todo_3', '2024-11-12', 'in Bearbeitung');
        const todoCountBefore = getCurrentTodoCount();
        //fillInForm('sollte ein todo löschen', '2025-11-12', 'erledigt');
        const todo = findTodoByTitle('Todo_3');
        //const todoCountAfterCreate = getCurrentTodoCount();
        //todoCountAfterCreate.should('eq', todoCountBefore + 1);
        todo.find('button.delete').click();
        cy.reload();
        cy.wait(1000);
        const todoCountAfterDelete = getCurrentTodoCount();
        expect(todoCountAfterDelete).to.equal(todoCountBefore-1);

        //todoCountAfterDelete.should('lt', todoCountBefore);
    });

    it('sollte ein todo ohne Namen nicht erstellen', () => {
        const todoCountBefore = getCurrentTodoCount();
        fillInForm('', '2026-11-12', 'offen');
        const todoCountAfterCreate = getCurrentTodoCount();
        todoCountAfterCreate.should('eq', todoCountBefore);
    });

    // Fehlermeldung ??
    it('sollte ein todo mit ungültigem Datum nicht erstellen', () => {
        const todoCountBefore = getCurrentTodoCount();
        fillInForm('Todo_4', '123', 'offen');
        //cy.get('input#todo').type('sollte ein todo mit ungültigem Datum nicht erstellen');
        //cy.get('input#due').type('123');
        //cy.get('select#status').select('offen');
        //cy.get('input[type=submit]').click();
        const todoCountAfterCreate = getCurrentTodoCount();
        todoCountAfterCreate.should('eq', todoCountBefore);
    });

    it('sollte den status eines todos ändern', () => {
        fillInForm('sollte den status eines todos ändern', '2026-11-12', 'offen');
        const todo = findTodoByTitle('sollte den status eines todos ändern');
        const button = todo.find('button.status');
        button.should('contain', 'offen');
        button.click();
        expectTodoToBe('sollte den status eines todos ändern', '2026-11-12', 'in Bearbeitung');
    });

    it('sollte todos laden', () => {
        fillInForm('sollte todos laden', '2026-11-12', 'offen');
        cy.reload();
        cy.wait(1000);
        expectTodoToBe('sollte todos laden', '2026-11-12', 'offen');
    });

    it('sollte heutiges Datum + 3 Tage als Standarddatum setzen', () => {
        cy.reload();
        cy.wait(1000);

        // Datum in das richtige Format bringen (YYYY-MM-DD)
        const today = new Date();
        today.setDate(today.getDate() + 3); // 3 Tage hinzufügen

        // Datum im richtigen Format (YYYY-MM-DD)
        const formattedDate = today.toISOString().split('T')[0];

        cy.get('input#due').should('have.value', formattedDate);
        //cy.get('input#due').should('have.value', new Date().toLocaleDateString());
    });
});
