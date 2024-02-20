import Login from "./login";

class ChangePassword {
    changePassword() {
        Login.loginSuccess();
        cy.get("img.rounded-full").click();
        cy.wait(1000);
        cy.get(".dropdown-content").contains("Change password").click();
        cy.wait(1000);
        cy.changePasswordCommand(
            Cypress.env("currentPassword"),
            Cypress.env("newPassword"),
            Cypress.env("newPassword")
        );
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    changePasswordRequired() {
        Login.loginSuccess();
        cy.get("img.rounded-full").click();
        cy.wait(1000);
        cy.get(".dropdown-content").contains("Change password").click();
        cy.wait(1000);
        cy.get(".btn.btn-secondary").click();
        cy.get("#current_password").should("have.attr", "required");
        cy.get("#new_password").should("have.attr", "required");
        cy.get("#new_confirm_password").should("have.attr", "required");
    }
}
export default new ChangePassword();
