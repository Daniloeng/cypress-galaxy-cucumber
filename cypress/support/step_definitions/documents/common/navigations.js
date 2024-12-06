import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Navigate to Documents-Recent tab", () => {    
    cy.loginWithClientID();
    cy.visit('/documents/docsrecent');
});

Given("Navigate to Documents-Sent tab", () => {    
    cy.loginWithClientID();
    cy.visit('/documents/docssent');
});

Given("Navigate to Documents-Received tab", () => {    
    cy.loginWithClientID();
    cy.visit('/documents/docsreceived');
});

Given("Navigate to Documents {string} tab in the {string} url", (title, url) => {    
    cy.loginWithClientID();
    cy.visit(`/documents/${url}`);
});
