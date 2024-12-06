Feature: Tax Documents - Export in Rejected/With Errors tab on Tax Documents screen

    This Feature is a automated test to Export in Rejected/With Errors tab on Tax Documents screen

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'taxdocuments/tobecataloged' screen
        And 'To Be Cataloged' table is loaded
        And Set '2217' testUserId on Local storage
        And Intercept the all tax documents are shown
        And Clicks on the 'Rejected/With Errors' tab
        When Clicks on Global Filter button of the table
        And Filters by 'Error' in the Status field of the Tax Documents table screen
        And Aligns the table descending by the 'Document Date' column
        And Filters by 'Provisão - Honorários' in the Transaction Type field of the Tax Documents table screen
        Then Only Tax Documents with this 'Provisão - Honorários' transaction type should displayed in the list

    Scenario: Export action - Tax Documents  - Tab Rejected/With Errors
        When Selects the '2' checkbox from the Tax Document list
        And Edits the Tax Document with the new Document on Tax Document screen
        And Clicks on Save button on Documents sidebar

        And Navigate to the 'taxdocuments/rejectwitherrors' screen
        And Waits the rejected errors tax documents default are shown
        When Clicks on Global Filter button of the table

        
        And Filters by Payment Request Id in Rejected With Errors tab on Tax Document table screen
        And Selects the first from the list
         And Selects All columns option in dropdown columns
        And 'Unselects' the 'Securitization' column in Columns menu
        Then Check if the 'Securitization' column was removed from view
        And 'Unselects' the 'Validated by' column in Columns menu
        Then Check if the 'Validated by' column was removed from view
        When Reads and selects all the missing tax documents from the table
        And Clicks on 'Export' button in toolbar
        Then Checks the Rejected With Errors Tax Documents is exported with the correct filename
        And Checks the Tax Documents are in the exported file with 'TaxDocumentsRejectedWithErrors' name
