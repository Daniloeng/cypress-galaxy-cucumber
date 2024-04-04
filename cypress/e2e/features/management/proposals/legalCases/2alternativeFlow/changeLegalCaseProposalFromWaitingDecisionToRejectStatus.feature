Feature: Change Legal Proposals from Waiting Decision to Rejected Status
    As a head user
    I want to change Status a Legal Proposal from Waiting Decision to Rejected

    Background: Navigate to Proposal tab

    Scenario Outline: Reject a Legal Proposal in Waiting Decision Status '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Waiting Decision Status with Reviewer by api
        And Verify default user
        When Clicks on 'Provide Decision' button in Current Status view
        And Selects 'Decline' button decision
        And Types a comment 'Decline Decision' on Comments field
        And Clicks on Save button from proposal modal
        Then The proposal should be change the to 'Rejected' in Current Status
        And Should be visible a text 'Decline Decision' in current timeline

        Examples:
            | strategyId | strategy                            |
            | 40         | PER                                 |
            | 18         | Discount Payoff + Payment Agreement |
            | 38         | Sale + PA                           |
            | 39         | Rent Pledge                         |
            | 20         | Payment Agreement                   |
            | 17         | Discount Payoff                     |
            | 2          | Loan Sale                           |
            | 44         | 3rd Party Sale                      |
            | 4          | Sale                                |
            | 21         | Payoff                              |
            | 41         | BK Payment Plan                     |
            | 74         | Legal - CIC Virtual                 |
            | 24         | Recycle Amount(litigator)           |
            | 48         | Expected Amount (3rd Party)         |
            | 30         | Recycle Amount(vehicle)             |
