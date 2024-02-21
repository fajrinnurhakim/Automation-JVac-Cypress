import Crud from "../../support/page_object/crud";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Create Job Vacancy", () => {
        Crud.createJobVacancy();
    });
    it("Create Job Vacancy Required", () => {
        Crud.createJobRequired();
    });
    it("Read List Job Vacancy", () => {
        Crud.readListJob();
    });
    it("Update List Job Vacancy", () => {
        Crud.updateListJob();
    });
    it("Delete List Job Vacancy", () => {
        Crud.deleteListJob();
    });
});
