Feature: Create Legal Case Proposals by Legal Case screen

    As a user with Legal Head role
    I want to create new Legal Case Proposal by Legal Case screen

    Background: Navigate to the Legal Case screen
        Given As a user logged in 'legalcases' screen
        And Verify default user

    Scenario Outline: Create Proposal with '<strategy>' Strategy by Legal Case screen
        When Selects the first Legal Case from the table list
        And Selects the first Legal Case Instance
        And Clicks in Add Proposal button on Proposals tab in Legal Case Instance
        And I type 'automationmanager' in a Manager
        And Fills 'Secured' Business Area with '<strategy>' Strategy and fill '2' on the Additional Costs fields in new Proposal
        Then Legal Case Proposals created is showed
        And The proposal should be change the to 'Draft' in Current Status

        Examples:
            | strategyId | strategy                            |
            | 40         | PER                                 |
            | 4          | Sale                                |
            | 38         | Sale + PA                           |
            | 20         | Payment Agreement                   |
            | 18         | Discount Payoff + Payment Agreement |
            | 17         | Discount Payoff                     |
            | 2          | Loan Sale                           |
            | 44         | 3rd Party Sale                      |
            | 74         | Legal - CIC Virtual                 |

