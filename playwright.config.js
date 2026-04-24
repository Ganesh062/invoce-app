const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true, // CI will use this
    baseURL: 'http://localhost:3000',
  },
});