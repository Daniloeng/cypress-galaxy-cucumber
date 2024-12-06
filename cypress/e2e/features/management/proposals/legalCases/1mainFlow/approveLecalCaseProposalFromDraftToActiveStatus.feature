Feature: Legal Proposal - Change Legal Proposals from Draft to Active Status
    As a head user
    I want to change Status a Legal Proposal from Draft to Active status

    Background: Navigate to Proposal tab

    Scenario Outline: Submit for Decision a Legal Proposal in Draft Status '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Draft Status by api
        # //for execution in parallel
        And Set '2196' testUserId on Local storage
        And Verify default user
        When Clicks on 'Activate' button in Current Status view
        Then The proposal should be change the to 'Active' in Current Status
        And Should be visible a text 'Proposal activated by Manager' in current timeline

        Examples:
            | strategyId | strategy                            |
            | 4          | Sale                                |
            | 7          | Other Pledges                       |
            | 8          | Salary Pledge                       |
            | 21         | Payoff                              |
            | 23         | Pledge                              |
            | 24         | Recycle Amount(litigator)           |
            | 30         | Recycle Amount(vehicle)             |
            | 41         | BK Payment Plan                     |
            # | 48         | Expected Amount (3rd Party)         |
            | 74         | Legal - CIC Virtual                 |
            # | 75         | PER - Unsecured                     |
            | 78         | Rateio                              |
