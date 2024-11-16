export function createTodo(name, duedate, status) {
    if (status !== 'Offen' && status !== 'In Bearbeitung' && status !== 'Erledigt') {
        throw new Error('Status is invalid. Must be one of: Offen, In Bearbeitung, Erledigt');
    }

    cy.get('input#todo').type(name);
    cy.get('input#due').type(duedate);
    cy.get('select#status').select(status);
    cy.get('input[type=submit]').click();
}
