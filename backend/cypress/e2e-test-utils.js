export function fillInForm(name, duedate, status) {
    function isValidDate(dateString) {
        // Prüfe, ob das Format YYYY-MM-DD eingehalten wird
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(dateString)) {
            return false;
        }
    
        // Versuche, das Datum zu erstellen
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return false;
        }
    
        // Zusätzliche Überprüfung: Stimmen Monat und Tag?
        const [year, month, day] = dateString.split('-').map(Number);
        return (
            date.getUTCFullYear() === year &&
            date.getUTCMonth() + 1 === month && // getUTCMonth() ist nullbasiert
            date.getUTCDate() === day
        );
    }
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