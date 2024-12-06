import { Then } from "@badeball/cypress-cucumber-preprocessor";


Then(`Selects the row that contain created Key Safe Storage`, () => {  
    cy.get('tr.p-selectable-row').each(($row) => {
        cy.wrap($row).find('td div[datacy="name"]').then(($nameCell) => {
            cy.get('@safeStorageName').then(name => {
                if ($nameCell.text().includes(name)) {
                    cy.wrap($row).click(); 
                }
            });
        });
    });
});

Then(`Selects the row that contain searched Key Safe Storage`, () => {  
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

Then(`Selects and deletes all rows that contain Key Safe Storage test in the name`, () => {
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

Then(`Checks if the user was directed to the correct Key Safe Storage`, () => {
    cy.get('@capturedHref').then((href) => {
        cy.url().should('include', href.trim());
    });
    cy.get('@capturedLink').then((name) => {
        cy.get(`[class^='Tile_title']`).contains(name);
    });
});

Then(`Only Key Safe Storage with this {string} key location should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').get('table').then(($table) => {
        cy.wait(1000);
        if ($table.find('td div[datacy="keyLocationName"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="keyLocationName"]').should('be.visible').then(($cells) => {
                if ($cells.length === 1) {
                    cy.wrap($cells.eq(0)).should('contain', type);
                } else {
                    $cells.each((index, cell) => {
                        cy.wrap(cell).should('contain', type);
                    });
                }
            });
        }
    });
});
