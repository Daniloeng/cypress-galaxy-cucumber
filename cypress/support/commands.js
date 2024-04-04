
Cypress.Commands.add('loginWithClientID', () => {
  cy.request({    
      method: 'GET',
      url: Cypress.env('LOGIN_OAUTH2'),
      form: true,
      body: 
      {
        client_id: Cypress.env('CLIENT_ID'),
        scope: Cypress.env('SCOPE'),
        client_secret: Cypress.env('CLIENT_SECRET'),
        grant_type: Cypress.env('GRANT_TYPE')
      }

  }).its('body').then(body => {
      const token = body.access_token;
      cy.visit(Cypress.env('BASE_URL') +`/loginexternalcallback?external_access_token=` + token)
      cy.document().its('cookie').should('contain', 'ai_session', { timeout: 20000 });
  });
});

Cypress.Commands.add('checkIfExists', (element, wordToBeSearched) => {
  cy.get(element).then((rows) => {
    for (const row of rows) {
      if (row.textContent.includes(wordToBeSearched)) {
        cy.get(row).should('contain', wordToBeSearched)
      } else {
        cy.log('Status: ' + wordToBeSearched.toUpperCase() + ' not found, skipping assertion')
      }
    }
  })
})

Cypress.Commands.add('verifyTextColumnOrder', (selector, order = 'asc') => {
  cy.get('table').find(selector, {timeout: 15000}).invoke('text')
    .then(text => {
      const items = text.split('\n').map(item => item.trim()).filter(item => item !== '');
      const sortedItems = order === 'asc' ? [...items].sort() : [...items].sort().reverse();
      expect(items, `Items should be in ${order} order`).to.deep.equal(sortedItems);
    });
});

Cypress.Commands.add('verifyNumberColumnOrder', (selector, order = 'asc') => {
  cy.get('table').find(selector, {timeout: 15000}).invoke('text').then((text) => {
    const numbers = text.split('\n').map(Number);
    const sortedNumbers = [...numbers].sort((a, b) => order === 'asc' ? a - b : b - a);
    cy.wrap(numbers).should('deep.equal', sortedNumbers);
  });
});

Cypress.Commands.add('applyStringFilterDatatable', (filterType, column, dataToBeSearched) => {

  if (filterType === "Different from") {
    cy.get(`td div[datacy="${column}"]`, {timeout:15000}).should('not.contain', dataToBeSearched);
  } else if (filterType === "Is empty") {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
        cy.wrap($el).should('not.contain.text');
      });
  } else if (filterType === "Starts with") {
    cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
      cy.wrap($el).should(($div) => {
        const text = $div.text().toLowerCase();
        const searchText = dataToBeSearched.toLowerCase();
        expect(text.startsWith(searchText)).to.be.true;
      });
    });
  } else if (filterType === "Ends with") {
    cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
      cy.wrap($el).should(($div) => {
        const text = $div.text().trim().toLowerCase();
        const searchText = dataToBeSearched.toLowerCase();
        expect(text.endsWith(searchText)).to.be.true;
      });
    });
  } else {
    cy.get(`td div[datacy="${column}"]`, {timeout:15000}).should(($el) => {
      const text = $el.text().toLowerCase();
      const searchText = dataToBeSearched.toLowerCase();
      expect(text.includes(searchText)).to.be.true;
    });
  }
});

Cypress.Commands.add('applyDateFilterDatatable', (filterType, column, dateToBeFiltered) => {

  if(filterType == "Different from") {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).should('not.contain', dateToBeFiltered);
    }
    else if (filterType === "Is empty") {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
        cy.wrap($el).should('be.empty');
      });
    }
    else if (filterType === "Less than") {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(dateToBeFiltered);
        const createDateObj = new Date(createDate); 
        expect(createDateObj).to.be.lessThan(targetDate); 
      });
    }
    else if (filterType === "Less than or equal") {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(dateToBeFiltered);
        const createDateObj = new Date(createDate); 
        expect(createDateObj).to.be.lte(targetDate); 
      });
    }
    else if (filterType === "Greater than") {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(dateToBeFiltered);
        const createDateObj = new Date(createDate); 
        expect(createDateObj).to.be.greaterThan(targetDate); 
      });
    }
    else if (filterType === "Greater than or equal") {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(dateToBeFiltered);
        const createDateObj = new Date(createDate); 
        expect(createDateObj).to.be.gte(targetDate); 
      });
    } else {
      cy.get(`td div[datacy="${column}"]`, {timeout:15000}).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(dateToBeFiltered);
        const createDateObj = new Date(createDate); 
        expect(createDateObj.getDate()).to.be.equal(targetDate.getDate()); 
      });
    }
});
