import { default as Register } from "../../support/page_object/register";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Register Success", () => {
        Register.registerSuccess();
    });
    it("Register Failed", () => {
        Register.registerFailed();
    });
    it("Register Required", () => {
        Register.registerRequired();
    });
});
