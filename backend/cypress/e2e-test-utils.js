export function fillInForm(chain, name, duedate, status) {
    cy.log('Filling in form with name: ' + name + ', due date: ' + duedate + ', status: ' + status);
    let statusNum;
    switch (status) {
        case 'offen':
            statusNum = 0;
            break;
        case 'in Bearbeitung':
            statusNum = 1;
            break;
        case 'erledigt':
            statusNum = 2;
            break;
        default:
            throw new Error('Status is invalid. Must be one of: offen, in Bearbeitung, erledigt');
    }

    return chain
        .get('input#todo').type(name)
        .get('input#due').type(duedate)
        .get('select#status').select(statusNum)
        .get('input[type=submit]').click();
}

export function findTodoByTitle(chain, title) {
    return chain.get('div.todo').find('.title').contains(title).first().parent();
}

export function expectTodoToBe(chain, title, dueDate, status) {
    const expectedDate = new Date(dueDate).toLocaleDateString();
    return findTodoByTitle(chain, title)
        .find('.title').should('contain', title).parent()
        .find('.due').should('contain', expectedDate).parent()
        .find('button.status').should('contain', status);
}

export function getCurrentTodoCount() {
    return cy.get('div.todo').should('have.length.above', -1).its('length');
}

export function deleteTodoByTitle(chain, title) {
    return findTodoByTitle(chain, title)
    .find('button.delete').click();
}
