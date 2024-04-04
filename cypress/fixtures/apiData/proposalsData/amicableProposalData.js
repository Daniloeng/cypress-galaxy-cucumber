import moment from 'moment';

const currentDate = moment().format('D');

export const approveAmicableProposalData = {
    proposalStatusId: 4,
    managerId: 2169,
    proposalTypeId: 1,
    domainEntityType: 33,
    entityId: 2241534,
    amount: 20000.00,
    transactionTypeId: 10,
    amountPerPayment: 20000.00,
    paymentDay: currentDate,
    recurrencyValue: 4,
    paymentMethodId: 1,
    paymentSubMethodId: 3,
    reviewerId: 2171
};

export const changeToDraftAmicableProposalData = {
    proposalStatusId: 4,
    managerId: 1,
    businessAreaId: 1,
    proposalTypeId: 1,
    domainEntityType: 33,
    entityId: 2241534,
    amount: 20000.00,
    transactionTypeId: 2,
    amountPerPayment: 20000.00,
    paymentDay: currentDate,
    recurrencyValue: 4,
    paymentMethodId: 1,
    paymentSubMethodId: 3,
    reviewerId: 2171
};

export const changeAcknowledgeToDraftData = {
    proposalStatusId: 2,
    managerId: 1,
    businessAreaId: 1,
    proposalTypeId: 1,
    domainEntityType: 33,
    entityId: 2241534,
    amount: 20000.00,
    transactionTypeId: 2,
    amountPerPayment: 20000.00,
    paymentDay: currentDate,
    recurrencyValue: 4,
    paymentMethodId: 1,
    paymentSubMethodId: 3,
    reviewerId: 2171
};

export const amicableProposalCompleteFlowData = {
    proposalStatusId: 1,
    managerId: 1,
    proposalTypeId: 1,
    domainEntityType: 33,
    entityId: 123164,
    amount: 20000.00,
    transactionTypeId: 10,
    amountPerPayment: 20000.00,
    paymentDay: currentDate,
    recurrencyValue: 4,
    paymentMethodId: 1,
    paymentSubMethodId: 3,
    reviewerId: 2171
};

export const amicableProposalWithoutLegalCaseData = {
    proposalStatusId: 1,
    managerId: 1,
    proposalTypeId: 1,
    domainEntityType: 33,
    entityId: 2674282,
    amount: 20000.00,
    transactionTypeId: 10,
    amountPerPayment: 20000.00,
    paymentDay: currentDate,
    recurrencyValue: 4,
    paymentMethodId: 1,
    paymentSubMethodId: 3,
    reviewerId: 2171
};

export const amicableProposalWithoutLegalCaseAndReviwerData = {
    proposalStatusId: 1,
    managerId: 1,
    proposalTypeId: 1,
    domainEntityType: 33,
    entityId: 2674282,
    amount: 20000.00,
    transactionTypeId: 10,
    amountPerPayment: 20000.00,
    paymentDay: currentDate,
    recurrencyValue: 4,
    paymentMethodId: 1,
    paymentSubMethodId: 3,
    reviewerId: null
};

export const amicableProposalWithoutReviwerData = {
    proposalStatusId: 1,
    managerId: 1,
    proposalTypeId: 1,
    domainEntityType: 33,
    entityId: 123164,
    amount: 20000.00,
    transactionTypeId: 10,
    amountPerPayment: 20000.00,
    paymentDay: currentDate,
    recurrencyValue: 4,
    paymentMethodId: 1,
    paymentSubMethodId: 3,
    reviewerId: null
};

export const abortAmicableProposalData = {
    proposalStatusId: 5,
    managerId: 2169,
    proposalTypeId: 1,
    domainEntityType: 33,
    entityId: 2241534,
    amount: 20000.00,
    transactionTypeId: 10,
    amountPerPayment: 20000.00,
    paymentDay: currentDate,
    recurrencyValue: 4,
    paymentMethodId: 1,
    paymentSubMethodId: 3,
    reviewerId: 2171
};