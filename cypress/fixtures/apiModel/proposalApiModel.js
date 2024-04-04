export function getProposalModel(proposalConfig) {
    const {
        domainEntityType,
        proposalStatusId,
        managerId,
        proposalTypeId,
        proposalStrategyId,
        entityId,
        amount,
        transactionTypeId,
        amountPerPayment,
        paymentDay,
        recurrencyValue,
        paymentMethodId,
        paymentSubMethodId,
        reviewerId
    } = proposalConfig;

    const newReviewer = reviewerId === null ? null : { "reviewerId": reviewerId };

    const newProposalPayment = amount === null ? null : {
        "amount": amount,
        "transactionTypeId": transactionTypeId,
        "amountPerPayment": amountPerPayment,
        "paymentDay": paymentDay,
        "recurrencyValue": recurrencyValue
    };

    const newProposalPaymentMethod = paymentMethodId === null ? null : {
        "paymentMethodId": paymentMethodId,
        "paymentSubMethodId": paymentSubMethodId
    };

    return {
        "statusId": proposalStatusId,
        "managerId": managerId,
        "businessAreaId": 1,
        "proposalTypeId": proposalTypeId,
        "proposalStrategyId": proposalStrategyId,
        "transactionAllocationModeId": 2,
        "domainEntityType": domainEntityType,
        "domainEntityId": entityId,
        "useLicenseHandledByBuyer": true,
        "reSale": false,
        "proposalPayment": newProposalPayment,
        "proposalPaymentMethod": newProposalPaymentMethod,
        "reviewer": newReviewer
    };
}