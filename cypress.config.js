const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        env: {
            BASE_URL: "https://j-vac.netlify.app/",
            email: "wartiyem123@gmail.com",
            password: "wartiyem",
            wrongPassword: "wartiyem123",
            requiredPassword: "wa",
            registerName: "wartiyemGod",
            imageUrl:
                "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
            registerEmail: "wartiyem4321@gmail.com",
            registerPassword: "wartiyem4321",
        },

        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 20000,
        requestTimeout: 20000,
    },
});
