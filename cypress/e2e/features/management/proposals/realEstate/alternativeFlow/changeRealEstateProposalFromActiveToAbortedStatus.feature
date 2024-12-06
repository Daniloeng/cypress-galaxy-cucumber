Feature: Real Estate Proposal - Change the status of a Real Estate Proposal from Active to Aborted
  As a manager
  I want to change the status of a Real Estate Proposal from Active to Aborted

  Scenario Outline: Approve a Real Estate Proposal in Active status to Aborted with <strategyName> strategy
    Given Create a Real Estate proposal with id "<strategyId>" "<strategyName>" strategy to change to aborted status
    # //for execution in parallel
    And Set '2197' testUserId on Local storage
    And Verify default user
    When Click on Abort button from Current Status time line from proposal screen
    And Selects 'Did not obtain funding' option from Reason dropbox in Abort Proposal modal from proposal screen
    And Types a comment 'Amicable proposal aborted' on Comments field
    And Clicks on Save button from proposal modal
    Then The proposal should be change to 'Aborted' 'inactive' status
    And Should be visible a text 'Amicable proposal aborted' negative in current timeline

    Examples:
      | strategyId | strategyName               |
      | 3          | Rent                       |
      | 4          | Sale                       |
      | 5          | Sale with CPCV             |
      | 29         | Sale w/CPCV Reinforcements |
