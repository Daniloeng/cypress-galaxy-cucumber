const currentDate = new Date();
export const waitingReviewToAcknowledgeRealEstateData = {
    statusId: 2,
    managerId: 1,
    businessAreaId: 3,
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
        reviewerId: 2171
    }
}

export const acknowledgeToWaitingDecisionRealEstateData = {
    statusId: 3,
    managerId: 1,
    businessAreaId: 3,
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
        reviewerId: 2171
    }
};

export const draftToWaitingDecisionRealEstateData = {
    statusId: 1,
    managerId: 1,
    businessAreaId: 3,
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
        recurrencyValue: 4,
    },
    proposalPaymentMethod: {
        paymentMethodId: 1,
        paymentSubMethodId: 3,
    },
    reviewer: {
        reviewerId: 2171
    }
};

export const approveRealEstateProposalData = {
    statusId: 4,
    managerId: 2169,
    businessAreaId: 3,
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
        reviewerId: 2171
    }
};

export const abortedRealEstateData = {
    statusId: 5,
    managerId: 1,
    businessAreaId: 3,
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
        reviewerId: 2171
    }
};

export const draftToCanceledRealEstateData = {
    statusId: 1,
    managerId: 1,
    businessAreaId: 3,
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
        reviewerId: 2171
    }
};