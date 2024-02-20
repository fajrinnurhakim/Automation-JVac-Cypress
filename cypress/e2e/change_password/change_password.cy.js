import Change_password from "../../support/page_object/change_password";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("Change Password Required Field", () => {
        Change_password.changePasswordRequired();
    });
    it("Change Password Success", () => {
        Change_password.changePassword();
    });
});
