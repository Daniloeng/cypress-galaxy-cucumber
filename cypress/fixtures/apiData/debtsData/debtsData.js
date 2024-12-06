import { faker } from "@faker-js/faker";


export const balanceOverdue = faker.number.int({ min: 80, max: 100 });
export const balanceInterest = faker.number.int({ min: 50, max: 79 });
export const balanceIndemnities = faker.number.int({ min: 29, max: 49 });
export const balanceExpenses = faker.number.int({ min: 10, max: 28 });
export const balanceDue = faker.number.int({ min: 1, max: 9 });

export const totalNominalAmount = balanceDue + balanceOverdue;
export const totalDebtBalance = balanceOverdue + balanceInterest + balanceIndemnities + balanceExpenses + balanceDue;

const saleTransactionOption = ['Deed Originators', 'Deed Sale', 'DIL']
const assetStatusOption = ['REO', 'CLAIM', 'SOLD'];

export const createNewCustomerCarlosNetoData = {
    customerCaseId: 2707024,
    entityId: 1083623,
    customerStatusId: 1,
    customerTypeId: 1,
    customerDataValidationStatusId: 2
}

export const createInterestConfigurationsEditData = {
    debtId: "1243346127",
    annualRateTypeId: 1,
    transactionTypeId: 1,
    indexedRateTypeId: 6,
    rateValue: null,
    interestPeriodicityId: 3,
    debtInterestRateStatusId: 1,
    startDate: "2024-06-26",
    endDate: "2024-06-26",
}

export const createInterestConfigurationsRemoveData = {
    debtId: "1243363218",
    annualRateTypeId: 1,
    transactionTypeId: 1,
    indexedRateTypeId: 6,
    rateValue: null,
    interestPeriodicityId: 3,
    debtInterestRateStatusId: 1,
    startDate: "2024-06-26",
    endDate: "2024-06-26",
}

export const newOwnershipAsset = {
    transactionAmount: faker.number.int({ min: 50, max: 1000 }),
    numberOfAssetsEntire: faker.number.int({ min: 1, max: 10 }),
    numberOfAssetsParts: faker.number.int({ min: 1, max: 10 }),
    assetStatus: faker.helpers.arrayElement(assetStatusOption), // Select a random string
    saleTransaction: faker.helpers.arrayElement(saleTransactionOption) // Select a random string 
}