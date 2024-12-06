Feature: Real Estate Proposal - Change the status of a Real Estate Proposal from Waiting Decision to Active by Director
  As a Head
  I want to change the status of a Real Estate Proposal from Waiting Review Acknowledge to Waiting Decision by Director

  Scenario Outline: Approve an Real Estate Proposal in Waiting Decision Status '<strategyName>' Strategy by Diretor
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

    #Approve by Diretor
    And Delegate the season to the 'testhead3' user
    And Clicks on 'Provide Decision' button in Current Status view
    And Selects 'Approve' button decision
    And Types a comment 'Amicable proposal Approved by Diretor' on Comments field
    And Clicks on Save button from proposal modal
    Then The proposal should be change to 'Active' 'positive' status
    And Should be visible a text 'Amicable proposal Approved by Diretor' in current timeline

    Examples:
      | strategyId | strategyName               |
      | 3          | Rent                       |
      | 4          | Sale                       |
      | 5          | Sale with CPCV             |
      | 29         | Sale w/CPCV Reinforcements |
