Feature: Real Estate Proposal - Change the status of a Real Estate Proposal from WaitingReviewAcknowledge to WaitingDecision
  As a Manager
  I want to change the status of a Real Estate Proposal from Waiting Review Acknowledge to Waiting Decision

  Scenario Outline: Change an Real Estate proposal in Waiting Acknowledge to Waiting Decision status with <strategyName> strategy
    Given Change a Real Estate proposal on Waiting Acknowledge status with id "<strategyId>" "<strategyName>" strategy
    # //for execution in parallel
    And Set '2197' testUserId on Local storage
    And Verify default user
    And Clicks on 'Submit for Decision' button in Current Status view
    And Types a comment 'For Decision' on Comments field
    And Clicks on Save button from proposal modal
    Then The proposal should be change the atention status to 'Waiting Decision'

    Examples:
      | strategyId | strategyName               |
      | 3          | Rent                       |
      | 4          | Sale                       |
      | 5          | Sale with CPCV             |
      | 29         | Sale w/CPCV Reinforcements |
