Feature: Change the status of a Real Estate Proposal from WaitingReview to WaitingReviewAcknowledge
  As a Reviwer
  I want to change the status of a Real Estate Proposal from Review to WaitingReviewAcknowledge in its strategys

  Scenario Outline: Change a Real Estate Proposal in Waiting Review to WaitingReviewAcknowledge with <strategyName> strategy
    Given Create a Real Estate proposal on Waiting Review status with id "<strategyId>" and "<strategyName>" strategy by API
    And Verify default user
    And Delegate the season to the 'testautomationreview' user
    And Clicks on 'Complete Review' button in Current Status view
    And Types a review comment 'Reviewed' on Comments and 'All Good' Conclusion fields
    And Clicks on Save button from proposal modal
    Then The proposal should be change the atention status to 'Waiting Review Acknowledge'

    Examples:
      | strategyId | strategyName               |
      | 3          | Rent                       |
      | 4          | Sale                       |
      | 5          | Sale with CPCV             |
      | 29         | Sale w/CPCV Reinforcements |
