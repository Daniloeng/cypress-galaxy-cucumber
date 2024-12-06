Feature: Real Estate Proposal - Change the status of a Real Estate Proposal from Waiting Decision to Rejected by Director
  As a Head
  I want to change the status of a Real Estate Proposal from Waiting Decision to Reject by Director

  Scenario Outline: Reject a Real Estate Proposal in Waiting Decision status with <strategyName> strategy by Director
    Given Create a Real Estate proposal on Waiting Decision with id "<strategyId>" and "<strategyName>" strategy by API
    # //for execution in parallel
    And Set '2197' testUserId on Local storage
    And Verify default user

    #Delegate to Diretor
    When Clicks on 'Provide Decision' button in Current Status view
    And Activates the choice of delegating the decision
    And Selects 'testhead3' in Delegate User field
    And Types a comment 'Forward for analysis and decision' on Recommendation field
    And Clicks on Save button from proposal modal
    Then The proposal should be change the atention status to 'Waiting Decision'
    And Should be visible a text 'Forward for analysis and decision' alert in current timeline

    #Reject by Diretor
    And Delegate the season to the 'testhead3' user
    And Clicks on 'Provide Decision' button in Current Status view
    And Selects 'Decline' button decision
    And Types a comment 'Real Estate reject by Diretor' on Comments field
    And Clicks on Save button from proposal modal
    Then The proposal should be change to 'Rejected' 'negative' status
    And Should be visible a text 'Amicable proposal rejected' negative in current timeline

    Examples:
      | strategyId | strategyName               |
      | 3          | Rent                       |
      | 4          | Sale                       |
      | 5          | Sale with CPCV             |
      | 29         | Sale w/CPCV Reinforcements |
