Feature: Change Legal Proposals from Waiting Review to Waiting Acknowledge Status
    As a head user
    I want to change Status a Legal Proposal from Waiting Acknowledge to Waiting Acknowledge

    Background: Navigate to Proposal tab

    Scenario Outline: Complete Review a Legal Proposal in Waiting Review Status '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Waiting Review Status with Reviewer by api
        And Verify default user
        When Delegate the season to the 'testautomationreview' user
        And Clicks on 'Complete Review' button in Current Status view
        And Types a review comment 'Reviewed' on Comments and 'All Good' Conclusion fields
        And Clicks on Save button from proposal modal
        And 'Stop session' delegated to default user
        Then The logged user is activate again
        And The proposal should be change the to 'Waiting Review Acknowledge' in Current Status

        Examples:
            | strategyId | strategy                    |
            | 39         | Rent Pledge                 |
            | 17         | Discount Payoff             |
            | 2          | Loan Sale                   |
            | 4          | Sale                        |
            | 21         | Payoff                      |
            | 74         | Legal - CIC Virtual         |
            | 24         | Recycle Amount(litigator)   |
            | 48         | Expected Amount (3rd Party) |
            | 30         | Recycle Amount(vehicle)     |
