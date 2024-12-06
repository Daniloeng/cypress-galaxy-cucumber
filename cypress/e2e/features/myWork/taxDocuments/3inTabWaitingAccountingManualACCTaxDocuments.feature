Feature: Tax Documents - Manual ACC in Waiting Accounting tab on Tax Documents screen

    This Feature is a automated test to Manual ACC in Waiting Accounting tab on Tax Documents screen

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'taxdocuments/tobecataloged' screen
        And 'To Be Cataloged' table is loaded
        And Set '2217' testUserId on Local storage
        And Intercept the all tax documents are shown
        And Clicks on the 'Waiting Accounting' tab
        When Clicks on Global Filter button of the table
        And Aligns the table descending by the 'Document Date' column
        And Filters by 'Provisão - Honorários' in the Transaction Type field of the Tax Documents table screen
        Then Only Tax Documents with this 'Provisão - Honorários' transaction type should displayed in the list

    Scenario: Provide Decision - Manual ACC
        And Selects the '3' checkbox from the Tax Document list
        And Edits the Tax Document with the new Document on Tax Document screen
        And Clicks on Save button on Documents sidebar

        And Navigate to the 'taxdocuments/tobecataloged' screen
        And Clicks on the 'Waiting Accounting' tab
        And Clicks on Global Filter button of the table

        And Aligns the table descending by the 'Document Date' column
        And Filters by Payment Request Id in Waiting Accounting tab on Tax Document table screen
        And Selects the first from the list
        And Clicks on 'Provide Decision' button in toolbar

        And Selects 'Manual ACC' Provide Decision and writes 'Provide Decision' comments on Provide Decision
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        
        And Clicks on the 'Manual Accounting' tab
        And Clicks on Global Filter button of the table

        And Aligns the table descending by the 'Document Date' column
        And Filters by Payment Request Id in Waiting Accounting tab on Tax Document table screen
        And Selects the checkbox of the Document edited on Tax Document screen
        And Clicks on 'Archive' button in toolbar
        And Writes 'Archived after Manual ACC' comments on Provide Decision
        And Clicks on 'Save' button

        And Clicks on the 'Archived' tab
        And Clicks on Global Filter button of the table
        And Aligns the table descending by the 'Document Date' column
        And Filters by Payment Request Id in Archived tab on Tax Document table screen
        And Selects the Tax Document changed on Tax Document screen
        
        And Intercepts Accounting report in Tax Documents screen
        And Clicks on the 'Accounting' tab
        And Wait for the accounting report and documents to be presented

        When Clicks on the 'Documents' tab
        And Change to Table option in the filters table view
        And Clicks on Global Sync button of the table
        Then Checks that date the document is currently
