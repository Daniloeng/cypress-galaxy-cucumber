Feature: Legal Proposal - Change Legal Proposal from Draft to Canceled Status
    As a user with Legal Manager role
    I want to change Status(or cancel) a Legal Proposal from Draft to Canceled

    Background: Navigate to Proposal tab

    Scenario Outline: Cancel Legal Proposal in Draft status and '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Draft Status by api
        # //for execution in parallel
        And Set '2196' testUserId on Local storage
        And Verify default user
        When Clicks on 'Cancel' button in Current Status view
        Then The proposal should be change the to 'Canceled' in Current Status

        Examples:
            | strategyId | strategy                            |
            | 2          | Loan Sale                           |
            | 4          | Sale                                |
            | 7          | Other Pledges                       |
            | 8          | Salary Pledge                       |
            | 17         | Discount Payoff                     |
            | 18         | Discount Payoff + Payment Agreement |
            | 20         | Payment Agreement                   |
            | 21         | Payoff                              |
            | 23         | Pledge                              |
            | 24         | Recycle Amount(litigator)           |
            | 30         | Recycle Amount(vehicle)             |
            # | 31         | Putback                             |
            | 38         | Sale + PA                           |
            | 39         | Rent Pledge                         |
            | 41         | BK Payment Plan                     |
            | 40         | PER                                 |
            # | 44         | 3rd Party Sale                      |
            # | 48         | Expected Amount (3rd Party)         |
            | 74         | Legal - CIC Virtual                 |
            # | 75         | PER - Unsecured                     |
            # | 77         | Custas de Parte                     |
            # | 78         | Rateio                              |
