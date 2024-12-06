import { defineConfig } from "cypress";
import * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 10,
  video: false,
  downloadsFolder: 'cypress/downloads',
  e2e: {
    defaultCommandTimeout: 15000,
    baseUrl: 'https://galaxyuat.whitestar.pt',
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

      on('task', {
        generatePDF(fileName: string) {
          return new Promise(async (resolve, reject) => {
            try {
              const pdfDoc = await PDFDocument.create();
              const page = pdfDoc.addPage([400, 600]);

              const { width, height } = page.getSize();
              const fontSize = 14;

              // Gerando conteúdo aleatório
              const randomText = `Document created at: ${new Date().toISOString()} - ${fileName.trim()}`;
              
              page.drawText(randomText, {
                x: 20,
                y: height - 4 * fontSize,
                size: fontSize,
                color: rgb(0, 0, 0),
              });

              const pdfBytes = await pdfDoc.save();
              const filePath = `cypress/fixtures/files/${fileName.trim()}.pdf`;
              require('fs').writeFileSync(filePath, pdfBytes);
              resolve(filePath);  // Retorna o caminho do arquivo gerado
            } catch (error) {
              console.error('Error generation PDF:', error);
              reject(error);
            }
          });
        }
      });

      on('task', {
        fileExists(filePath) {
            return fs.existsSync(filePath);
        }
      });

      // Make sure to return the config object as it might have been modified by the plugin.
      config.env = {
        ...process.env,
        ...config.env
      }
      return config;
    },
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  screenshotOnRunFailure: true,
});