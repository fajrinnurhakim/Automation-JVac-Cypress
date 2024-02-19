import Navbar from "../../support/page_object/navbar";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("Logo navbar", () => {
        Navbar.logo();
    });
    it("Home navbar", () => {
        Navbar.home();
    });
    it("Job vacancy navbar", () => {
        Navbar.jobVacancy();
    });
    it("Login navbar", () => {
        Navbar.login();
    });
});
