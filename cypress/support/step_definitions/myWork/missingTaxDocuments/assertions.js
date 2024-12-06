import { Then } from "@badeball/cypress-cucumber-preprocessor";
const XLSX = require('xlsx');

Then(`Only Missing Tax Documents with this {string} Pop Sent Error should displayed in the list`, (type) => {    
    cy.wait('@filterApplied', { timeout: 30000 }).get('table').then(($table) => {
        if ($table.find('td div[datacy="hasSendPopError"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="hasSendPopError"]').should('be.visible').then(($cells) => {
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


Then(`Only Missing Tax Documents with this {string} portfolio should displayed in the list`, (type) => {    
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

Then(`Only Missing Tax Documents with this {string} service type should displayed in the list`, (type) => {    
    cy.wait('@filterApplied').get('table').then(($table) => {
        if ($table.find('td div[datacy="serviceTypeName"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="serviceTypeName"]').should('be.visible').then(($cells) => {
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


Then(`Only Missing Tax Documents with this {string} payment type should displayed in the list`, (type) => {    
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

Then(`Only Missing Tax Documents with this {string} lapr status should displayed in the list`, (status) => {    
    cy.wait('@filterApplied').wait(1000)
        .get('table').then(($table) => {
            if ($table.find('td div[datacy="laprStatusName"]').length === 0) {
                cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
            } else {
                cy.get('td div[datacy="laprStatusName"]').should('be.visible').then(($cells) => {
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

Then(`Only Missing Tax Documents with this {string} followUp status should displayed in the list`, (status) => {    
    cy.wait('@filterApplied').get('table').then(($table) => {
        if ($table.find('td div[datacy="followUpStatusName"]').length === 0) {
            cy.get('tr.p-datatable-emptymessage td').should('contain', 'No records found');
        } else {
            cy.get('td div[datacy="followUpStatusName"]').should('be.visible').then(($cells) => {
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

Then(`The {string} Preview sidebar is open`, (title) => {
    cy.get('.container-fluid', { timeout: 15000 }).should('exist');
    cy.get('.container-fluid > div h2[class^="Title_title"]').contains(title).should('exist');    
    cy.get('.container-fluid > div h2[class^="Title_title"]').contains('Last Communications').should('exist');    
});

Then(`The {string} sidebar is open`, (title) => {
    cy.get('.p-sidebar-right', { timeout: 15000 }).should('exist')
        .find('.form-title').should('contain', title);
});

Then(`The {string} sidebar is closed`, (title) => {
    cy.get('.p-sidebar-right', { timeout: 15000 }).should('not.exist');
});

Then(`Validates the Missing Tax Documents is no longer present in the datatable`, () => {
    cy.get('@firstRowId').then((rowId) => {
        cy.log(`Checking if row with ID: ${rowId} is removed`);
        cy.get('.p-datatable-tbody').should('not.contain', rowId);
    });
});

Then(`Validates Missing Tax Documents are no longer present in the datatable`, () => {
    cy.get('@selectedRowIds').then((selectedRowIds) => {
        selectedRowIds.forEach((rowId) => {
            cy.log(`Checking if row with ID: ${rowId} is removed`);
            cy.get('.p-datatable-tbody').should('not.contain', rowId);
        });
    });
});


Then(`Checks the Missing Tax Documents are in the exported file`, () => {
    const filePath = 'cypress/downloads/MissingTaxDocument.xlsx';

    cy.readFile(filePath, 'binary').then((fileContent) => {
        const workbook = XLSX.read(fileContent, { type: 'binary' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const excelJson = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });

        // Remove the header row from Excel data
        const excelDataWithoutHeaders = excelJson.slice(1);

        cy.get('@tableData').then((tableData) => {
            // Verify that the table data has the same number of rows as the exported Excel file
            expect(excelDataWithoutHeaders.length).to.equal(tableData.length);

            // Normalize data for comparison
            const normalizeData = (data) => data.map(row => row.map(cell => {
                let normalizedCell = cell.toString().trim();
                if (normalizedCell.startsWith('€')) {
                    normalizedCell = normalizedCell.replace('€', '').trim();
                }
                if (normalizedCell.toLowerCase() === 'no') {
                    return 'False';
                }
                if (normalizedCell.toLowerCase() === 'yes') {
                    return 'True';
                }
                return normalizedCell;
            }));

            const normalizedTableData = normalizeData(tableData);
            const normalizedExcelData = normalizeData(excelDataWithoutHeaders);

            // Verify that the table data matches the exported Excel data
            normalizedTableData.forEach((row, rowIndex) => {
                row.forEach((cell, cellIndex) => {
                    const tableCell = cell;
                    const excelCell = normalizedExcelData[rowIndex][cellIndex];
                    expect(tableCell).to.equal(excelCell);
                });
            });
        });
    });
});
