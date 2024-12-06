Feature: Payment Request - Reprocess Payment Request - Tab Rejected/With Errors

    This Feature is a automated test to Reprocess Payment Request - Tab Rejected/With Errors

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded        
        And Set '2217' testUserId on Local storage
        When Clicks on the 'Rejected/With Errors' tab in showmore on the Payment Request screen


    Scenario: Reprocess action - Payment Request  - Tab Rejected/With Errors
        And Aligns the table descending by the 'Payment Id' column
        When Selects first Payment Request Id from datatable
        # When Selects the 1st Payment Request from the list
        And Clicks on 'Reprocess' button in toolbar
        Then Confirms 'Reprocess' on sidebar opened
        And The 'Reprocess' sidebar should be closed
