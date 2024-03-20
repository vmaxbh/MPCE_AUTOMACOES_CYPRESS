const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://mpce-hom.sydle.one/#/',
    video: true,
  },
  chromeWebSecurity: false,
});
