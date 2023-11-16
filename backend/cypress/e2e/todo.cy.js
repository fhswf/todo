const PORT = process.env.PORT || 3000;

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

describe('ToDo Anwendung', function () {
    it('successfully loads', function () {
        cy.visit(`http://localhost:${PORT}/todo.html`) // ändern Sie URL zu Ihrer App
    })
})

//test sucessfully rendered
describe('ToDo Anwendung', function () {
    it('successfully loads', function () {
        cy.visit(`http://localhost:${PORT}/todo.html`) // ändern Sie URL zu Ihrer App
        cy.contains('Todo Liste')
        //date field contains 11/14/2023
        cy.get('#due').should('have.value', '2023-11-14')
        cy.get('#todo').should('have.value', '')
        cy.get('#status').should('have.value', '0')
        })
})

//test add todo
describe('ToDo Anwendung', function () {
    it('add', function () {
        cy.visit(`http://localhost:${PORT}/todo.html`) // ändern Sie URL zu Ihrer App
        cy.get('#todo').type('test todo')
        cy.get('#due').type('2023-11-14')
        cy.get('#status').select('0')
        cy.get('#add').click()
        cy.get('#todo').should('have.value', '')
        cy.get('#due').should('have.value', '2023-11-14')
        cy.get('#status').should('have.value', '0')
        cy.contains('test todo')
    })
})

//test delete todo
describe('ToDo Anwendung', function () {
    it('delete', function () {
        cy.request({
            method: 'POST', 
            url: 'http://localhost:3000/todos',
            headers: headers,
            body: {
                "title": "12345",
                "due": "2023-11-14T00:00:00.000Z",
                "status": 0
            }  
        }).then((response) => {
            //get todo id
            const id = response.body._id
            cy.visit(`http://localhost:${PORT}/todo.html`)
            cy.get(`#todo-${id}`).within(()=>{
                cy.get('.delete').click();
                
            });
            cy.contains('#todo-${id}').should('not.exist');
        })
    })
})
