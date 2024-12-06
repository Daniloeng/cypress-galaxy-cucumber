Feature: Real Estate Proposal - Change the status of a Real Estate Proposal from Draft to Canceled

  As Manager
  I want to change the status of a Real Estate Proposal from Draft to Canceled

  Scenario Outline: Cancel a Real Estate Proposal in Draft status to Canceled with <strategyName> strategy
    Given Create a Real Estate proposal on Draft status with id "<strategyId>" and "<strategyName>" strategy
    # //for execution in parallel
    And Set '2197' testUserId on Local storage
    And Verify default user
    When Clicks on 'Cancel' button in Current Status view
    Then The current Status must be visible 'Canceled'
    And The information status on top page should be 'Canceled'

    Examples:
      | strategyId | strategyName               |
      | 3          | Rent                       |
      | 4          | Sale                       |
      | 5          | Sale with CPCV             |
      | 29         | Sale w/CPCV Reinforcements |
