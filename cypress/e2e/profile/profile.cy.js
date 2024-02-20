import Profile from "../../support/page_object/profile";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("Check Profile", () => {
        Profile.checkProfile();
    });
});
