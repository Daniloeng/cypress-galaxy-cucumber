Feature: Tax Documents - Manual ACC - Provide Decision in Rejected/With Errors tab on Tax Documents screen

    This Feature is a automated test to  Manual ACC - Provide Decision in Rejected/With Errors tab on Tax Documents screen

    Background: Navigate to the Tax Documents screen
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
        

    Scenario: Manual ACC - Provide Decision action - Tax Documents  - Tab Rejected/With Errors
        # And Clicks on the filter option in the 'beneficiaryName' column
        # And Selects the 'Contains' option in the dropdown-menu
        # And Writes 'HEFESTO' to be searched in the 'beneficiaryName' Name column filter
        # Then The datatable should show the string items according to the filter 'Contains' option and 'HEFESTO' data in the 'beneficiaryName' column applied

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
        # And Clicks on the filter option in the 'beneficiaryName' column
        # And Selects the 'Contains' option in the dropdown-menu
        # And Writes 'HEFESTO' to be searched in the 'beneficiaryName' Name column filter
        # Then The datatable should show the string items according to the filter 'Contains' option and 'HEFESTO' data in the 'beneficiaryName' column applied

        And Selects the checkbox of the Document edited on Tax Document screen
        Then Clicks on 'Provide Decision' button in toolbar
        And Selects 'Manual ACC' Provide Decision and writes 'Provide Decision Manual ACC' comments on Provide Decision
        And Clicks on 'Save' button        
        
        Then The 'Provide Decision' sidebar should be closed
        And Clicks on the 'Manual Accounting' tab
        And Waits the manual accounting tax documents default are shown
        # And Clicks on Global Sync button of the table
        And Clicks on Global Filter button of the table
        And Aligns the table descending by the 'Document Date' column
        And Filters by Payment Request Id in Manual Accounting tab on Tax Document table screen
        And Selects the first from the list
        And Clicks on 'Archive' button in toolbar
        And Writes 'Archived after Manual ACC' comments on Provide Decision
        And Clicks on 'Save' button

        And Clicks on the 'Archived' tab
        And Waits the archived tax documents default are shown
        # And Clicks on Global Sync button of the table
        And Clicks on Global Filter button of the table
        And Aligns the table descending by the 'Document Date' column
        And Filters by Payment Request Id in Archived tab on Tax Document table screen
        Then The tax document is in the table of Tax Documents presented
        
        # And Navigate to the relation Payment Request
        # And The Payment Request should be change the to 'Accounting in progress' in Current Status
        # And The Tax Document should be change to 'Archived' in Payment Request screen
