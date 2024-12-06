Feature: Payment Request - Preview Payment Request  - Tab Waiting Accounting

    This Feature is a automated test to Preview Payment Request  - Tab Waiting Accounting

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded            
        And Set '2217' testUserId on Local storage
        And Wait for the Payment Request table loaded

    Scenario: Preview Payment Request  - Tab Waiting Accounting

        When Clicks on the 'Waiting Accounting' tab in showmore on the Payment Request screen
        And Aligns the table descending by the 'Payment Id' column
        When Selects first Payment Request Id from datatable

        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'id' column

        And Selects the 'Equals to' option in the dropdown-menu
        And Filters by Payment Id in table screen
        And Selects the first from the list

        And Clicks on 'Preview' button in toolbar
        Then The sidebar should be opened
