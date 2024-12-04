export function fillInForm(name, duedate, status) {
    //if (status !== 'offen' && status !== 'in Bearbeitung' && status !== 'erledigt') {
    //    throw new Error('Status is invalid. Must be one of: offen, in Bearbeitung, erledigt');
    //}
    let statusNum;
    switch (status) {
        case 'offen':
            statusNum = 0;
        case 'in Bearbeitung':
            statusNum = 1;
        case 'erledigt':
            statusNum = 2;
        default:
            throw new Error('Status is invalid. Must be one of: offen, in Bearbeitung, erledigt');
    }
    cy.get('input#todo').type(name);
    cy.get('input#due').type(duedate);
    cy.get('select#status').select(statusNum);
    cy.get('input[type=submit]').click();
}

export function findTodoByTitle(title) {
    return cy.get('div.todo').find('.title').contains(title).first().parent();
}

export function expectTodoToBe(title, duedate, status) {
    const todo = findTodoByTitle(title);
    const expectedDate = new Date(duedate).toLocaleDateString();
    todo.get('.title').should('contain', title);
    todo.get('.due').should('contain', expectedDate);
    todo.get('button.status').should('contain', status);
}

export function getCurrentTodoCount() {
    return cy.get('div.todo').its('length');
}
