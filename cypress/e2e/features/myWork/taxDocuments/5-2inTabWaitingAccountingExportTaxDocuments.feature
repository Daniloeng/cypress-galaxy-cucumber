Feature: Tax Documents - Export in Waiting Accounting tab on Tax Documents screen

    This Feature is a automated test to Export in Waiting Accounting tab on Tax Documents screen

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'taxdocuments/tobecataloged' screen
        And 'To Be Cataloged' table is loaded
        And Set '2217' testUserId on Local storage
        And Intercept the all tax documents are shown
        And Wait for the Payment Request table loaded
        When Clicks on the 'Waiting Accounting' tab
        And Clicks on Global Filter button of the table

    Scenario: Export action - Tax Documents  - Tab Waiting Accounting
        And Aligns the table descending by the 'Document Date' column
        When Selects the '4' checkbox from the Tax Document list
        And Filters by Payment Request Id in Waiting Accounting tab on Tax Document table screen
        And Selects the first from the list
        And Selects All columns option in dropdown columns
        And 'Unselects' the 'Securitization' column in Columns menu
        Then Check if the 'Securitization' column was removed from view
        And 'Unselects' the 'Portfolio Group' column in Columns menu
        Then Check if the 'Portfolio Group' column was removed from view
        And 'Unselects' the 'Validated by' column in Columns menu
        Then Check if the 'Validated by' column was removed from view
        And 'Unselects' the ' Validation Date' column in Columns menu
        Then Check if the ' Validation Date' column was removed from view
        And 'Unselects' the 'Payment Request Status' column in Columns menu
        Then Check if the 'Payment Request Status' column was removed from view
        When Reads and selects all the missing tax documents from the table
        And Clicks on 'Export' button in toolbar
        Then Checks the Waiting Accounting Tax Documents is exported with the correct filename
        And Checks the Tax Documents are in the exported file with 'TaxDocumentsWaitingAccounting' name
