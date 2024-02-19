import Navbar from "./navbar";

class Login {
    loginSuccess() {
        Navbar.login();
        cy.loginCommand(Cypress.env("email"), Cypress.env("password"));
        cy.url().should("include", "/dashboard");
    }
    loginWrongPassword() {
        Navbar.login();
        cy.loginCommand(Cypress.env("email"), Cypress.env("wrongPassword"));
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    loginRequiredPassword() {
        Navbar.login();
        cy.loginCommand(Cypress.env("email"), Cypress.env("requiredPassword"));
        cy.get(".btn.btn-secondary").contains("Login").click();
        cy.get("#password").should("have.attr", "required");
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    loginRequiredField() {
        Navbar.login();
        cy.get(".btn.btn-secondary").contains("Login").click();
        cy.get("#email").should("have.attr", "required");
        cy.get("#password").should("have.attr", "required");
    }
}

export default new Login();
