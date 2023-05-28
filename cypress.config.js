const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1360,
  viewportHeight: 720,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    taskTimeout: 100000,
    baseUrl: "https://loja-masculina.convertr.app.br",
  },
});
