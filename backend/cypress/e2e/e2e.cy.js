describe('ToDo App End-to-End Tests', () => {
    beforeEach(() => {
        cy.visit('todo.html'); // Besucht die URL der Anwendung
    });

    it('sollte ein neues ToDo erstellen', () => {

        cy.get('input.todo').type('Übung 4 machen');
        cy.get('input.due').type('2022-11-12');
        cy.get('select.status').select('In Bearbeitung');
        cy.get('input[type=submit]').click();

        cy.get('div.todo').should('have.length', '1');
        cy.get('div.todo title').first().should('contain', 'Übung 4 machen');
        cy.get('div.todo due').first().should('contain', '2022-11-12');
        cy.get('div.todo button.status').first().should('contain', 'In Bearbeitung');

        cy.get('div.todo').first().get('button.delete').click();
        cy.get('div.todo').should('have.length', '0');
    });

    it('sollte ein todo bearbeiten', () => {});

    it('sollte ein todo löschen', () => {});

    it('sollte ein todo ohne Namen nicht erstellen', () => {});

    it('sollte ein todo mit ungültigem Datum nicht erstellen', () => {});
});
