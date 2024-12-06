Feature: Payment Request - Archive on Payment Request  - Tab Waiting Accounting

    This Feature is a automated test to Archive on Payment Request  - Tab Waiting Accounting

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded        
        And Set '2217' testUserId on Local storage
        And Wait for the Payment Request table loaded

        When Clicks on 'Add' button in toolbar
        And Fills in Payment Request data Asset Payment Context 'Valuations' Payment Types, '80057' item and 'A2v, Lda' supplier
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document 'PropertyTransfer' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
        And Clicks on Save button on Documents sidebar
        Then The New document sidebar should be closed

        And Selects the Payment Request Id

        When Clicks on the 'Ask Validation' button under Current Status on the Payment Request screen
        And Types 'Send for validation' comments for Validation
        And Clicks on 'Save' button
        Then The Payment Request should be change the to 'Validation' in Current Status

        And Set '2197' testUserId on Local storage

        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Types 'Is Valid for next step' in the comment field and sets the field to 'true' is Valid in the Provide Validation
        And Clicks on 'Save' button
        Then The 'Provide Validation' sidebar should be closed
        And The Payment Request should be change the to 'Bank Launch' in Current Status

        When Clicks on the 'Submit To Bank' button under Current Status on the Payment Request screen
        And Selects 'Manual' mode and Submit to Bank
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Pay Decision' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects 'Accept' decision on Provide Decision
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Payment Proof' in Current Status

        When Clicks on the 'Submit' button under Current Status on the Payment Request screen
        And Confirm 'Submit' Payment Request
        Then The 'Accounting' sidebar should be closed
        And The Payment Request should be change the to 'Payment Accounting' in Current Status

        And Selects the Tax Document with the 'Comprovativo de Pagamento' Name on Payment Request screen
        And Clicks on the 'Accounting' tab
        And Wait for the accounting report to be presented
        
        And Clicks on the 'Relations' tab
        And Opens Payment Request Relations
        
        And Intercepts Accounting report
        And Clicks on the 'Accounting' tab
        And Waits for the Accounting tab report to be displayed on the Payment Request screen

        And Clicks on the 'Overview' tab
        Then Compares the Remaining values


    Scenario: Archive action - Payment Request  - Waiting Accounting
        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects 'Archive' decision on Provide Decision in Payment Accounting
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        And The Payment Request should be change the to 'Archived' in Current Status

        When Clicks on Activity in Payment Request to view the activities
        Then The status change displays the message 'Payment Request Status changed from Payment Accounting to Archived' on the Activity screen
        