import Navbar from "./navbar";
const jobData = require("../../fixtures/job_vacancy_data.json");

class JobVacancy {
    detailJob() {
        Navbar.jobVacancy();
        cy.wait(1000);
        cy.get(".grid-cols-2 > :nth-child(2) .btn").click();
    }
    detailJobApply() {
        Navbar.jobVacancy();
        cy.wait(1000);
        cy.get(".grid-cols-2 > :nth-child(1) .btn").click();
        cy.wait(1000);
        cy.get(".btn.btn-secondary").contains("Apply").click();
        cy.wait(1000);
        cy.get("#name").type(jobData["name"]);
        cy.get("#date").type(jobData["date"]);
        cy.get("#address").type(jobData["address"]);
        cy.get("#cv").type(jobData["cv"]);
        cy.get("#email").type(jobData["email"]);
        cy.get("#linkedin").type(jobData["linkedin"]);
        cy.get(".btn.btn-secondary.w-full").contains("Apply").click();
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    detailJobApplyReq() {
        Navbar.jobVacancy();
        cy.wait(1000);
        cy.get(".grid-cols-2 > :nth-child(1) .btn").click();
        cy.wait(1000);
        cy.get(".btn.btn-secondary").contains("Apply").click();
        cy.wait(1000);
        cy.get(".btn.btn-secondary.w-full").contains("Apply").click();
        cy.get("#name").should("have.attr", "required");
        cy.get("#date").should("have.attr", "required");
        cy.get("#address").should("have.attr", "required");
        cy.get("#cv").should("have.attr", "required");
        cy.get("#email").should("have.attr", "required");
        cy.get("#linkedin").should("have.attr", "required");
    }
}

export default new JobVacancy();
