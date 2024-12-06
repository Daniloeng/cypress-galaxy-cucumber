Feature: Legal Proposal - Create Legal Case Proposals by Legal Case screen

    As a user with Legal Head role
    I want to create new Legal Case Proposal by Legal Case screen

    Background: Navigate to the Legal Case screen
        Given As a user logged in 'legalcases' screen
        And Set '2196' testUserId on Local storage
        And Verify default user
        And Selects All columns option in dropdown columns
        And Clicks on Global Filter button of the table
        And Wait for filter in the Legal Cases table
        And Writes '2240201001071912' to be searched in the 'legalCaseNumber' Name column filter
        And Wait for filter applied in the Legal Cases table

    Scenario Outline: Create Proposal with '<strategy>' Strategy by Legal Case screen
        
        When Selects the '2240201001071912' Legal Case number on the table list
        And Clicks in 'Add' Proposal button on 'Proposals' tab in Legal Case Instance
        # And Types 'automationmanager' in a Manager
        And Fills 'Secured' Business Area with '<strategy>' Strategy and fill '2' on the Additional Costs fields in new Proposal
        Then Legal Case Proposals created is showed
        And The proposal should be change the to 'Draft' in Current Status

        Examples:
            | strategyId | strategy                            |
            | 7          | Other Pledges                       |
            | 8          | Salary Pledge                       |
            | 23         | Pledge                              |
            | 24         | Recycle Amount(litigator)           |
            | 41         | BK Payment Plan                     |
            | 48         | Expected Amount (3rd Party)         |
            | 75         | PER - Unsecured                     |
            | 77         | Custas de Parte                     |
            # | 2          | Loan Sale                           |
            # | 4          | Sale                                |
            # | 17         | Discount Payoff                     |
            # | 18         | Discount Payoff + Payment Agreement |
            # | 20         | Payment Agreement                   |
            # | 21         | Payoff                              |
            # | 30         | Recycle Amount(vehicle)             |
            # | 31         | Putback                             |
            # | 38         | Sale + PA                           |
            # | 40         | PER                                 |
            # | 44         | 3rd Party Sale                      |
            # | 74         | Legal - CIC Virtual                 |
            # | 78         | Rateio                              |

