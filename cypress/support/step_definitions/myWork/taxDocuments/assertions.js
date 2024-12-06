import { Then } from "@badeball/cypress-cucumber-preprocessor";
const XLSX = require('xlsx');
const currentDate = new Date().toISOString().split('T')[0];

Then(`Checks the Waiting Accounting Tax Documents is exported with the correct filename`, () => {
    const filePath = 'cypress/downloads/TaxDocumentsWaitingAccounting.xlsx';
    cy.wait('@accoutingReport', { timeout: 40000 });
    cy.wait(2000);
    cy.task('fileExists', filePath).should('be.true');
});

Then(`Checks if the Tax Documents in the All tab were exported with the correct file name`, () => {
    const filePath = 'cypress/downloads/TaxDocuments.xlsx';
    cy.wait('@exportTaxDocuments', { timeout: 40000 });
    cy.wait(2000);
    cy.task('fileExists', filePath).should('be.true');
});

Then(`Checks the Rejected With Errors Tax Documents is exported with the correct filename`, () => {
    const filePath = 'cypress/downloads/TaxDocumentsRejectedWithErrors.xlsx';
    cy.wait('@rejectErrorReport', { timeout: 40000 });
    cy.wait(2000);
    cy.task('fileExists', filePath).should('be.true');
});

Then(`Intercept the all tax documents are shown`, () => {
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/taxdocuments?showMode=all**`).as('allTaxDocumentsDefault');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/taxdocuments?showMode=all&first=0&count=15&filters**`).as('filterApplied');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/taxdocuments?showMode=archived**`).as('archivedTaxDocuments');
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/taxdocuments?showMode=relevant**`).as('relevantTaxDocuments');    
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/manualaccounting**`).as('manualaccountingTaxDocumentsDefault');    
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/waitingaccounting**`).as('waitingaccountingTaxDocumentsDefault');    
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/archived**`).as('archivedTaxDocumentsDefault');    
    cy.intercept('GET', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/rejectederrors**`).as('rejectederrorsTaxDocumentsDefault');    
    cy.intercept('POST', Cypress.env('BASE_URL') + `/api/documentation/documentstaxinfo/taxdocuments/export**`).as('exportTaxDocuments');    
});

Then(`Waits the archived tax documents are shown`, () => {
    cy.wait('@archivedTaxDocuments', { timeout: 40000 });
    cy.wait(1000); //just to wait for the data to be presented
});

Then(`Waits the relevant tax documents are shown`, () => {
    cy.wait('@relevantTaxDocuments', { timeout: 40000 });
    cy.wait(1000); //just to wait for the data to be presented
});

Then(`Waits the all tax documents are shown`, () => {
    cy.wait('@allTaxDocumentsDefault', { timeout: 40000 });
    cy.wait(1000); //just to wait for the data to be presented
});

Then(`Waits the waiting accounting tax documents default are shown`, () => {
    cy.wait('@waitingaccountingTaxDocumentsDefault', { timeout: 40000 });
    cy.get('@waitingaccountingTaxDocumentsDefault').then(beResponse =>{
        expect(beResponse.response.statusCode).to.equal(200);
    });
    cy.wait(1000); //just to wait for the data to be presented
});

Then(`Waits the manual accounting tax documents default are shown`, () => {
    cy.wait('@manualaccountingTaxDocumentsDefault', { timeout: 40000 });
    cy.get('@manualaccountingTaxDocumentsDefault').then(beResponse =>{
        expect(beResponse.response.statusCode).to.equal(200);
    });
    cy.wait(1000); //just to wait for the data to be presented
});

Then(`Waits the archived tax documents default are shown`, () => {
    cy.wait('@archivedTaxDocumentsDefault', { timeout: 40000 });
    cy.get('@archivedTaxDocumentsDefault').then(beResponse =>{
        expect(beResponse.response.statusCode).to.equal(200);
    });
    cy.wait(2000); //just to wait for the data to be presented
});

Then(`Waits the rejected errors tax documents default are shown`, () => {
    cy.wait('@rejectederrorsTaxDocumentsDefault', { timeout: 40000 });
    cy.get('@rejectederrorsTaxDocumentsDefault').then(beResponse =>{
        expect(beResponse.response.statusCode).to.equal(200);
    });
    cy.wait(2000); //just to wait for the data to be presented
});

Then(`Only Tax Documents with this {string} status should displayed in the list`, (status) => {    
    cy.wait('@filterApplied').wait(1000).get('table').then(($table) => {
        if ($table.find('td div[datacy="taxDocumentStatus"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="taxDocumentStatus"]').should('be.visible').then(($cells) => {
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

Then(`Only Tax Documents with this {string} status reason should displayed in the list`, (status) => {    
    cy.wait('@filterApplied').wait(1000).get('table').then(($table) => {
        if ($table.find('td div[datacy="taxDocumentStatusReason"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="taxDocumentStatusReason"]').should('be.visible').then(($cells) => {
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

Then(`Only Tax Documents with this {string} document type should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').wait(1000).get('table').then(($table) => {
        if ($table.find('td div[datacy="taxDocumentType"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="taxDocumentType"]').should('be.visible').then(($cells) => {
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

Then(`Only Tax Documents with this {string} payment request status should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').wait(1000).get('table').then(($table) => {
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

Then(`Only Tax Documents with this {string} portfolio group should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').wait(1000).get('table').then(($table) => {
        if ($table.find('td div[datacy="portfolioGroups"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="portfolioGroups"]').should('be.visible').then(($cells) => {
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

Then(`Only Tax Documents with this {string} transaction type should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').wait(1000).get('table').then(($table) => {
        if ($table.find('td div[datacy="transactionTypes"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="transactionTypes"]').should('be.visible').then(($cells) => {
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

Then(`The tax document is in the table of Tax Documents presented`, () => {
    cy.get('@paymentId').then(id => {
        const paymentId = id.trim();
        cy.get('table').find(`td div[datacy="requestTaskPaymentIds"]`).should('be.visible')
            .should('contain', paymentId);
    });
});

Then(`Checks if the specified queue with the {string} comment has been created`, (comment) => {
    const today = new Date().toISOString().split('T')[0];

    cy.get('table tbody tr').first().within(() => {
        cy.get('td div[datacy="statusDate"]').should('include.text', today);
        cy.get('td div[datacy="requesterComment"]')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.equal(comment.trim());
        });
    });
});

Then(`Checks if the specified queue has been created`, () => {
    const today = new Date().toISOString().split('T')[0];

    cy.get('table tbody tr').first().within(() => {
        cy.get('td div[datacy="statusDate"]').should('include.text', today);
        cy.get('td div[datacy="createdByName"]')
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.contain('testmanager');
        });
    });
});


Then(`Checks that date the document is currently`, () => {
    let rowFound = false;
    cy.wait('@documentsTabLoaded', { timeout: 30000 });
    cy.wait(2000);
    cy.get("span.fa-sync").click();
    cy.get("span.fa-sync").click();
    cy.get('tr.p-selectable-row', { timeout: 30000 }).each(($row) => {
        const requester = $row.find('div[datacy="fileName"]').text().trim();
        const createdDate = $row.find('div[datacy="modified"]').text().trim();
    
        if (requester.includes('AccountingPageInvoice') &&  createdDate.includes(currentDate)) {
            rowFound = true;
            cy.log('The name of document contain AccountingPageInvoice and modified date is equal current date');
        }
    }).then(() => {
        expect(rowFound).to.be.true;
    });
});

Then(`Checks the Tax Documents are in the exported file with {string} name`, (name) => {
    const filePath = `cypress/downloads/${name}.xlsx`;

    cy.readFile(filePath, 'binary').then((fileContent) => {
        const workbook = XLSX.read(fileContent, { type: 'binary' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const excelJson = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

        // Remover a linha de cabeçalho dos dados do Excel
        const excelDataWithoutHeaders = excelJson.slice(1);

        cy.get('@tableData').then((tableData) => {
            // Verificar se a quantidade de linhas da tabela é igual à quantidade de linhas do Excel exportado
            expect(excelDataWithoutHeaders.length).to.equal(tableData.length);

            // Normalizar os dados para comparação
            const normalizeData = (data) => data.map(row => row.map(cell => {
                let normalizedCell = cell.toString().trim();
                //  normalizedCell = normalizedCell.replace(/^[A-Z]{2}/, '').trim();
                if (normalizedCell.startsWith('€')) {
                    normalizedCell = normalizedCell.replace('€', '').trim();
                }
                if (normalizedCell.toLowerCase() === 'no') {
                    return 'False';
                }
                if (normalizedCell.toLowerCase() === 'yes') {
                    return 'True';
                }
                const parsedNumber = parseFloat(normalizedCell);
                return isNaN(parsedNumber) ? normalizedCell : parsedNumber;
            }));

            const normalizedTableData = normalizeData(tableData);
            const normalizedExcelData = normalizeData(excelDataWithoutHeaders);

            // Verificar se os dados da tabela correspondem aos dados do arquivo Excel exportado
            normalizedTableData.forEach((row, rowIndex) => {
                row.forEach((cell, cellIndex) => {
                    const tableCell = cell;
                    const excelCell = normalizedExcelData[rowIndex][cellIndex];
                    expect(tableCell).to.equal(excelCell);
                });
            });
        });
    });
    cy.wait(1000);
});
