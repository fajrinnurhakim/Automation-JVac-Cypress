import Login from "./login";
const crudData = require("../../fixtures/crud_data.json");

class Crud {
    createJobVacancy() {
        Login.loginSuccess();
        cy.get(".navbar-start>.dropdown>summary.btn-ghost>svg").click();
        cy.get("ul.menu").contains("Form").click();
        cy.get("#title").type(crudData["title"]);
        cy.get("#company_name").type(crudData["company_name"]);
        cy.get("#job_description").type(crudData["job_description"]);
        cy.get("#job_qualification").type(crudData["job_qualification"]);
        cy.get("#job_type").select("Hybrid");
        cy.get("#job_tenure").select("Magang");
        cy.get("#salary_min").clear().type(crudData["salary_min"]);
        cy.get("#salary_max").clear().type(crudData["salary_max"]);
        cy.get("#company_image_url").type(crudData["company_image_url"]);
        cy.get("#company_city").type(crudData["company_city"]);
        cy.get("#job_status").select("1");
        cy.get("button.btn.btn-secondary").contains("Create Data").click();
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    createJobRequired() {
        Login.loginSuccess();
        cy.get(".navbar-start>.dropdown>summary.btn-ghost>svg").click();
        cy.get("ul.menu").contains("Form").click();
        cy.get("button.btn.btn-secondary").contains("Create Data").click();
        cy.get("#title").should("have.attr", "required");
        cy.get("#company_name").should("have.attr", "required");
        cy.get("#job_description").should("have.attr", "required");
        cy.get("#job_qualification").should("have.attr", "required");
        cy.get("#job_type").should("have.attr", "required");
        cy.get("#job_tenure").should("have.attr", "required");
        cy.get("#salary_min").should("have.attr", "required");
        cy.get("#salary_max").should("have.attr", "required");
        cy.get("#company_image_url").should("have.attr", "required");
        cy.get("#company_city").should("have.attr", "required");
        cy.get("#job_status").should("have.attr", "required");
    }
    readListJob() {
        Login.loginSuccess();
        cy.get(".navbar-start>.dropdown>summary.btn-ghost>svg").click();
        cy.get("ul.menu").contains("List job vacancy").click();
        cy.get(".sc-cxNGUP.bJZDGN").select("20");
        cy.get('input[placeholder="Search Title"]').type("Programmer");
        cy.wait(1500);
        cy.get('input[placeholder="Search Title"]').clear();
        cy.wait(1500);
        cy.get('input[placeholder="Filter by City"]').type("California");
        cy.get("Button.btn").contains("Filter").click();
        cy.wait(1500);
        cy.get("Button.btn").contains("Reset").click();
    }
    updateListJob() {
        Login.loginSuccess();
        cy.get(".navbar-start>.dropdown>summary.btn-ghost>svg").click();
        cy.get("ul.menu").contains("List job vacancy").click();
        cy.get(".sc-cxNGUP.bJZDGN").select("20");
        cy.get("#cell-12-4073>button.btn-warning").contains("Update").click();
        cy.get("#title").clear().type(crudData["title_update"]);
        cy.get("#company_name").clear().type(crudData["company_name_update"]);
        cy.get("#job_description")
            .clear()
            .type(crudData["job_description_update"]);
        cy.get("#job_qualification")
            .clear()
            .type(crudData["job_qualification_update"]);
        cy.get("#job_type").select("On site");
        cy.get("#job_tenure").select("Kontrak");
        cy.get("#salary_min").clear().type(crudData["salary_min_update"]);
        cy.get("#salary_max").clear().type(crudData["salary_max_update"]);
        cy.get("#company_image_url")
            .clear()
            .type(crudData["company_image_url_update"]);
        cy.get("#company_city").clear().type(crudData["company_city_update"]);
        cy.get("#job_status").select("0");
        cy.get("button.btn.btn-secondary").contains("Update Data").click();
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
    deleteListJob() {
        Login.loginSuccess();
        cy.get(".navbar-start>.dropdown>summary.btn-ghost>svg").click();
        cy.get("ul.menu").contains("List job vacancy").click();
        cy.get(".sc-cxNGUP.bJZDGN").select("20");
        cy.get("#cell-12-4073>button.btn-error").contains("Delete").click();
        cy.get(".swal2-popup").should("be.visible");
        cy.get(".swal2-confirm").click();
    }
}

export default new Crud();
