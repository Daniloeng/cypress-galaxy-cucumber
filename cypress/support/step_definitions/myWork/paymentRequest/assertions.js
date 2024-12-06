import { Then } from "@badeball/cypress-cucumber-preprocessor";
const currentDate = new Date().toISOString().split('T')[0];

Then(`Payment Request details is open`, () => {
    cy.wait(3000);
    cy.reload();//reduce the possibility of error
    cy.get('.col-12 > .p-card > .p-card-body').should('exist');
    cy.get(`.gx-datatable__title`).should('contain', 'Tax Documents');
    cy.get('.col-md-13 > :nth-child(1) > .p-card > .p-card-body').should('exist');
    cy.get('.p-card-body').find(`[class^='Steps_gx-steps']`, { timeout: 60000 }).should('be.visible');
});

Then(`The {string} sidebar should be closed`, () => {
    cy.wait(1000);
    cy.get('.p-sidebar-content').should('not.exist', { timeout: 150000 });
});

Then(`The {string} sidebar should be opened`, () => {
    cy.get('.p-sidebar-content').should('exist', { timeout: 60000 });
});

Then(`The document is displayed in the list of Tax Documents`, () => {
    cy.wait('@insertDocument', { timeout: 80000 });
    cy.get('.p-sidebar-content').should('not.exist', { timeout: 150000 });
    cy.get('span.fa-sync', { timeout: 30000 }).should('be.visible').click();
    cy.wait(1000);
});

Then(`The Payment Request should be change the to {string} in Current Status`, (status) => {
    // cy.reload();//reduce the possibility of error
    cy.wait(3000);
    cy.get('[class^="Steps_gx-steps"]', { timeout: 50000 })
        .find('.p-highlight')
        .scrollIntoView()
        .should('be.visible', { timeout: 40000 })
        .contains(status);
});

Then(`The Tax Document should be change to {string} in Payment Request screen`, (status) => {
    // cy.reload();//reduce the possibility of error
    cy.wait(3000);
    cy.get('td div[datacy="identificationStatus"]', { timeout: 50000 })
        .should('be.visible', { timeout: 40000 })
        .contains(status);
});

Then(`The status change displays the message {string} on the Activity screen`, (status) => {
    cy.get('.timeline-content', { timeout: 90000 }).first().should('be.visible', { timeout: 40000 }).contains(status);
});

Then(`Compares the Remaining values`, (status) => {
    cy.get('[class^="Tile_subtitle"]').then(($element) => {
        const text = $element.text();
      
        // Extrai o valor após "Remaining" e o próximo valor monetário após " | "
        const regex = /Remaining\s€\s*([\d.,]+)\s*\|\s*€\s*([\d.,]+)/;
        const match = text.match(regex);
      
        if (match) {
          const remainingValue = match[1];
          const otherValue = match[2];
      
          // Compara os dois valores
          expect(remainingValue).to.equal(otherValue);
        } else {
          throw new Error("Remaining values is not equals!");
        }
      });
});


Then(`Checks that the status date is current and the status is {string}`, (status) => {
    let rowFound = false;
    cy.get('tr.p-selectable-row', { timeout: 30000 }).each(($row) => {
        const statusColumn = $row.find('div[datacy="status"]').text().trim();
        const statusDate = $row.find('div[datacy="statusDate"]').text().trim();
    
        if (statusColumn.includes(status) &&  statusDate.includes(currentDate)) {
            rowFound = true;
            cy.log('Status and Status Date are as expected');
        }
    }).then(() => {
        expect(rowFound).to.be.true;
    });
});

Then(`Only Payment Request with this {string} status should displayed in the list`, (status) => {    
    cy.wait('@filterApplied').get('table').then(($table) => {
        if ($table.find('td div[datacy="status"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="status"]').should('be.visible').then(($cells) => {
                if ($cells.length === 1) {
                    cy.wrap($cells.eq(0)).should('contain', status);
                } else {
                    $cells.each((index, cell) => {
                        cy.wrap(cell).should('contain', status);
                    });
                }
            });
        }
    });
});

Then(`Only Payment Request with this {string} service type should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').get('table').then(($table) => {
        if ($table.find('td div[datacy="serviceType"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="serviceType"]').should('be.visible').then(($cells) => {
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

Then(`Only Payment Request with this {string} rejected should displayed in the list`, (type) => {    
    cy.wait('@filterApplied', { timeout: 30000 }).get('table').then(($table) => {
        if ($table.find('td div[datacy="wasRejected"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="wasRejected"]').should('be.visible').then(($cells) => {
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

Then(`Only Payment Request with this {string} portfolio should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').get('table').then(($table) => {
        if ($table.find('td div[datacy="portfolios"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="portfolios"]').should('be.visible').then(($cells) => {
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

Then(`Only Payment Request with this {string} type should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').get('table').then(($table) => {
        if ($table.find('td div[datacy="paymentTypes"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="paymentTypes"]').should('be.visible').then(($cells) => {
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

Then(`Only Payment Request with this {string} payment context should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').get('table').then(($table) => {
        if ($table.find('td div[datacy="context"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="context"]').should('be.visible').then(($cells) => {
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

Then(`Only Tax Documents with this {string} AI Integration Status should displayed in the list`, (integration) => {
    cy.wait('@filterApplied', { timeout: 50000 });
    cy.get('table').find('td div[datacy="aiIntegrationStatus"]').should('be.visible')
        .each((cell) => {
            cy.wrap(cell).should('contain', integration);
        });
});

Then(`Only Tax Documents with the Document Type searched should appear in the list`, () => {
    cy.wait('@filterApplied', { timeout: 20000 });
    cy.get('@firstRow').then((type) => {
        cy.get('table').find('td div[datacy="documentType"]').should('be.visible')
        .each((cell) => {
            cy.wrap(cell).should('contain', type);
        });
    });
});

Then(`Only Tax Documents with the Status searched should appear in the list`, () => {
    cy.wait('@filterApplied', { timeout: 20000 });
    cy.get('@firstRow').then((status) => {
        cy.get('table').find('td div[datacy="status"]').should('be.visible')
        .each((cell) => {
            cy.wrap(cell).should('contain', status);
        });
    });
});

Then(`Only Tax Documents with the Reason searched should appear in the list`, () => {
    cy.wait('@filterApplied', { timeout: 20000 });
    cy.get('@firstRow').then((reason) => {
        cy.get('table').find('td div[datacy="reason"]').should('be.visible')
        .each((cell) => {
            cy.wrap(cell).should('contain', reason);
        });
    });
});

Then(`Checks the Waiting Accounting Payment Request is exported with the correct filename`, () => {
    const filePath = 'cypress/downloads/PaymentRequestWaitingAccountin.xlsx';
    cy.wait(8000); //reduce the possibility of error
    cy.task('fileExists', filePath).should('be.true');
});

Then(`Checks the Rejected with Error Payment Request is exported with the correct filename`, () => {
    const filePath = 'cypress/downloads/PaymentRequestRejectedWithErro.xlsx';
    cy.wait('@rejectedOrWithErrosReport', 10000);
    cy.wait(5000); //reduce the possibility of error
    cy.task('fileExists', filePath).should('be.true');
});

Then(`Checks the Waiting Accounting Validation Payment Request is exported with the correct filename`, () => {
    const filePath = 'cypress/downloads/WaitingAccountingValidation.xlsx';
    cy.wait('@waitingaccountingvalidationReport', 10000);
    cy.wait(5000); //reduce the possibility of error
    cy.task('fileExists', filePath).should('be.true');
});

Then(`Only Tax Documents with this {string} payment request status should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').get('table').then(($table) => {
        if ($table.find('td div[datacy="requestTaskPaymentStatus"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="requestTaskPaymentStatus"]').should('be.visible').then(($cells) => {
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