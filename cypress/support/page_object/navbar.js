class Navbar {
    logo() {
        cy.wait(3000);
        cy.get("a.hidden.lg\\:block img").click();
        cy.wait(3000);
        cy.url().should("include", "/");
    }
    home() {
        cy.wait(3000);
        cy.get(".navbar-center>ul.menu>li").contains("Home").click();
        cy.wait(3000);
        cy.url().should("include", "/");
    }
    jobVacancy() {
        cy.wait(3000);
        cy.get(".navbar-center>ul>li>a").contains("Job Vacancy").click();
        cy.wait(3000);
        cy.url().should("include", "/job-vacancy");
    }
    login() {
        cy.wait(3000);
        cy.get("a.btn").contains("LOGIN").click();
        cy.wait(3000);
        cy.url().should("include", "/login");
    }
}

export default new Navbar();
