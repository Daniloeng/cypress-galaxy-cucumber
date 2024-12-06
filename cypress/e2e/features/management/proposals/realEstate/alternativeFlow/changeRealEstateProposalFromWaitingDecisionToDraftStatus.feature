
Feature: Real Estate Proposal - Change the status of a Real Estate Proposal from Waiting Decision to Draft
  As Manager
  I want to change the status of a Real Estate Proposal from Waiting Decision to Draft

  Scenario Outline: Change a Real Estate Proposal in Waiting Decision status with <strategyName> strategy to Draft
    Given Create a Real Estate proposal on Waiting Decision with id "<strategyId>" and "<strategyName>" strategy by API
    # //for execution in parallel
    And Set '2197' testUserId on Local storage
    And Verify default user
    And Delegate the season to the 'testmanager3' user
    And Clicks on 'Send to Draft' button in Current Status view
    Then The current Status must be visible 'Draft'
    And The information status on top page should be 'Draft'

    Examples:
      | strategyId | strategyName               |
      | 3          | Rent                       |
      | 4          | Sale                       |
      | 5          | Sale with CPCV             |
      | 29         | Sale w/CPCV Reinforcements |
