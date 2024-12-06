Feature: Legal Proposal - Change Legal Proposals from Waiting Review to Waiting Acknowledge Status
    As a head user
    I want to change Status a Legal Proposal from Waiting Acknowledge to Waiting Acknowledge

    Background: Navigate to Proposal tab

    Scenario Outline: Complete Review a Legal Proposal in Waiting Review Status '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Waiting Review Status with Reviewer by api
        # //for execution in parallel
        And Set '2196' testUserId on Local storage
        And Verify default user
        When Delegate the season to the 'testreview2' user
        And Clicks on 'Complete Review' button in Current Status view
        And Types a review comment 'Reviewed' on Comments and 'All Good' Conclusion fields
        And Clicks on Save button from proposal modal
        And 'Stop session' delegated to default user
        Then The logged user is activate again
        And The proposal should be change the to 'Waiting Review Acknowledge' in Current Status

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
