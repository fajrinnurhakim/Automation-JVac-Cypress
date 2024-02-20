class Home {
    jobVacancy() {
        cy.get("a.btn.btn-secondary").contains("Job Vacancy").click();
        cy.url().should("include", "/job-vacancy");
    }
    dashboard() {
        cy.get("a.btn.btn-secondary").contains("Dashboard").click();
        cy.url().should("include", "/login");
    }
    detailJob() {
        cy.get(".carousel .carousel-item:eq(1)").within(() => {
            cy.get("a.btn.btn-secondary").click();
        });
        cy.url().should("include", "/job-vacancy/4024");
    }
}

export default new Home();
