Feature: Payment Request - Accept on Payment Request - Tab Waiting Accounting Validation

    This Feature is a automated test to Accept actions on Payment Request  - Tab Waiting Accounting Validation

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded        
        And Set '2217' testUserId on Local storage
        And Wait for the Payment Request table loaded
        
        When Clicks on 'Add' button in toolbar
        And Fills in Payment Request data Asset Payment Context 'Broker Fee' Payment Types, '98509' item and 'Lobioncine - Mediação Imobiliária, Lda' supplier
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        # And Payment Request details is open
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


    Scenario: Accept action - Payment Request  - Waiting Accounting Validation
        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Selects 'Accept' Accounting Validation and writes 'Provide Validation Decision' comment on Provide Accounting Validation
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        And The Payment Request should be change the to 'Bank Launch' in Current Status
        And The Tax Document should be change to 'Accounting Validation' in Payment Request screen

        When Clicks on Activity in Payment Request to view the activities
        Then The status change displays the message 'Payment Request Status changed from Accounting Validation to Bank Launch' on the Activity screen

