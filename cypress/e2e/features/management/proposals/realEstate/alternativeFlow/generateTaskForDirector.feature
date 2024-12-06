Feature: Real Estate Proposal - Generate task for Director
  As a Head
  I want to generate a task for direcor

  Scenario Outline:  Change a Real Estate Proposal in Waiting Decision status with <strategyName> strategy to Draft
    Given Create a Real Estate proposal on Waiting Decision with id "<strategyId>" and "<strategyName>" strategy by API
    # //for execution in parallel
    And Set '2197' testUserId on Local storage
    And Verify default user
    When Clicks on 'Provide Decision' button in Current Status view
    And Activates the choice of delegating the decision
    And Selects 'testhead3' in Delegate User field
    And Types a comment 'Forward for analysis and decision' on Recommendation field
    And Clicks on Save button from proposal modal
    Then The proposal should be change the atention status to 'Waiting Decision'
    And Should be visible a text 'Forward for analysis and decision' alert in current timeline

    Examples:
      | strategyId | strategyName               |
      | 3          | Rent                       |
      | 4          | Sale                       |
      | 5          | Sale with CPCV             |
      | 29         | Sale w/CPCV Reinforcements |
