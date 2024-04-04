const currentDate = new Date();
export const inDraftStatus = {
    statusId: 1,
    managerId: 1,
    businessAreaId: 1,
    proposalTypeId: 2,
    transactionAllocationModeId: 2,
    domainEntityType: 37,
    useLicenseHandledByBuyer: true,
    reSale: false,
    proposalPayment: 
    {
        amount: 200,
        transactionTypeId: 311,
        amountPerPayment: 50,
        paymentDay: currentDate.getDate(),
        recurrencyValue: 4
    }    
}

export const inDraftStatusWithReviewer = {
    statusId: 1,
    managerId: 1,
    businessAreaId: 1,
    proposalTypeId: 2,
    transactionAllocationModeId: 2,
    domainEntityType: 37,
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

export const inWaitingReviewStatusWithReviewer = {
    statusId: 2,
    managerId: 1,
    businessAreaId: 1,
    proposalTypeId: 2,
    transactionAllocationModeId: 2,
    domainEntityType: 37,
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

export const inWaitingAcknowledgeStatusWithReviewer = {
    statusId: 3,
    managerId: 1,
    businessAreaId: 1,
    proposalTypeId: 2,
    transactionAllocationModeId: 2,
    domainEntityType: 37,
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

export const inWaitingDecisionStatusWithReviewer = {
    statusId: 4,
    managerId: 2169,
    businessAreaId: 1,
    proposalTypeId: 2,
    transactionAllocationModeId: 2,
    domainEntityType: 37,
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

export const inWaitingDecisionStatusWithReviewerForDelegate = {
    statusId: 4,
    managerId: 2169,
    businessAreaId: 1,
    proposalTypeId: 2,
    transactionAllocationModeId: 2,
    domainEntityType: 37,
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

export const inWaitingDecisionStatusWithReviewerForDraft = {
    statusId: 4,
    managerId: 1,
    businessAreaId: 1,
    proposalTypeId: 2,
    transactionAllocationModeId: 2,
    domainEntityType: 37,
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
