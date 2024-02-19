import Login from "../../support/page_object/login";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("Login Success", () => {
        Login.loginSuccess();
    });
    it("Login Wrong Password", () => {
        Login.loginWrongPassword();
    });
    it("Login Required Password", () => {
        Login.loginRequiredPassword();
    });
    it("Login Required Field", () => {
        Login.loginRequiredField();
    });
});
