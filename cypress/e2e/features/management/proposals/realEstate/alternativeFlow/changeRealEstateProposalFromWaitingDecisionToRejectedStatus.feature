
Feature: Change the status of a Real Estate Proposal from Waiting Decision to Rejected
  As Head
  I want to change the status of a Real Estate Proposal from  Waiting Review to Rejected

  Scenario Outline: Reject a Real Estate Proposal in Waiting Decision status with <strategyName> strategy
    Given Create a Real Estate proposal on Waiting Decision with id "<strategyId>" and "<strategyName>" strategy by API
    And Verify default user
    When Clicks on 'Provide Decision' button in Current Status view
    And Selects 'Decline' button decision
    And Types a comment 'Real Estate proposal rejected' on Comments field
    And Clicks on Save button from proposal modal
    Then The proposal should be change to 'Rejected' 'negative' status
    And Should be visible a text 'Amicable proposal rejected' negative in current timeline

    Examples:
      | strategyId | strategyName               |
      | 3          | Rent                       |
      | 4          | Sale                       |
      | 5          | Sale with CPCV             |
      | 29         | Sale w/CPCV Reinforcements |
