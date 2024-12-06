Feature: Legal Proposal - Change Legal Proposals from Waiting Acknowledge to Draft
    As a head user
    I want to change Status a Legal Proposal from Waiting Acknowledge to Draft

    Background: Navigate to Proposal tab

    Scenario Outline: Send to Draft a Legal Proposal from Waiting Acknowledge Status '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Waiting Acknowledge Status with Reviewer by api
        # //for execution in parallel
        And Set '2196' testUserId on Local storage
        And Verify default user
        When Clicks on 'Send to Draft' button in Current Status view
        Then The proposal should be change the to 'Draft' in Current Status

        Examples:
           | strategyId | strategy                            |
            | 7          | Other Pledges                       |
            | 8          | Salary Pledge                       |
            | 23         | Pledge                              |
            | 24         | Recycle Amount(litigator)           |
            | 41         | BK Payment Plan                     |
            # | 48         | Expected Amount (3rd Party)         |
            # | 75         | PER - Unsecured                     |
            # | 77         | Custas de Parte                     |
            # | 2          | Loan Sale                           |
            # | 4          | Sale                                |
            # | 17         | Discount Payoff                     |
            # | 18         | Discount Payoff + Payment Agreement |
            # | 20         | Payment Agreement                   |
            # | 21         | Payoff                              |
            # | 30         | Recycle Amount(vehicle)             |
            # | 31         | Putback                             |
            # | 38         | Sale + PA                           |
            # | 39         | Rent Pledge                         |
            # | 40         | PER                                 |
            # | 44         | 3rd Party Sale                      |
            # | 74         | Legal - CIC Virtual                 |
            # | 78         | Rateio                              |
