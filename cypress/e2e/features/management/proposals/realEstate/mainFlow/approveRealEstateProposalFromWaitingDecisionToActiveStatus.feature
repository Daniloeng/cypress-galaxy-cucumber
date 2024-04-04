Feature: Change the status of a Real Estate Proposal from Waiting Decision to Active
  As a Head
  I want to approve an Real Estate proposal in Waiting Decision to Active status and their strategys

  Scenario Outline: Approve a Real Estate Proposal in Waiting Decision status to Active with <strategyName> strategy
    Given Create a Real Estate proposal on Waiting Decision with id "<strategyId>" and "<strategyName>" strategy by API
    And Verify default user

    # And Delegate the season to the 'testautomationhead' user
    When Clicks on 'Provide Decision' button in Current Status view
    And Selects 'Approve' button decision
    And Types a comment 'Approve Decision of an amicalbe type and <strategyName> strategy' on Comments field

    # And 'Stop session' delegated to default user
    And Clicks on Save button from proposal modal
    Then The proposal should be change to 'Active' 'positive' status
    And Should be visible a text 'Approve Decision' in current timeline

    Examples:
      | strategyId | strategyName |
      | 3          | Rent         |
# | 4          | Sale                       |
# | 5          | Sale with CPCV             |
# | 29         | Sale w/CPCV Reinforcements |
