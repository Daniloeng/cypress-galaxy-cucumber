Feature: Payment Request - Preview Payment Request - Tab Rejected/With Errors

    This Feature is a automated test to Preview Payment Request - Tab Rejected/With Errors

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded        
        And Set '2217' testUserId on Local storage
        When Clicks on the 'Rejected/With Errors' tab in showmore on the Payment Request screen
        And Wait for the Payment Request table loaded


    Scenario: Preview action - Payment Request - Tab Rejected/With Errors
        And Aligns the table descending by the 'Payment Id' column
        When Selects first Payment Request Id from datatable

        When Selects the 1st Payment Request from the list
        And Clicks on 'Preview' button in toolbar
        Then The sidebar should be opened
