import { deleteRequest, getRequest } from "../../apiServices"
import { postRequest } from "../../apiServices"

export function deleteDocumentDebt(entityId, documentId, id ) {     
      const path = `/api/documentation/Documents/relations/${entityId}/${documentId}/${id}`;
      return deleteRequest(path)
}

export function deleteCustomerDebt(customerId, debtId ) {     
  const path = `/api/debts/${debtId}/customers`; 
  bodyRequest = [
      customerId
  ]
    return deleteRequest(path, bodyRequest)
}

export function deleteInterestConfigurationsDebt(debtId, interstConfigurationsId) {
  const path = `/api/debts/${debtId}/interestconfigurations/${interstConfigurationsId}`;
  return deleteRequest(path)
}

export function deleteOwnershipDebt(debtId, id ) {     
  const path = `/api/debts/${debtId}/debtowner/${id}`;
  return deleteRequest(path)
}

export function createDocumentDebt(documentId, domainEntityId, entityId) {
    const path = `/api/documentation/documents/relate`;
    const bodyRequest = {
      "documentId": documentId,
      "domainEntityId": domainEntityId,
      "entityId": entityId
    };
    return postRequest(path, bodyRequest).then((data) => {
      const documentId = data.item.id;
      return documentId;
    });
  }

export function createCustomerDebt(createCustomer, debtId) {
  return checkCustomerExists(debtId).then((exists) => {
    if (exists) {
      return; // If it exists, continue
    } else {
      const path = `/api/debts/${debtId}/customers`;
      return postRequest(path, {
        "customerCaseId": createCustomer.customerCaseId,
        "entityId": createCustomer.entityId,
        "debtId": createCustomer.debtId,
        "customerStatusId": createCustomer.customerStatusId,
        "customerTypeId": createCustomer.customerTypeId,
        "customerDataValidationStatusId": createCustomer.customerDataValidationStatusId
      });
    }
  })
}

  export function checkCustomerExists(debtId) {
    const path = `/api/debts/${debtId}/customers?first=0&count=15&countTotalRecords=true`;
    return getRequest(path).then((data) => {
      if (data && data.items) {
        const customerExists = data.items.some(customer => customer.customerName === 'CARLOS DA SILVA NETO');
        return customerExists
      } else {  
        return false
      }
    })
  }

  export function exInterestConfigurationsExists(debtId) {
    const path = `/api/debts/${debtId}/interestconfigurations?first=0&count=10`;
    return getRequest(path).then((data) => {
      if (data && data.items) {
        const interestExists = data.items.some(interest => interest.transactionTypeDescription === 'Accrued Interest');
        return interestExists
      } 
      else 
      {
        return false
      }
    })
  }

export function createPutback() {
  const path = '/api/portfolios/contractualobligations'
  bodyRequest = {
    portfolioId: 335,
    contractualObligationNumber: "1",
    contractualObligationDescription: "1111 automation test for putback",
    documentPortfolioId: null,
    participantId: 301,
    milestoneTypeId: 1,
    referenceDate: "2024-06-25T00:00:00",
    dueDate: "",
    deltaDays: null,
    businessDays: null,
    dueDateAsMilestone: null,
    breachClauseNumber: null,
    breachConsequence: null,
    putbackReasonsIds: [4],
  };

  let dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 1); 
  bodyRequest.dueDate = dueDate.toISOString().split('.')[0];   
  return postRequest(path, bodyRequest);
}

export function deletePutback(putbackId) {
  const path = `/api/portfolios/335/contractualobligations/${putbackId}`
  bodyRequest = {
    putbackId
  };
 
  return deleteRequest(path, bodyRequest);
}
export function createInterestConfigurations(createInterestConfiguration, debtId) {
  return checkInterestConfigurationsExists(debtId).then((exists) => {
    if (exists) {
      return; // If it exists, continue
    } else {
      const path = `/api/debts/${debtId}/interestconfigurations`;
      return postRequest(path, {
        "debtId": createInterestConfiguration.debtId,
        "annualRateTypeId": createInterestConfiguration.annualRateTypeId,
        "transactionTypeId": createInterestConfiguration.transactionTypeId,
        "indexedRateTypeId": createInterestConfiguration.indexedRateTypeId,
        "rateValue": createInterestConfiguration.rateValue,
        "interestPeriodicityId": createInterestConfiguration.interestPeriodicityId,
        "debtInterestRateStatusId": createInterestConfiguration.debtInterestRateStatusId,
        "startDate": createInterestConfiguration.startDate,
        "endDate": createInterestConfiguration.endDate
      });
    }
  })
}

