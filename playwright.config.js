const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 60000,

  use: {
    headless: true,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  webServer: {
    command: 'npm start',   // starts your app
    port: 3000,
    timeout: 120000,        // waits for app
    reuseExistingServer: true,
  },
});