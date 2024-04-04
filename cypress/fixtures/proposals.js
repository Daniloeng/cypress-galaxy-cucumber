export function getProposalModel(statusId, managerId, proposalTypeId,
  proposalStrategyId, businessAreaId, domainEntityType, entityId,
  amount, transactionTypeId, amountPerPayment, paymentDay, recurrencyValue,
  paymentMethodId, paymentSubMethodId, reviewerId) {

  let newReviewerId;
  let newProposalPayment;
  let newProposalPaymentMethod;

  if (reviewerId === null) {
    newReviewerId = null
  }
  else {
    newReviewerId = {
      "reviewerId": reviewerId
    }
  }

  if (amount === null) {
    newProposalPayment = null
  }
  else {
    newProposalPayment = {
      "amount": amount,
      "transactionTypeId": transactionTypeId,
      "amountPerPayment": amountPerPayment,
      "paymentDay": paymentDay,
      "recurrencyValue": recurrencyValue
    }
  }

  if (paymentMethodId === null) {
    newProposalPaymentMethod = null
  }
  else {
    newProposalPaymentMethod = {
      "paymentMethodId": paymentMethodId,
      "paymentSubMethodId": paymentSubMethodId
    }
  }

  return {
    "statusId": statusId,
    "managerId": managerId,
    "businessAreaId": businessAreaId,
    "proposalTypeId": proposalTypeId,
    "proposalStrategyId": proposalStrategyId,
    "transactionAllocationModeId": 2,
    "domainEntityType": domainEntityType,
    "domainEntityId": entityId,
    "useLicenseHandledByBuyer": true,
    "reSale": false,
    "proposalPayment": newProposalPayment,
    "proposalPaymentMethod": newProposalPaymentMethod,
    "reviewer": newReviewerId,
  };
}
