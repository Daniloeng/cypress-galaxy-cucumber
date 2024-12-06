Feature: Payment Request - Export Payment Request - Tab Rejected/With Errors

    This Feature is a automated test to Export Payment Request - Tab Rejected/With Errors

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded        
        And Set '2217' testUserId on Local storage
        When Clicks on the 'Rejected/With Errors' tab in showmore on the Payment Request screen
        And Clicks on Global Filter button of the table


    Scenario: Export action - Payment Request - Tab Rejected/With Errors
        When Selects the 1st Payment Request from the list
        And Filters by Payment Request Id in Payment Request screen
        And Selects the first from the list
        And Selects All columns option in dropdown columns
        And 'Unselects' the 'Requester' column in Columns menu
        Then Check if the 'Requester' column was removed from view
        And 'Unselects' the 'Business Area' column in Columns menu
        Then Check if the 'Business Area' column was removed from view
        When Reads and selects all the missing tax documents from the table
        And Clicks on 'Export' button in toolbar
        Then Checks the Rejected with Error Payment Request is exported with the correct filename
        And Checks the Tax Documents are in the exported file with 'PaymentRequestRejectedWithErro' name
