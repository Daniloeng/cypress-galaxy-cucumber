import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then(`The item should be removed from datatable`, () => {
    
    cy.wait('@deletedItem').then(beResponse =>{
      expect(beResponse.response.statusCode).to.equal(200);      
    });  
});

Then(`The sidebar should be closed`, () => {
    
  cy.get('@sideBar').should('not.be.visible');

});

Then(`The document should be created`, () => {

  cy.wait('@createdDocument').then(beResponse =>{
    expect(beResponse.response.statusCode).to.equal(201);      
  });    
  cy.wait(3000); // Important for the next step to work
  cy.get('.gx-datatable__search', {timeout:8000}).type('TestAutomationSuccess');  
  cy.get('.p-selectable-row', {timeout:15000}).should('contain', 'TestAutomationSuccess');
});

Then(`The datatable should show the edited item`, () => {
  
  cy.wait('@editDocument').then(beResponse =>{
    expect(beResponse.response.statusCode).to.equal(200);      
  });
  cy.wait(3000); // Important for the next step to work
  cy.get('.gx-datatable__search', {timeout:8000}).type('itemEditado');  
  cy.get('.p-selectable-row', {timeout:15000}).should('contain', 'itemEditado');
});

Then(`The datatable should show the splitted item`, () => {
  
  cy.wait('@splittedItem').then(beResponse =>{
    expect(beResponse.response.statusCode).to.equal(201);      
  });
  cy.get('.gx-datatable__search', {timeout:8000}).type('splitTest');  
  cy.get('.p-selectable-row', {timeout:15000}).should('contain', 'splitTest 2-4');
});

Then(`The document should be cancel and sidebar closes`, () => {

  cy.get('@sideBar').should('not.be.visible');
});

Then(`The document saving should prompt an error message for Create`, () => {
   
    cy.get('.gx-form-validations').should('contain', 'O documento não existe ou não tem um file associado ao mesmo tempo que não possui barcodeId registado');  
});

Then(`The document saving should prompt an error message for Split`, () => {
   
    cy.get('.p-sidebar').should('contain', 'Cannot save the form');
    cy.get('.p-sidebar').should('contain', 'Please correct the errors');
    cy.get('.p-sidebar').should('contain', 'The field Document Category is required');
    cy.get('.p-sidebar').should('contain', 'The field Starting at page is required');
    cy.get('.p-sidebar').should('contain', 'The field Ending at page is required');
    cy.get('.p-sidebar').should('contain', 'The minimum value is 1');
    cy.get('.p-sidebar').should('contain', 'The field Title is required');
});


Then(`The document saving should prompt an error message for Edit`, () => {
  
    cy.get('.gx-form-validations').should('contain', 'Entity "DocumentInfo" (0) was not found.');
    cy.get('.gx-form-validations').should('contain', 'Please correct the errors');
  
});

Then(`The document saving should prompt an error message for Print Stamp with the number of stamps 0`, () => {
  
  cy.get('.gx-form-validations').should('contain', 'You must select a value greater than zero for printing');
  cy.get('.gx-form-validations').should('contain', 'Please correct the errors');

});


Then(`The Number of Stamps Field should be disabled`, () => {
  
  cy.get('#numberOfStamps', {timeout:8000}).should('be.disabled');

});

Then(`The sidebar should show the error message for Split`, () => {
  
  cy.get('#gx-form__submit-button', {timeout:8000}).contains('Save').click();
  cy.get('.p-sidebar').should('contain', 'Specify a page segment and/or a split step.');
  cy.get('#gx-form__submit-button', {timeout:8000}).contains('Save').click();
  cy.get('.p-sidebar').should('contain', 'Please correct the errors');
});


Then(`The sidebar should show the error message for Print Stamp`, () => {
  
  cy.get('.p-sidebar').should('contain', 'Cannot save the form');
  cy.get('.p-sidebar').should('contain', 'Please correct the errors');
  cy.get('.p-sidebar').should('contain', 'The field Document Label Type is required');
  cy.get('.p-sidebar').should('contain', 'The field Printer is required');
});


Then(`The document saving should prompt an error message for the missing fields`, () => {  

  cy.get('#gx-form__submit-button', {timeout:8000}).contains('Save').click();
  cy.get('.gx-form-body').should('contain', 'The field Name is required');
  cy.get('#gx-form__submit-button', {timeout:8000}).contains('Save').click();
  cy.get('.gx-form-validations').should('contain', 'Cannot save the form');
  cy.get('#gx-form__submit-button', {timeout:8000}).contains('Save').click();
  cy.get('.gx-form-body').should('contain', 'The field Direction is required');
  cy.get('#gx-form__submit-button', {timeout:8000}).contains('Save').click();
  cy.get('.gx-form-body').should('contain', 'The field Status is required');
  cy.get('#gx-form__submit-button', {timeout:8000}).contains('Save').click();
  cy.get('.gx-form-body').should('contain', 'The field Category is required');
  cy.get('#gx-form__submit-button', {timeout:8000}).contains('Save').click();
});


Then(`The Print Stamp should be saved`, () => {  

  cy.wait('@printStamp').then(beResponse =>{
    expect(beResponse.response.statusCode).to.equal(200);      
  });
});

Then(`The multiple selection of Print Stamp should be saved`, () => {  

  cy.wait('@multipleDocForStamp').then(beResponse =>{
    expect(beResponse.response.statusCode).to.equal(200);      
  });
});

Then(`The Documents items should be shown as {string}`, (wayOfView) => {
  
  if(wayOfView == 'Cards')
  {
    cy.get('.p-datascroller-list', {timeout:15000}).should('be.visible');
    cy.get('.p-datatable-wrapper').should('not.exist');
  }
  else if(wayOfView == 'Table')
  {
    cy.get('.p-datatable-wrapper', {timeout:15000}).should('be.visible');
    cy.get('.p-datascroller-list').should('not.exist');
  }
});


Then(`The column items should be shown in ascending order`, () => {
  
  cy.get('[datacy="documentCategory"]', {timeout:15000}).invoke('text').as('textColumn');
  
  cy.get('@textColumn').then((text) => {   
      const orderText = [...text].sort();  
      cy.wrap(orderText).as('orderText'); 
  });
 
  cy.get('@textColumn').then((originalText) => {   
    cy.get('@orderText').then((orderText) => {     
        expect(originalText).to.deep.equal(orderText);   
    }); 
  });
}); 



Then(`The datatable should show the {string} items according to the filter {string} option on {string} column`, (dataToBeSearched, filterType, column) => {
  
  cy.wait('@dataAfterSearch');

    if(filterType == "Different from")
    {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).should('not.contain', dataToBeSearched)
    }
    else if (filterType == "Is empty")
    {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
        cy.wrap($el)     
          .should('contain.text', dataToBeSearched)   
          .invoke('text')    
          .then((text) => {
            expect(text.length).to.be.equal(dataToBeSearched.length)
          });
      });
    }
    else if (filterType == "Starts with")
    {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
        cy.wrap($el)     
          .should('contain.text', dataToBeSearched)   
          .invoke('text')    
          .then((text) => {
            expect(text.startsWith(dataToBeSearched))
          });
      });
    }
    else if (filterType == "Ends with")
    {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
        cy.wrap($el)     
          .should('contain.text', dataToBeSearched)   
          .invoke('text')    
          .then((text) => {
            expect(text.endsWith(dataToBeSearched))
          });
      });
    }
    else
    {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).should('contain', dataToBeSearched)
    }
  
});


Then(`The datatable should show the {string} items according to the filter {string} option on Barcode column`, (dataToBeSearched, filterType) => {
  
  cy.wait('@dataAfterSearch');
  
    if(filterType == "Different from")
    {
      cy.get(`td div[datacy="barcodeId"]`, {timeout:15000}).should('not.contain', dataToBeSearched);
    }
    else if (filterType == "Is empty")
    {
      cy.get(`.p-datatable-tbody`, {timeout:15000}).should('contain', 'No records found');
    }
    else if (filterType == "Less than")
    {
      cy.get(`td div[datacy="barcodeId"]`, {timeout:15000}).each(($el) => {
        cy.wrap($el)      
          .invoke('text')    
          .then(parseInt).should('be.lt', parseFloat(dataToBeSearched))
      });
    }
    else if (filterType == "Less than or equal")
    {
      cy.get(`td div[datacy="barcodeId"]`, {timeout:15000}).each(($el) => {
        cy.wrap($el)      
          .invoke('text')    
          .then(parseFloat).should('be.lte', parseFloat(dataToBeSearched))
      });
    }
    else if (filterType == "Greater than")
    {
      cy.get(`td div[datacy="barcodeId"]`, {timeout:15000}).each(($el) => {
        cy.wrap($el)      
          .invoke('text')    
          .then(parseFloat).should('be.gt', parseFloat(dataToBeSearched))
      });
    }
    else if (filterType == "Greater than or equal")
    {
      cy.get(`td div[datacy="barcodeId"]`, {timeout:15000}).each(($el) => {
        cy.wrap($el)      
          .invoke('text')    
          .then(parseFloat).should('be.gte', parseFloat(dataToBeSearched))
      });
    }
    else
    {
      cy.get(`td div[datacy="barcodeId"]`, {timeout:15000}).should('contain', dataToBeSearched)
    }
  
});

Then(`The datatable should show the filtered date items according to the filter {string} option on {string} column`, 
(filterType, columnName) => {

  let filterDate;
  cy.wait('@dataAfterSearch').get(`th div[datacy="${columnName}"]`).find('input').then(($el) => {
     filterDate = $el.val()
  }); 
  
    if(filterType == "Different from")
    {
      cy.get(`td div[datacy="${columnName}"]`, {timeout:15000}).should('not.contain', filterDate);
    }
    else if (filterType == "Is empty")
    {
      cy.get(`td div[datacy="${columnName}"]`, {timeout:15000}).each(($el) => {
        cy.wrap($el).should('be.empty');
      });
    }
    else if (filterType == "Less than")
    {
      cy.get(`td div[datacy="${columnName}"]`, {timeout:15000}).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(createDate); 
        expect(createDateObj).to.be.lessThan(targetDate); 
      });
    }
    else if (filterType == "Less than or equal")
    {
      cy.get(`td div[datacy="${columnName}"]`, {timeout:15000}).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(createDate); 
        expect(createDateObj).to.be.lte(targetDate); 
      });
    }
    else if (filterType == "Greater than")
    {
      cy.get(`td div[datacy="${columnName}"]`, {timeout:15000}).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(createDate); 
        expect(createDateObj).to.be.greaterThan(targetDate); 
      });
    }
    else if (filterType == "Greater than or equal")
    {
      cy.get(`td div[datacy="${columnName}"]`, {timeout:15000}).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(createDate); 
        expect(createDateObj).to.be.gte(targetDate); 
      });
    }
    else
    {
      cy.get(`td div[datacy="${columnName}"]`, {timeout:15000}).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(createDate); 
        expect(createDateObj.getTime()).to.be.equal(targetDate.getTime()); 
      });
    }
  
});


Then(`The datatable should show the filtered date items according to the filter {string} option on Last Modified column.`, 
(filterType) => {

  let filterDate;
  cy.wait('@dataAfterSearch').get(`th div[datacy="modified"]`).find('input').then(($el) => {
     filterDate = $el.val()
  }); 
  
    if(filterType == "Different from")
    {
      cy.get(`td div[datacy="modified"]`, {timeout:15000}).should('not.contain', filterDate);
    }
    else if (filterType == "Is empty")
    {
      cy.get(`.p-datatable-tbody`, {timeout:15000}).should('contain', 'No records found');
    }
    else if (filterType == "Less than")
    {
      cy.get(`td div[datacy="modified"]`, {timeout:15000}).each(($el) => {        
        const [ano, mes, dia] = $el.text().split('-'); 
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(ano, mes, dia.slice(0, 2));

        expect(createDateObj).to.be.lessThan(targetDate); 
      });
    }
    else if (filterType == "Less than or equal")
    {
      cy.get(`td div[datacy="modified"]`, {timeout:15000}).each(($el) => {
        const [ano, mes, dia] = $el.text().split('-'); 
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(ano, mes, dia.slice(0, 2)); 
        expect(createDateObj).to.be.lte(targetDate); 
      });
    }
    else if (filterType == "Greater than")
    {
      cy.get(`td div[datacy="modified"]`, {timeout:15000}).each(($el) => {
        const [ano, mes, dia] = $el.text().split('-'); 
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(ano, mes, dia.slice(0, 2));
        expect(createDateObj).to.be.greaterThan(targetDate); 
      });
    }
    else if (filterType == "Greater than or equal")
    {
      cy.get(`td div[datacy="modified"]`, {timeout:15000}).each(($el) => {
        const [ano, mes, dia] = $el.text().split('-'); 
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(ano, mes, dia.slice(0, 2));
        expect(createDateObj).to.be.gte(targetDate); 
      });
    }
    else
    {
      cy.get(`td div[datacy="modified"]`, {timeout:15000}).each(($el) => {
        const [ano, mes, dia] = $el.text().split('-'); 
        const targetDate = new Date(filterDate);
        const createDateObj = new Date(ano, mes, dia.slice(0, 2));
        expect(createDateObj.getDate()).to.be.equal(targetDate.getDate()); 
      });
    }
  
});