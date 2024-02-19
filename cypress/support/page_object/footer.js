class Footer {
    home() {
        cy.wait(3000);
        cy.get(".flex>a").contains("Home").click();
        cy.wait(3000);
        cy.url().should("include", "/");
    }
    jobVacancy() {
        cy.wait(3000);
        cy.get(".flex>a").contains("Job Vacancy").click();
        cy.wait(3000);
        cy.url().should("include", "/job-vacancy");
    }
    login() {
        cy.wait(3000);
        cy.get(".flex>a").contains("Login").click();
        cy.wait(3000);
        cy.url().should("include", "/login");
    }
}

export default new Footer();
