Feature: Payment Request - Frontpage Regeneration Payment Request - Tab Waiting Accounting

    This Feature is a automated test to Frontpage Regeneration Payment Request  - Tab Waiting Accounting

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded            
        And Set '2217' testUserId on Local storage
        And Wait for the Payment Request table loaded


    Scenario: Frontpage Regeneration Payment Request  - Tab Waiting Accounting
        When Clicks on the 'Waiting Accounting' tab in showmore on the Payment Request screen
        And Aligns the table descending by the 'Payment Id' column
        When Selects first Payment Request Id from datatable

        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'id' column

        And Selects the 'Equals to' option in the dropdown-menu
        And Filters by Payment Id in table screen

        And Selects the first from the list
        And Clicks on 'Frontpage Regeneration' button in toolbar
        Then Confirms 'Frontpage Regeneration' on sidebar opened
        Then The 'Frontpage Regeneration' sidebar should be closed

        When Clicks on the Id searched in the list

        And Intercepts Accounting report
        And Clicks on the 'Accounting' tab
        And Waits for the Accounting tab report to be displayed on the Payment Request screen

        And Clicks on the 'Overview' tab
        Then Compares the Remaining values
        And Clicks on Global Sync button of the table
        