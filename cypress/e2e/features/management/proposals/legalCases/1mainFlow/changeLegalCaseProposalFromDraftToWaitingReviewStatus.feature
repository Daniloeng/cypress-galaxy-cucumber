Feature: Change Legal Proposals from Draft to Waiting Review Status
    As a head user
    I want to change Status a Legal Proposal from Draft to Waiting Review status

    Background: Navigate to Proposal tab

    Scenario Outline: Send to Review a Legal Proposal in Draft Status '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Draft Status with Reviewer by api
        And Verify default user
        When Clicks on 'Send to Review' button in Current Status view
        Then Should be visible a text 'recommendation' in current timeline
        And The proposal should be change the to 'Waiting Review' in Current Status

        Examples:
            | strategyId | strategy                            |
            | 40         | PER                                 |
            | 38         | Sale + PA                           |
            | 39         | Rent Pledge                         |
            | 20         | Payment Agreement                   |
            | 18         | Discount Payoff + Payment Agreement |
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
