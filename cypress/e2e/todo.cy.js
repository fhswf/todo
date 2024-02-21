const PORT = process.env.PORT || 3000;

describe('ToDo', function () {
    it('successfully loads', function () {
        cy.visit(`localhost:${PORT}`) // ändern Sie URL zu Ihrer App
    })
})