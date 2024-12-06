Feature: Legal Proposal - Change Legal Proposals from Waiting Decision to Active Status by Director
    As a head user
    I want to change Status a Legal Proposal from Waiting Decision to Active status by Director

    Background: Navigate to Proposal tab

    Scenario Outline: Delegate a Legal Proposal from Waiting Decision Status '<strategy>' Strategy by Diretor
        Given Create a Legal Proposal '<strategyId>' strategy in Waiting Decision Status with Reviewer for delegate by api
        # //for execution in parallel
        And Set '2196' testUserId on Local storage
        And Verify default user
        When Clicks on 'Provide Decision' button in Current Status view
        And Activates the choice of delegating the decision
        And Selects 'testhead2' in Delegate User field
        And Types a comment 'Forward for analysis and decision' on Recommendation field
        And Clicks on Save button from proposal modal
        Then The proposal should be change the to 'Waiting Decision' in Current Status
        And Should be visible a text 'Forward for analysis and decision' alert in current timeline

        #Delegate to Diretor
        When Delegate the season to the 'testhead2' user
        And Clicks on 'Provide Decision' button in Current Status view
        And Selects 'Approve' button decision
        And Types a comment 'Approve Decision' on Comments field
        And Clicks on Save button from proposal modal
        Then The proposal should be change the to 'Active' in Current Status
        And Should be visible a text 'Approve Decision' in current timeline


        Examples:
            | strategyId | strategy                            |
            | 8          | Salary Pledge                       |
            | 17         | Discount Payoff                     |
            | 18         | Discount Payoff + Payment Agreement |
            # | 20         | Payment Agreement                   |
            # | 21         | Payoff                              |
            # | 38         | Sale + PA                           |
            # | 39         | Rent Pledge                         |
            # | 40         | PER                                 |
            # | 2          | Loan Sale                           |
            # | 4          | Sale                                |
            # | 7          | Other Pledges                       |
            # | 23         | Pledge                              |
            # | 24         | Recycle Amount(litigator)           |
            # | 30         | Recycle Amount(vehicle)             |
            # | 31         | Putback                             |
            # | 41         | BK Payment Plan                     |
            # | 44         | 3rd Party Sale                      |
            # | 48         | Expected Amount (3rd Party)         |
            # | 74         | Legal - CIC Virtual                 |
            # | 75         | PER - Unsecured                     |
            # | 77         | Custas de Parte                     |
            # | 78         | Rateio                              |

           
