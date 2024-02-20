import Home from "../../support/page_object/home";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Dashboard Button", () => {
        Home.dashboard();
    });
    it("Job Vacancy Button", () => {
        Home.jobVacancy();
    });
    it("Detail Job Button", () => {
        Home.detailJob();
    });
});
