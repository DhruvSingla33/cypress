const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

dotenv.config();


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    password: process.env.PASSWORD,
    code: process.env.CODE,
  },
});
