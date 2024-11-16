export function createTodo(name, duedate, status) {
    if (status !== 'offen' && status !== 'in Bearbeitung' && status !== 'erledigt') {
        throw new Error('Status is invalid. Must be one of: offen, in Bearbeitung, erledigt');
    }

    cy.get('input#todo').type(name);
    cy.get('input#due').type(duedate);
    cy.get('select#status').select(status);
    cy.get('input[type=submit]').click();
}
