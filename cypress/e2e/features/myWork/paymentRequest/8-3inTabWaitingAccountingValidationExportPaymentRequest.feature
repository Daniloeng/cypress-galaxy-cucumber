Feature: Payment Request - Export on Payment Request - Tab Waiting Accounting Validation

    This Feature is a automated test to Export Payment Request  - Tab Rejected/With Errors

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded        
        And Set '2217' testUserId on Local storage
        When Clicks on the 'Waiting Accounting' tab
        And Clicks on Global Filter button of the table


    Scenario: Export action - Payment Request  - Tab Rejected/With Errors
        When Selects the 1st Payment Request from the list
        And Filters by Payment Request Id on the Waiting Accounting Validation tab on Payment Request screen
        And Selects the first from the list
        And Selects All columns option in dropdown columns
        And 'Unselects' the 'Requester' column in Columns menu
        Then Check if the 'Requester' column was removed from view
        And 'Unselects' the 'Business Area' column in Columns menu
        Then Check if the 'Business Area' column was removed from view
        When Reads and selects all the missing tax documents from the table
        And Clicks on 'Export' button in toolbar
        Then Checks the Waiting Accounting Validation Payment Request is exported with the correct filename
        And Checks the Tax Documents are in the exported file with 'WaitingAccountingValidation' name
