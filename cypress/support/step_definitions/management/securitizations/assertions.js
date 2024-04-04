import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`The selected Debt Id should appear on the title of the Sidebar`, () => {
    cy.get(".sidebar-title").then((sidebarTitle) => {
      let debtId = sidebarTitle.text().substring(7);
      cy.get('.p-sidebar-close-icon').click();
      cy.get('#SecuritizationDebtsDataTable').should('contain', debtId)
    });
  
});

Then(`7-The remove debt button should remain disabled`, () => {  
    cy.get(".d-block").contains("Remove").should("be.disabled"); 
});

Then(`The debt is not removed from the list and confirmation sidebar is closed`, () => {
    cy.get("@sideBar", {tiemout:8000}).should("not.visible");  
    cy.get(".p-datatable-tbody").find('[type="checkbox"]').then(checkBoxes=> {
        cy.wrap(checkBoxes)
            .eq(0).should('have.attr', 'aria-checked', 'true');
    })
});

Then(`11-The debt should no longer exist in the Securitization`, (debtId) => {
    cy.get("#SecuritizationDebtsDataTable").should('not.contain', debtId);
    cy.get("@removableDebtFromSecuritization").then(be =>{
      expect(be.response.statusCode).to.equal(200)})
});

Then(`The selected Debt Id should appear on the tittle of the Sidebar`, () => {
    cy.get(".sidebar-title").then((sidebarTitle) => {
      let debtId = sidebarTitle.text().substring(7);
      cy.get('.p-sidebar-close-icon').click();
      cy.get('#SecuritizationDebtsDataTable').should('contain', debtId)
    });
});

Then(`6-The remove debt button should remain disabled`, () => {  
    cy.get(":nth-child(2) > .col-md-12 > .p-card > .p-card-body").contains("Remove").should("be.disabled"); 
});

Then(`1-The debt {string} should no longer exist in the Securitization`, (debtId) => {
    cy.get(".gx-datatable__search", {tiemout:8000}).click().type(debtId);
    cy.get(".p-datatable-emptymessage").contains("No records found").should("be.visible");
    cy.wait("@removableDebtFromSecuritization").then(be =>{
      expect(be.response.statusCode).to.equal(200)})
});
  
Then(`2-The debt should no longer exist in the Securitization`, () => {
    cy.get("@removableDebtFromSecuritization").then(beResponse =>{
    const url = beResponse.request.url.toString();
    let deletedDebtId = url.substring(63);
    cy.get(".gx-datatable__search").click().type(deletedDebtId);
    cy.get(".p-datatable-emptymessage").contains("No records found").should("be.visible");
    expect(beResponse.response.statusCode).to.equal(200)});
});
