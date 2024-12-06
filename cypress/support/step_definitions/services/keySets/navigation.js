import { When } from "@badeball/cypress-cucumber-preprocessor";

When(`Visit a specific Asset {string} Key-sets page`, (assetId) => {
  cy.visit(`/assets/${assetId}/keys`)
});

