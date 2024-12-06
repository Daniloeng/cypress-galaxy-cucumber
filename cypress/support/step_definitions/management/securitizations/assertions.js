import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`The selected Debt Id should appear on the title of the Sidebar`, () => {
    cy.get(".sidebar-title").then((sidebarTitle) => {
      let debtId = sidebarTitle.text().substring(7);
      cy.get('.p-sidebar-close-icon').click();
      cy.get('#SecuritizationDebtsDataTable').should('contain', debtId)
    });
  
});

Then(`The remove debt button should remain disabled`, () => {  
    cy.get(".d-block").contains("Remove").should("be.disabled"); 
});

Then(`Validation messages are presented to the user`, () => {  
    cy.contains('Cannot save the form', { timeout: 20000 }).should('exist');
    cy.get('.col-md-12 > .gx-label').should('exist');
});

Then(`The validation message {string} is displayed`, (sentece) => {  
    cy.contains('Cannot save the form', { timeout: 20000 }).should('exist');
    cy.get('.gx-select > .gx-label').contains(sentece).should('exist');
});

Then(`The debt is not removed from the list and confirmation sidebar is closed`, () => {
    cy.get("@sideBar", {tiemout:8000}).should("not.visible");  
    cy.get(".p-datatable-tbody").find('[type="checkbox"]').then(checkBoxes=> {
        cy.wrap(checkBoxes)
            .eq(0).should('have.attr', 'aria-checked', 'true');
    })
});

Then(`The debt quick way - should no longer exist in the Securitization`, (debtId) => {
    cy.get("#SecuritizationDebtsDataTable").should('not.contain', debtId);
    cy.get("@removableDebtFromSecuritization").then(be =>{
      expect(be.response.statusCode).to.equal(200)})
});

Then(`The debt should no longer exist in the Securitization`, () => {
    cy.get("@removableDebtFromSecuritization").then(beResponse =>{
    const url = beResponse.request.url.toString();
    let deletedDebtId = url.substring(63);
    cy.get(".gx-datatable__search").click().type(deletedDebtId);
    cy.get(".p-datatable-emptymessage").contains("No records found").should("be.visible");
    expect(beResponse.response.statusCode).to.equal(200)});
});

Then(`The selected Debt Id should appear on the tittle of the Sidebar`, () => {
    cy.get(".sidebar-title").then((sidebarTitle) => {
      let debtId = sidebarTitle.text().substring(7);
      cy.get('.p-sidebar-close-icon').click();
      cy.get('#SecuritizationDebtsDataTable').should('contain', debtId)
    });
});

Then(`Selects the row that contain searched securitization`, () => {  
    cy.get('tr.p-selectable-row').each(($row) => {
        cy.wrap($row).find('td div[datacy="name"]').then(($nameCell) => {
            cy.get('@nameEdited').then(nameEdited => {
                if ($nameCell.text().includes(nameEdited)) {
                    cy.wrap($row).click(); 
                }
            });
        });
    });
});

Then(`Selects the row that contain created securitization`, () => {  
    cy.wait('@securitizationNameSearched');
    cy.get('tr.p-selectable-row').each(($row) => {
        cy.wrap($row).find('td div[datacy="name"]').then(($nameCell) => {
            cy.get('@securitizationName').then(name => {
                if ($nameCell.text().includes(name)) {
                    cy.wrap($row).click(); 
                }
            });
        });
    });
});

Then(`Selects and deletes all rows that contain test data in the name`, () => {
    cy.get('table').then(($table) => {
        if ($table.find('td div[datacy="name"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('tr.p-selectable-row').each(($row) => {
                cy.wrap($row).find('td div[datacy="name"]').then(($nameCell) => {
                    if ($nameCell.text().trim().startsWith('Name-')) {
                        cy.wrap($row).click();

                        cy.get('.p-toolbar', { timeout: 30000 }).contains('Remove').click();

                        cy.get('.p-sidebar-content').should('exist', { timeout: 30000 });
                        cy.get('.p-button-danger > .p-button-label').contains('delete').click();

                        cy.wait(1000);
                    }
                });
            });
        }
    });           
});
