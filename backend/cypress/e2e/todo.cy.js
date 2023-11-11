const PORT = process.env.PORT || 3000;

describe('ToDo Anwendung', function () {
    it('successfully loads', function () {
        cy.visit(`http://localhost:${PORT}/todo.html`) // ändern Sie URL zu Ihrer App
    })
})

//test sucessfully rendered
describe('ToDo Anwendung', function () {
    it('successfully loads', function () {
        cy.visit(`http://localhost:${PORT}/todo.html`) // ändern Sie URL zu Ihrer App
        cy.contains('ToDo Anwendung')
        cy.get('#todo').type('')
        })
})