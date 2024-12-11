import {deleteTodoByTitle, expectTodoToBe, fillInForm, findTodoByTitle} from "../e2e-test-utils.js";

describe('ToDo App End-to-End Tests', () => {
    let chain;
    beforeEach(async () => {
        chain = cy;
        chain = chain.visit('todo.html').wait(1000);
    });

    it('sollte ein neues ToDo erstellen', () => {
        chain = fillInForm(chain, 'sollte ein neues ToDo erstellen', '2022-11-12', 'in Bearbeitung');
        chain = expectTodoToBe(chain, 'sollte ein neues ToDo erstellen', '2022-11-12', 'in Bearbeitung');
        chain = deleteTodoByTitle(chain, 'sollte ein neues ToDo erstellen');
    });

    it('sollte ein todo bearbeiten', () => {
        chain = fillInForm(chain, 'Todo_2', '2024-11-12', 'in Bearbeitung');
        chain = expectTodoToBe(chain, 'Todo_2', '2024-11-12', 'in Bearbeitung');

        chain = findTodoByTitle(chain, 'Todo_2')
            .find('button.edit').click();
        chain = fillInForm(chain, 'Todo_2_bearbeitet', '2024-11-12', 'erledigt');
        chain = expectTodoToBe(chain, 'Todo_2_bearbeitet', '2024-11-12', 'erledigt');
        chain = deleteTodoByTitle(chain, 'Todo_2_bearbeitet');
    });

    it('sollte ein todo löschen', () => {
        chain = fillInForm(chain, 'sollte ein todo löschen', '2025-11-12', 'erledigt');
        chain = expectTodoToBe(chain, 'sollte ein todo löschen', '2025-11-12', 'erledigt');
        chain = deleteTodoByTitle(chain, 'sollte ein todo löschen');
    });

    it('sollte ein todo ohne Namen nicht erstellen', () => {
        chain = chain.get('input#todo').invoke('attr', 'value', '')
            .get('input#due').type('2026-11-12')
            .get('select#status').select(1)
            .get('input[type=submit]').click()
            .get('div.todo').should('have.length', 0);
    });

    it('sollte den status eines todos ändern', () => {
        chain = fillInForm(chain, 'sollte den status eines todos ändern', '2026-11-12', 'offen');
        chain = findTodoByTitle(chain, 'sollte den status eines todos ändern');
        chain = chain.find('button.status').should('contain', 'offen').click();
        chain = expectTodoToBe(chain, 'sollte den status eines todos ändern', '2026-11-12', 'in Bearbeitung');
        chain = deleteTodoByTitle(chain, 'sollte den status eines todos ändern');
    });

    it('sollte todos laden', () => {
        chain = fillInForm(chain, 'sollte todos laden', '2026-11-12', 'offen');
        chain = expectTodoToBe(chain, 'sollte todos laden', '2026-11-12', 'offen');
        chain.reload().wait(1000);
        chain = expectTodoToBe(chain, 'sollte todos laden', '2026-11-12', 'offen');
        chain = deleteTodoByTitle(chain, 'sollte todos laden');
    });

    it('sollte heutiges Datum + 3 Tage als Standarddatum setzen', () => {
        // Datum in das richtige Format bringen (YYYY-MM-DD)
        const today = new Date();
        today.setDate(today.getDate() + 3); // 3 Tage hinzufügen

        // Datum im richtigen Format (YYYY-MM-DD)
        const formattedDate = today.toISOString().split('T')[0];

        cy.get('input#due').should('have.value', formattedDate);
    });
});
