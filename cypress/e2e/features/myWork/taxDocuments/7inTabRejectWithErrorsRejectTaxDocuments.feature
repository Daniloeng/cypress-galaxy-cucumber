Feature: Tax Documents - Reject - Provide Decision in Rejected/With Errors tab on Tax Documents screen

    This Feature is a automated test to Reject - Provide Decision in Rejected/With Errors tab on Tax Documents screen

    Background: Navigate to the Tax Documents screen
        Given As a user logged in 'taxdocuments/tobecataloged' screen
        And 'To Be Cataloged' table is loaded
        And Set '2217' testUserId on Local storage
        And Intercept the all tax documents are shown
        And Wait for the Payment Request table loaded
        And Clicks on the 'Rejected/With Errors' tab
        When Clicks on Global Filter button of the table
        

    Scenario: Reject - Provide Decision action - Tax Documents  - Tab Rejected/With Errors
        And Filters by 'Error' in the Status field of the Tax Documents table screen
        And Aligns the table descending by the 'Document Date' column
        And Filters by 'Provisão - Honorários' in the Transaction Type field of the Tax Documents table screen
        Then Only Tax Documents with this 'Provisão - Honorários' transaction type should displayed in the list

        And Selects the '2' checkbox from the Tax Document list
        Then Clicks on 'Provide Decision' button in toolbar
        And Selects 'Reject' Provide Decision selects 'NOK - Context' status and writes 'Provide Decision Rejected' comment on Provide Decision
        
        Then The 'Provide Decision' sidebar should be closed
        And Navigate to the relation Payment Request
        And The Payment Request should be change the to 'Archived' in Current Status
        And The Tax Document should be change to 'Rejected' in Payment Request screen

        And Navigate to the specific Tax Document Queue
        And Aligns the table descending by the 'Status Date' column
        And Checks if the specified queue has been created
    