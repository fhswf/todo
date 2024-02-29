// app.spec.js

describe("Frontend Test_1", () => {
    it("Webseite besuchen", () => {
        cy.visit("http://localhost:3000/todo.html"); // Arrange
    })

    it("Platzhalter überprüfen", () => {
        cy.get("input#todo").should("have.attr", "placeholder", "Neue Aufgabe"); // Assert
    })


    it("Ein erstes todo hinzufügen", () => {
      cy.get("input#todo").type("Kaffee kochen"); 
      cy.get("input#due").type("2024-03-02"); 
      cy.get("select#status").type("offen"); 
      cy.get("input[type='submit']").click();
      cy.get("#todo-list").should("contain", "Kaffee kochen"); // Assert
      cy.get("#todo-list").should("have.length", 1) // Assert
    })

    it("Ein todo löschen", () => {
        cy.get("delete").click();
        cy.get("#todo-list").should("have.length", 0) // Assert
      })

    it("Ein weiteres todo hinzufügen", () => {
        cy.get("input#todo").type("Müll runter bringen"); 
        cy.get("input#due").type("2024-03-03"); 
        cy.get("select#status").type("offen"); 
        cy.get("input[type='submit']").click();
        cy.get("#todo-list").should("contain", "Müll runter bringen"); // Assert
        cy.get("#todo-list").should("have.length", 1) // Assert
      })

      


  })
  