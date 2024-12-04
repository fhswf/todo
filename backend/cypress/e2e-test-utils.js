export function fillInForm(name, duedate, status) {
    function isValidDate(dateString) {
        const date = new Date(dateString);
        return !isNaN(date.getTime()); // Gültige Datumsprüfung
    }
    //if (status !== 'offen' && status !== 'in Bearbeitung' && status !== 'erledigt') {
    //    throw new Error('Status is invalid. Must be one of: offen, in Bearbeitung, erledigt');
    //}
    let statusNum;
    //if (name == '' || name== NaN){
    //    throw new nameError('Kein gültiger Name eingegeben.');
    //}

    try{
        cy.get('input#due').type(duedate);
    }
    catch(err){
        cy.log("ungültiges Datum. Todo wird nicht angelegt!");
        return;
    }
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
    cy.get('input#todo').type(name);
    cy.log(isValidDate(duedate));
    if (!isValidDate(duedate)) {
        cy.log(`Ungültiges Datum: "${duedate}". Todo wird nicht angelegt!`);
    } else {
        cy.get('input#due').type(duedate);
    }
    cy.get('select#status').select(statusNum);
    cy.get('input[type=submit]').click();
}

export function findTodoByTitle(title) {
    try{
        return cy.get('div.todo').find('.title').contains(title).first().parent();
    }
    catch(err){
        throw new Error('Todo not found: ' + title);
    }
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