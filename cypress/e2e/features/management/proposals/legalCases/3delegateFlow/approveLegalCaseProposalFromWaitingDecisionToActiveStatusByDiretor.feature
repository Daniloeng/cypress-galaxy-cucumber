Feature: Change Legal Proposals from Waiting Decision to Active Status
    As a head user
    I want to change Status a Legal Proposal from Waiting Decision to Active status

    Background: Navigate to Proposal tab

    Scenario Outline: Delegate a Legal Proposal from Waiting Decision Status '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Waiting Decision Status with Reviewer for delegate by api
        And Verify default user
        When Clicks on 'Provide Decision' button in Current Status view
        And Activates the choice of delegating the decision
        And Selects 'testautomationhead' in Delegate User field
        And Types a comment 'Forward for analysis and decision' on Recommendation field
        And Clicks on Save button from proposal modal
        Then The proposal should be change the to 'Waiting Decision' in Current Status
        And Should be visible a text 'Forward for analysis and decision' alert in current timeline

        #Delegate to Diretor
        When Delegate the season to the 'testautomationhead' user
        And Clicks on 'Provide Decision' button in Current Status view
        And Selects 'Approve' button decision
        And Types a comment 'Approve Decision' on Comments field
        And Clicks on Save button from proposal modal
        Then The proposal should be change the to 'Active' in Current Status
        And Should be visible a text 'Approve Decision' in current timeline


        Examples:
            | strategyId | strategy                            |
            | 18         | Discount Payoff + Payment Agreement |
            | 20         | Payment Agreement                   |
            | 38         | Sale + PA                           |
            | 39         | Rent Pledge                         |
            | 2          | Loan Sale                           |
            | 40         | PER                                 |
            | 17         | Discount Payoff                     |
            | 44         | 3rd Party Sale                      |
            | 4          | Sale                                |
            | 21         | Payoff                              |
            | 41         | BK Payment Plan                     |
            | 24         | Recycle Amount(litigator)           |
            | 30         | Recycle Amount(vehicle)             |

