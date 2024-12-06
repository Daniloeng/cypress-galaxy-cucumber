Feature: Tax Documents - Approve in Waiting Accounting tab on Tax Documents screen

    This Feature is a automated test to Approve in Waiting Accounting tab on Tax Documents screen

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded
        And Set '2217' testUserId on Local storage
        And Wait for the Payment Request table loaded

        When Clicks on 'Add' button in toolbar


    Scenario: Provide Decision - Approve
        And Fills in Payment Request data Asset Payment Context 'Broker Fee' Payment Types, '98509' item and 'Lobioncine - Mediação Imobiliária, Lda' supplier
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

        When Clicks on the 'Ask Validation' button under Current Status on the Payment Request screen
        And Types 'Send for validation' comments for Validation
        And Clicks on 'Save' button
        Then The Payment Request should be change the to 'Validation' in Current Status
        
        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document 'Property Management Document' of type 'Factura' and fills out the form in the sidebar for Tax Detail to add it to the Payment Request
        And Clicks on Save button on Documents sidebar
        Then The document is displayed in the list of Tax Documents

        And Selects the Payment Request Id
        And Clicks and Edits the first Tax Details associated with Payment Request with 'Com sucesso' reason on Document screen
        And Clicks on the 'Relations' tab
        And Opens Payment Request Relations

        And Set '2197' testUserId on Local storage
        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Types 'Is Valid for next step' in the comment field and sets the field to 'true' is Valid in the Provide Validation
        And Clicks on 'Save' button
        Then The 'Provide Validation' sidebar should be closed
        And The Payment Request should be change the to 'Accounting Validation' in Current Status

        And Navigate to the 'taxdocuments/tobecataloged' screen
        And Clicks on the 'Waiting Accounting' tab

        And Clicks on Global Sync button of the table
        And Clicks on Global Filter button of the table
        And Aligns the table descending by the 'Document Date' column
        When Filters by Payment Request Id in Waiting Accounting tab on Tax Document table screen
        And Selects the first from the list
        And Clicks on 'Provide Decision' button in toolbar

        And Selects 'Aprove' Provide Decision and writes 'Provide Decision' comments on Provide Decision
        And Clicks on 'Save' button

        Then The 'Provide Decision' sidebar should be closed
        And Navigate to the relation Payment Request
        And The Payment Request should be change the to 'Bank Launch' in Current Status
        And The Tax Document should be change to 'Accounting in Progress' in Payment Request screen
        
        And Selects the Tax Document with the '1234-automation' Name on Payment Request screen
        And Clicks on the 'Accounting' tab
        And Wait for the accounting report and documents to be presented

        When Clicks on the 'Documents' tab
        And Change to Table option in the filters table view
        And Clicks on Global Sync button of the table
        Then Checks that date the document is currently
        