Feature: Change an Amicable Proposal from Waiting Decision to Rejected Status by Diretor
    As a Diretor user
    I want to approve a Amicable Proposal with its strategys

    Scenario Outline: Approve an Amicable Proposal in Waiting Decision Status '<strategyName>' Strategy by Diretor
        Given Create an Amicable proposal with id "<strategyId>" "<strategyName>" strategy to change to active status
        And Verify default user
        When Clicks on 'Provide Decision' button in Current Status view
        And Activates the choice of delegating the decision
        And Selects 'testautomationhead' in Delegate User field
        And Types a comment 'Forward for analysis and decision' on Recommendation field
        And Clicks on Save button from proposal modal
        Then The proposal should be change the atention status to 'Waiting Decision'
        And Should be visible a text 'Forward for analysis and decision' alert in current timeline

        #Delegate to Diretor
        When Delegate the season to the 'testautomationhead' user
        And Clicks on 'Provide Decision' button in Current Status view
        And Selects 'Approve' button decision
        And Types a comment 'Amicable proposal Approved by Diretor' on Comments field
        And Clicks on Save button from proposal modal
        Then The proposal should be change to 'Active' 'positive' status
        And Should be visible a text 'Amicable proposal Approved by Diretor' in current timeline

        #Back to the galaxy user
        And 'Stop session' delegated to default user
        Then The logged user is activate again


        Examples:
            | strategyId | strategyName                                     |
            | 4          | Sale                                             |
            | 13         | Deed in Lieu                                     |
            | 15         | Deed in Lieu + Payment Agreement                 |
            | 17         | Discount Payoff                                  |
            | 18         | Discount Payoff + Payment Agreement              |
            | 21         | Payoff                                           |
            | 38         | Sale + PA                                        |
            | 46         | Sale by Real Estate (ASRED)                      |
            | 47         | Sale by Real Estate (ASRED) + PA                 |
            | 59         | Performing Secured - Sale                        |
            | 60         | Performing Secured - Sale by Real Estate (ASRED) |
            | 61         | Performing Secured - Sale + PA                   |
            | 62         | Performing Secured - Payment Agreement           |
            | 63         | Performing Secured - Deed in Lieu                |
            | 64         | Performing Secured - Deed in Lieu + PA           |
            | 65         | Performing Secured - Discount Payoff             |
            | 66         | Performing Secured - Discount Payoff + PA        |
            | 67         | Performing Secured - Payoff                      |
            | 69         | Performing Secured - ASRED + PA                  |
            | 70         | Unsecured - Discount Payoff (Judicial)           |
            | 71         | Unsecured - Discount Payoff + PA (Judicial)      |
            | 72         | Unsecured - Payment Agreement (Judicial)         |
            | 73         | Unsecured - Payoff (Judicial)                    |

