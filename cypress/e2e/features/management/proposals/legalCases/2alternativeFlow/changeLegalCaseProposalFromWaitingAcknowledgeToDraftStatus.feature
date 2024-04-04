Feature: Management - Proposals from Waiting Acknowledge to Draft
    As a head user
    I want to change Status a Legal Proposal from Waiting Acknowledge to Draft

    Background: Navigate to Proposal tab

    Scenario Outline: Send to Draft a Legal Proposal from Waiting Acknowledge Status '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Waiting Acknowledge Status with Reviewer by api
        And Verify default user
        When Clicks on 'Send to Draft' button in Current Status view
        Then The proposal should be change the to 'Draft' in Current Status

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
