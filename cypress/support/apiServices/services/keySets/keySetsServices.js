import { getRequest, postRequest, deleteRequest } from "../../apiServices"
const currentDate = new Date().toISOString().split('T')[0]; // Format 'YYYY-MM-DD'
/**
 * Create a Key-Set
 * 
 * 
 */
export function createKeySets() {
  const path = `/api/assets/keysets`;
  bodyRequest = {
    assetId: 76501,
    entityId: 486325,
    keyOriginId: 3,
    keySafeStorageId: 2,
    keySafeStoragePositionId: null,
    keySetStatusDate: currentDate,
    keySetStatusId: 1,
    keySetStatusReasonId: 3,
    rowVersion: "",
    totalKeySet: 1,
    comment: "automationTest",
  };

  return postRequest(path, bodyRequest);
}


