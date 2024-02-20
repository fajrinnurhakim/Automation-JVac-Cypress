import Login from "./login";

class Profile {
    checkProfile() {
        Login.loginSuccess();
        cy.get("img.rounded-full").click();
        cy.wait(1000);
        cy.get(".dropdown-content").contains("Profile").click();
    }
}

export default new Profile();
