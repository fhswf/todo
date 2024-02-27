describe('Todo List', () => {

    describe('User Interface Tests', () => {

        beforeEach(() => {
            cy.visit('/todo.html');
        });

        it('should load the initial page', () => {
            cy.contains('h1', 'Todo Liste');
        });

        /*it('should allow users to add a new todo', () => {
            cy.get('#todo').type('Expected New Test ToDo');
            cy.get('#due').type('2026-06-08');
            cy.get('#status').select('offen');
            cy.get('form').submit();
            cy.contains('.todo .title', 'Expected New Test ToDo');
        });*/
    });

    describe('User Input Scenarios', () => {

    beforeEach(() => {
        cy.visit('/todo.html');
    });

    it('should not add a todo with empty input', () => {
        cy.get('form').submit();
        cy.get('.todo .title').should('not.exist');
    });

    it('should change the status of a todo', () => {
        cy.get('#status').select('offen');
        cy.get('#status').should('have.value', '0');
        cy.get('#status').select('in Bearbeitung');
        cy.get('#status').should('have.value', '1');
        cy.get('#status').select('erledigt');
        cy.get('#status').should('have.value', '2');
    });


        /*it('should add a todo with special characters', () => {
            cy.get('#todo').type('@#*+](|[)%&?!"_-');
            cy.get('#due').type('2026-06-08');
            cy.get('#status').select('erledigt');
            cy.get('#todo-form').submit();
            cy.get('.todo .title').should('contain', '!@#$%^&*()_+');
        });*/

        /*it('should add a todo with long input', () => {
            const longInput = 'Die Qualität unserer Software wird durch gründliche Tests, sorgfältige Codeüberprüfungen und die Anwendung bewährter Entwicklungspraktiken kontinuierlich verbessert';
            cy.get('#todo').type(longInput);
            cy.get('#due').type('2026-06-08');
            cy.get('#status').select('in Bearbeitung');
            cy.get('#todo-form').submit();
            cy.get('.todo .title').should('contain', longInput);
        });*/
    });

    /*describe('Todo Deletion', () => {

        beforeEach(() => {
            cy.visit('/todo.html');
        });

        it('should delete a todo', () => {
            cy.get('#todo').type('deleting ToDo');
            cy.get('#due').type('2026-06-08');
            cy.get('#status').select('offen');
            cy.get('form').submit();
            cy.contains('.title', 'deleting ToDo').siblings('.actions').find('.delete').click();
            cy.get('.title').contains('deleting ToDo').should('not.exist');
        });
    });*/

});
