Feature: Real Estate Proposal - Change the status of a Real Estate Proposal from Draft to WaitingReview
  As a Manager
  I want to change the status of a Real Estate Proposal from Draft to Waiting Review in its strategys

  Scenario Outline: Change an Real Estate proposal in Draft to Waiting Review status with <strategyName> strategy
    Given Change a Real Estate proposal from Draft to Waiting Review with id "<strategyId>" "<strategyName>" strategy
    # //for execution in parallel
    And Set '2197' testUserId on Local storage
    And Verify default user
    And Clicks on 'Send to Review' button in Current Status view
    Then The proposal should be change the atention status to 'Waiting Review'

    Examples:
      | strategyId | strategyName               |
      | 3          | Rent                       |
      # | 4          | Sale                       | 
      # | 5          | Sale with CPCV             |
      # | 29         | Sale w/CPCV Reinforcements |
