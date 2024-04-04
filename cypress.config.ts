import { defineConfig } from "cypress";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  viewportWidth: 1900,
  viewportHeight: 900,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  video: false,
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: 'https://galaxypp.whitestar.pt',
    specPattern: "cypress/e2e/**/*.feature",
    experimentalRunAllSpecs: true,
    env: { hideXhr: true },
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      config.env = {
        ...process.env,
        ...config.env
      }
      return config;
    },
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  screenshotOnRunFailure: true,
});