import Job_vacancy from "../../support/page_object/job_vacancy";

describe("j-vac App", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });
    it("detail Job", () => {
        Job_vacancy.detailJob();
    });
    it("detail Job Apply", () => {
        Job_vacancy.detailJobApply();
    });
    it.only("detail Job Apply Required", () => {
        Job_vacancy.detailJobApplyReq();
    });
});
