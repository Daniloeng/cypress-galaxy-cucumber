const currentDate = new Date();
export const waitingReviewToAcknowledgeRealEstateData = {
    statusId: 2,
    managerId: 2197,
    businessAreaId: 1,
    proposalTypeId: 3,
    transactionAllocationModeId: 2,
    domainEntityType: 8,
    useLicenseHandledByBuyer: true,
    reSale: false,
    proposalPayment:
    {
        amount: 200,
        transactionTypeId: 311,
        amountPerPayment: 50,
        paymentDay: currentDate.getDate(),
        recurrencyValue: 4
    },
    reviewer: {
        reviewerId: 2223
    }
}

export const acknowledgeToWaitingDecisionRealEstateData = {
    statusId: 3,
    managerId: 2197,
    businessAreaId: 1,
    proposalTypeId: 3,
    transactionAllocationModeId: 2,
    domainEntityType: 8,
    useLicenseHandledByBuyer: true,
    reSale: false,
    proposalPayment:
    {
        amount: 200,
        transactionTypeId: 311,
        amountPerPayment: 50,
        paymentDay: currentDate.getDate(),
        recurrencyValue: 4
    },
    reviewer: {
        reviewerId: 2223
    }
};

export const draftToWaitingReviewRealEstateData = {
    statusId: 1,
    managerId: 2197,
    businessAreaId: 1,
    proposalTypeId: 3,
    transactionAllocationModeId: 2,
    domainEntityType: 8,
    useLicenseHandledByBuyer: true,
    reSale: false,
    proposalPayment:
    {
        amount: 200,
        transactionTypeId: 311,
        amountPerPayment: 50,
        paymentDay: currentDate.getDate(),
        recurrencyValue: 4
    },  
    reviewer: {
        reviewerId: 2223
    }
};

export const changeWaitingDecisionToDraftRealEstateProposalData = {
    statusId: 4,
    managerId: 2217,
    businessAreaId: 1,
    proposalTypeId: 3,
    transactionAllocationModeId: 2,
    domainEntityType: 8,
    useLicenseHandledByBuyer: true,
    reSale: false,
    proposalPayment:
    {
        amount: 20000,
        transactionTypeId: 10,
        amountPerPayment: 5000,
        paymentDay: currentDate.getDate(),
        recurrencyValue: 4
    },
    reviewer: {
        reviewerId: 2223
    }
};

export const abortedRealEstateData = {
    statusId: 5,
    managerId: 2197,
    businessAreaId: 1,
    proposalTypeId: 3,
    transactionAllocationModeId: 2,
    domainEntityType: 8,
    useLicenseHandledByBuyer: true,
    reSale: false,
    proposalPayment:
    {
        amount: 20000,
        transactionTypeId: 10,
        amountPerPayment: 5000,
        paymentDay: currentDate.getDate(),
        recurrencyValue: 4
    },
    reviewer: {
        reviewerId: 2223
    }
};

export const draftToCanceledRealEstateData = {
    statusId: 1,
    managerId: 2197,
    businessAreaId: 1,
    proposalTypeId: 3,
    transactionAllocationModeId: 2,
    domainEntityType: 8,
    useLicenseHandledByBuyer: true,
    reSale: false,
    proposalPayment:
    {
        amount: 20000,
        transactionTypeId: 10,
        amountPerPayment: 5000,
        paymentDay: currentDate.getDate(),
        recurrencyValue: 4
    },
    reviewer: {
        reviewerId: 2223
    }
};