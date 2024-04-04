Feature: Change Legal Proposal from Draft to Canceled Status
    As a user with Legal Manager role
    I want to change Status(or cancel) a Legal Proposal from Draft to Canceled

    Background: Navigate to Proposal tab

    Scenario Outline: Cancel Legal Proposal in Draft status and '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Draft Status by api
        And Verify default user
        When Clicks on 'Cancel' button in Current Status view
        Then The proposal should be change the to 'Canceled' in Current Status

        Examples:
            | strategyId | strategy                            |
            | 40         | PER                                 |
            | 18         | Discount Payoff + Payment Agreement |
            | 39         | Rent Pledge                         |
            | 20         | Payment Agreement                   |
            | 17         | Discount Payoff                     |
            | 2          | Loan Sale                           |
            | 44         | 3rd Party Sale                      |
            | 4          | Sale                                |
            | 21         | Payoff                              |
            | 41         | BK Payment Plan                     |
            | 24         | Recycle Amount(litigator)           |
            | 30         | Recycle Amount(vehicle)             |
