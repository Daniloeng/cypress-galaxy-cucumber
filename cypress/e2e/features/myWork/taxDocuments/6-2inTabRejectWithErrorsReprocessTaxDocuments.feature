Feature: Tax Documents - Reprocess in Rejected/With Errors tab on Tax Documents screen

    This Feature is a automated test to Reprocess in Rejected/With Errors tab on Tax Documents screen

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'taxdocuments/tobecataloged' screen
        And 'To Be Cataloged' table is loaded
        And Set '2217' testUserId on Local storage
        And Intercept the all tax documents are shown
        And Wait for the Payment Request table loaded
        And Clicks on the 'Rejected/With Errors' tab
        When Clicks on Global Filter button of the table


    Scenario: Reprocess action - Tax Documents  - Tab Rejected/With Errors
        And Filters by 'Error' in the Status field of the Tax Documents table screen
        And Aligns the table descending by the 'Document Date' column
        And Filters by 'Provisão - Honorários' in the Transaction Type field of the Tax Documents table screen
        Then Only Tax Documents with this 'Provisão - Honorários' transaction type should displayed in the list
        
        And Selects the '1' checkbox from the Tax Document list
        And Edits the Tax Document with the new Document on Tax Document screen
        And Clicks on Save button on Documents sidebar

        And Navigate to the 'taxdocuments/rejectwitherrors' screen
        And Waits the rejected errors tax documents default are shown
        When Clicks on Global Filter button of the table
        And Filters by 'Error' in the Status field of the Tax Documents table screen
        And Aligns the table descending by the 'Document Date' column
        And Filters by 'Provisão - Honorários' in the Transaction Type field of the Tax Documents table screen
        Then Only Tax Documents with this 'Provisão - Honorários' transaction type should displayed in the list
        And Filters by Payment Request Id in Rejected With Errors tab on Tax Document table screen
        And Selects the checkbox of the Document edited on Tax Document screen

        And Clicks on 'Reprocess' button in toolbar
        Then Confirms 'Reprocess' on sidebar opened
        And The 'Reprocess' sidebar should be closed

        And Navigate to the 'taxdocuments/waitingaccounting' screen
        And Clicks on Global Sync button of the table
        And Clicks on Global Filter button of the table
        And Aligns the table descending by the 'Document Date' column
        And Filters by Payment Request Id in Waiting Accounting tab on Tax Document table screen
        
        And Selects the Tax Document with the reprocessed on Tax Document screen
        And Clicks on the 'Accounting' tab
        And Wait for the accounting report and documents to be presented

        When Clicks on the 'Documents' tab
        And Change to Table option in the filters table view
        And Clicks on Global Sync button of the table
        Then Checks that date the document is currently
