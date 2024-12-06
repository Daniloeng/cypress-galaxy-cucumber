Feature: Payment Request - Archive on Payment Request - Tab Rejected/With Errors

    This Feature is a automated test to Archive on Payment Request - Tab Rejected/With Errors

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded
        And Set '2217' testUserId on Local storage
        And Wait for the Payment Request table loaded


        When Clicks on 'Add' button in toolbar
        And Fills in Payment Request data Legal Case Instance Payment Context Custas de Parte Payment Types
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status
        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document 'CustasParte' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
        And Clicks on Save button on Documents sidebar
        Then The document is displayed in the list of Tax Documents

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

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects Reject decision on Provide Decision in Payment Accounting
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        And The Payment Request should be change the to 'Reject' in Current Status

        And Selects the Payment Request Id
        When Clicks on 'Payment Request' breadcrumb route
        
        When Clicks on the 'Rejected/With Errors' tab in showmore on the Payment Request screen
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'id' column

        And Selects the 'Equals to' option in the dropdown-menu
        And Filters by Payment Id in table screen
        And Selects the first from the list


    Scenario: Archive action - Payment Request  - Waiting Accounting
        When Clicks on 'Provide Decision' button in toolbar
        And Selects 'Archive' decision on Provide Decision in Payment Accounting
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed

        When Clicks on the 'All' tab in showmore on the Payment Request screen
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'id' column

        And Selects the 'Equals to' option in the dropdown-menu
        And Filters by Payment Id in table screen
        Then Checks that the status date is current and the status is 'Archived'


    # Scenario: Reject action - Payment Request  - Waiting Accounting
    #     When Clicks on 'Provide Decision' button in toolbar
    #     And Selects Reject decision on Provide Decision in Payment Accounting
    #     And Clicks on 'Save' button
    #     Then The 'Provide Decision' sidebar should be closed

    #     When Clicks on the 'All' tab in showmore on the Payment Request screen
    #     And Clicks on Global Filter button of the table
    #     And Clicks on the filter option in the 'id' column

    #     And Selects the 'Equals to' option in the dropdown-menu
    #     And Filters by Payment Id in table screen
    #     Then Checks that the status date is current and the status is 'Rejected'
        
    #     And Navigate to the specific Payment Request Queue
    #     And Aligns the table descending by the 'Status Date' column
    #     And Checks if the specified queue with the 'Payment Accounting test' comment has been created
        