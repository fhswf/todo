const PORT = process.env.PORT || 3000;

describe('ToDo', function () {
    it('Lädt die Seite mit der ToDo-Anwendung', function () {
        cy.visit(`localhost:${PORT}`)
        cy.contains('h1', 'Todo Liste')
    })
    it('Kann ein neues ToDo anlegen', () => {
        cy.visit(`localhost:${PORT}`)
        cy.get('#todo').type('Neues ToDo')
        cy.get('#due').type('2024-02-10')
        cy.get('#status').select('offen')
        cy.get('form').submit()

        //Es sollte nun ein neues ToDo erstellt worden sein
        cy.contains('.todo .title', 'Neues ToDo')
        cy.contains('.todo .status', 'offen')
    })

    it('Kann den Status des neuen ToDos ändern', () => {
        cy.visit(`localhost:${PORT}`)
        //Status des neuen ToDos ändern
        cy.contains('.todo .title', 'Neues ToDo').siblings('.actions').get('.status').click()
        //Prüfen, ob das neue ToDo jetzt einen geänderten Status hat
        cy.contains('.todo .title', 'Neues ToDo').siblings('.actions').contains('.status', 'in Bearbeitung')
    })

    it('Kann das neue ToDo anpassen', () => {
        cy.visit(`localhost:${PORT}`)
        //Status des neuen ToDos ändern
        cy.contains('.todo .title', 'Neues ToDo').siblings('.actions').get('.edit').click()
        cy.get('#todo').clear().type('Geändertes ToDo')
        cy.get('form').submit()
        //Das ToDo sollte jetzt eine neue Bezeichnung haben
        cy.contains('.todo .title', 'Geändertes ToDo')
    })

    it('Kann das ToDo wieder löschen', () => {
        cy.visit(`localhost:${PORT}`)
        //ToDo über die entsprechende Schaltfläche löschen
        cy.contains('.todo .title', 'Geändertes ToDo').siblings('.actions').get('.delete').click()
        //Das ToDo sollte jetzt nicht mehr existieren
        cy.contains('.todo .title', 'Geändertes ToDo').should('not.exist')
    })



})