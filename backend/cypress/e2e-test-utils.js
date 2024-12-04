Cypress.on('fail', (error) => {
    // Prüfe, ob die Fehlermeldung auf das ungültige Datum hinweist
    if (error.message.includes('Typing into a `date` input with `cy.type()` requires a valid date with the format `YYYY-MM-DD`')) {
        cy.log('Erwarteter Fehler: Ungültiges Datum erkannt und als Erfolg gewertet.');
        return false; // Verhindert das Abbrechen des Tests
    }
    throw error; // Andere Fehler weitergeben
});

cy.on('fail', (error) => {
    if (error.message.includes('cy.type() cannot accept an empty string')) {
        cy.log('Fehler abgefangen: Der Name ist leer!');
        return false;  // Verhindert den Fehler, der den Test stoppt
    }
    throw error;  // Wirf den Fehler erneut, wenn es sich um einen anderen Fehler handelt
});

export function fillInForm(name, duedate, status) {
    //if (status !== 'offen' && status !== 'in Bearbeitung' && status !== 'erledigt') {
    //    throw new Error('Status is invalid. Must be one of: offen, in Bearbeitung, erledigt');
    //}
    let statusNum;
    //if (name == '' || name== NaN){
    //    throw new nameError('Kein gültiger Name eingegeben.');
    //}

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
    cy.get('input#due').type(duedate);
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