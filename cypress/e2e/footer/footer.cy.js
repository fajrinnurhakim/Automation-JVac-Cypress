import Footer from "../../support/page_object/footer";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it.only("Home-Footer", () => {
        Footer.home();
    });
    it.only("Job-Vacancy-Footer", () => {
        Footer.jobVacancy();
    });
    it.only("Login-Footer", () => {
        Footer.login();
    });
});
