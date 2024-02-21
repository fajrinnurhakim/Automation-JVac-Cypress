import Login from "./login";

class Logout {
    logoutSuccess() {
        Login.loginSuccess();
        cy.wait(3000);
        cy.get("img.rounded-full").click();
        cy.wait(1000);
        cy.get(".dropdown-content").contains("Logout").click();
    }
}

export default new Logout();
