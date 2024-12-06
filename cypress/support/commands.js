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
      cy.document().its('cookie', { timeout: 50000 }).should('contain', 'ai_session', { timeout: 80000 });
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
  cy.get('table').find(`td div[datacy="${selector}"]`, {timeout: 15000}).invoke('text')
    .then(text => {
      const items = text.split('\n').map(item => item.trim()).filter(item => item !== '');
      const sortedItems = order === 'asc' ? [...items].sort() : [...items].sort().reverse();
      expect(items, `Items should be in ${order} order`).to.deep.equal(sortedItems);
  });
});

Cypress.Commands.add('verifyNumberColumnOrder', (selector, order = 'asc') => {
  cy.get('table').find(`td div[datacy="${selector}"]`, {timeout: 15000}).invoke('text').then((text) => {
    const numbers = text.split('\n').map(Number);
    const sortedNumbers = [...numbers].sort((a, b) => order === 'asc' ? a - b : b - a);
    cy.wrap(numbers).should('deep.equal', sortedNumbers);
  });
});

Cypress.Commands.add('applyStringFilterDatatable', (filterType, column, dataToBeSearched) => {
  cy.wait(2000);
  if (filterType === "Different from") {
    cy.get(`td div[datacy="${column}"]`, { timeout: 30000 }).should('not.contain', dataToBeSearched);
  } else if (filterType === "Is empty") {
    cy.get(`td div[datacy="${column}"]`, { timeout: 30000 }).each(($el) => {
      cy.wrap($el).should('not.contain.text');
    });
  } else if (filterType === "Starts with") {
    cy.get(`td div[datacy="${column}"]`, { timeout: 30000 }).each(($el) => {
      const text = $el.text().trim().toLowerCase();
      const searchText = dataToBeSearched.trim().toLowerCase();
      if (text) {
        expect(text.startsWith(searchText), `Text "${text}" should start with "${searchText}"`).to.be.true;
      }
    });
  } else if (filterType === "Ends with") {
    cy.get(`td div[datacy="${column}"]`, { timeout: 30000 }).each(($el) => {
      const text = $el.text().trim().toLowerCase();
      const searchText = dataToBeSearched.trim().toLowerCase();
      if (text) {
        expect(text.endsWith(searchText), `Text "${text}" should end with "${searchText}"`).to.be.true;
      }
    });
  } else {
    cy.get(`td div[datacy="${column}"]`, { timeout: 30000 }).should(($el) => {
      const text = $el.text().trim().toLowerCase();
      const searchText = dataToBeSearched.trim().toLowerCase();
      expect(text.includes(searchText), `Text "${text}" should include "${searchText}"`).to.be.true;
    });
  }
});

Cypress.Commands.add('applyDateFilterDatatable', (filterType, column, dateToBeFiltered) => {
  cy.wait(1000); //reduce the possibility of error
  if(filterType == "Different from") {
      cy.get(`td div[datacy="${column}"]`, { timeout: 15000 }).should('not.contain', dateToBeFiltered);
    }
    else if (filterType === "Is empty") {
      cy.get(`td div[datacy="${column}"]`, { timeout: 15000 }).each(($el) => {
        cy.wrap($el).should('be.empty');
      });
    }
    else if (filterType === "Less than") {
      cy.get(`td div[datacy="${column}"]`, { timeout: 15000 }).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(dateToBeFiltered).getTime();
        const createDateObj = new Date(createDate).getTime();
        expect(createDateObj).to.be.lessThan(targetDate); 
      });
    }
    else if (filterType === "Less than or equal") {
      cy.get(`td div[datacy="${column}"]`, { timeout: 15000 }).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(dateToBeFiltered).getTime();
        const createDateObj = new Date(createDate).getTime();
        expect(createDateObj).to.be.lte(targetDate); 
      });
    }
    else if (filterType === "Greater than") {
      cy.get(`td div[datacy="${column}"]`, { timeout: 15000 }).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(dateToBeFiltered).getTime();
        const createDateObj = new Date(createDate).getTime(); 
        expect(createDateObj).to.be.greaterThan(targetDate); 
      });
    }
    else if (filterType === "Greater than or equal") {
      cy.get(`td div[datacy="${column}"]`, { timeout: 15000 }).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(dateToBeFiltered).getTime();
        const createDateObj = new Date(createDate).getTime(); 
        expect(createDateObj).to.be.gte(targetDate); 
      });
    } else {
      cy.get(`td div[datacy="${column}"]`, { timeout: 15000 }).each(($el) => {
        const createDate = $el.text(); 
        const targetDate = new Date(dateToBeFiltered).getDate();
        const createDateObj = new Date(createDate).getDate(); 
        expect(createDateObj).to.be.equal(targetDate); 
      });
    }
});

Cypress.Commands.add('applyCurrencyFilterDatatable', (filterType, column, valueToBeFiltered) => {
 cy.wait(2000); // Reduce the possibility of error

  cy.get(`td div[datacy="${column}"]`, { timeout: 15000 }).each(($el) => {
    const euroSymbol = '€';
    const currencyValueStr = $el.text().trim().replace(euroSymbol, '').replace(',', '').replace('.', ','); // Remove the euro symbol and replace '.' with ',' to ensure decimals are recognized correctly
    const currencyValue = parseFloat(currencyValueStr); // Convert the cell value to a floating point number
    const targetValueStr = valueToBeFiltered.replace('.', ','); // Replace '.' with ',' to ensure decimals are recognized correctly
    const targetValue = parseFloat(targetValueStr); // Convert the comparison value to a floating point number

    switch (filterType) {
      case 'Different from':
        expect(currencyValue).to.not.equal(targetValue);
        break;
      case 'Is empty':
        expect(currencyValue).to.equal(0); // Considera que o valor vazio será 0
        break;
      case 'Less than':
        expect(currencyValue).to.be.lessThan(targetValue);
        break;
      case 'Less than or equal':
        expect(currencyValue).to.be.at.most(targetValue);
        break;
      case 'Greater than':
        expect(currencyValue).to.be.greaterThan(targetValue);
        break;
      case 'Greater than or equal':
        expect(currencyValue).to.be.at.least(targetValue);
        break;
      default:
        expect(currencyValue).to.equal(targetValue);
    }
  });
});


Cypress.Commands.add('uploadFile', (folder, filePDF) => {
  const path = `${folder}/${filePDF}`;
  cy.fixture(path, 'binary')
    .then((file) => Cypress.Blob.binaryStringToBlob(file))
    .then((blob) => {
      const formData = new FormData();
      formData.append('file', blob, filePDF);
      cy.getToken().then((token) => {
        cy.request({
          url: `${Cypress.env('BASE_URL')}/api/documentation/documents/files`,
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            'accept': 'text/plain'
          },
          body: formData,
        }).as('response');  
            cy.get('@response').then(res =>{
              expect(res.status).to.equal(201);
              expect(res).to.have.property('body');
              const jsonObject = JSON.parse(new TextDecoder('utf-8').decode(res.body));
              return jsonObject.item.id;
            });
        });
    });
});

/**
 * Types the given text slowly into the specified input field within a container.
 *
 * @param {String} containerSelector - The selector for the container element that holds the input field.
 * @param {String} inputSelector - The selector for the input field within the container.
 * @param {String} text - The text to be typed into the input field.
 * @param {Number} [delay=200] - The delay in milliseconds between each keystroke. Defaults to 200ms.
 * @param {Number} [finalPause=500] - The pause in milliseconds after typing the entire text. Defaults to 500ms.
 *
 * @example
 * cy.typeSlowly('.container', '#inputField', 'Hello, World!', 100, 1000);
 */
Cypress.Commands.add('typeSlowly', (containerSelector, inputSelector, text, delay = 200, finalPause = 500) => {
  // Waits until the container and the input field are visible
  cy.get(containerSelector).should('be.visible').within(() => {
    cy.get(inputSelector).should('be.visible').then((input) => {
      // Loops through each character in the text
      for (let i = 0; i < text.length; i++) {
        // Types each character with a specified delay between each keystroke
        cy.wrap(input).type(text[i], { delay, force: true });
        cy.wait(delay); // Waits for the specified delay between characters
      }
      // Adds a final pause after typing the entire text
      cy.wait(finalPause);
    });
  });
});

Cypress.Commands.add('ensureColumnSortedDesc', (columnElement) => {
  const iconSelector = '.p-sortable-column-icon';

  cy.wrap(columnElement)
    .find(iconSelector)
    .then(($icon) => {
      const classList = $icon.attr('class') || ''; // Garantir que a classe é uma string válida

      if (classList.includes('pi-sort-amount-down')) {
        // Já está em DESC
        cy.log('A coluna já está ordenada de forma decrescente.');
      } else if (classList.includes('pi-sort-amount-up-alt')) {
        // Está em ASC, um clique para DESC
        cy.log('A coluna está ordenada de forma crescente. Ajustando para decrescente.');
        cy.wrap(columnElement).click({ force: true });
        cy.wait(2000);
        // Validar que está em DESC
        cy.wrap(columnElement)
          .find(iconSelector)
          .should('have.class', 'pi-sort-amount-down');
      } else {
        // Estado neutro ou sem ícone visível
        cy.log('A coluna está no estado padrão. Ajustando para decrescente.');
        cy.wrap(columnElement).click({ force: true }); // Clique para ASC (neutro → ASC)
        cy.wait(2000); // Pequeno delay para garantir transição no DOM
        cy.wrap(columnElement).click({ force: true }); // Clique para DESC (ASC → DESC)
        cy.wait(2000);
        // Validar que está em DESC
        cy.wrap(columnElement)
          .find(iconSelector)
          .should('have.class', 'pi-sort-amount-down');
      }
    });
});

Cypress.Commands.add('ensureColumnSortedAsc', (columnElement) => {
  const iconSelector = '.p-sortable-column-icon';

  cy.wrap(columnElement)
        .find(iconSelector)
        .then(($icon) => {
            const classList = $icon.attr('class');
      
            if (classList.includes('pi-sort-amount-up-alt')) {
              cy.log('A coluna já está ordenada de forma crescente.');
          } else if (classList.includes('pi-sort-amount-down')) {
              cy.log('A coluna está ordenada de forma decrescente. Será ajustada.');
              cy.wrap(columnElement).click({ force: true });
              cy.wait(1000); // Aguardar atualização
              cy.wrap(columnElement).find(iconSelector).should('have.class', 'pi-sort-amount-up-alt');
          } else if (classList.includes('pi-sort-alt')) {
              cy.log('A coluna não está ordenada. Será ajustada para crescente.');
              cy.wrap(columnElement).click({ force: true });
              cy.wait(1000); // Aguardar atualização
              cy.wrap(columnElement).find(iconSelector).should('have.class', 'pi-sort-amount-up-alt');
          }
    });
});
