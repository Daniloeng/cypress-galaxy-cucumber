Feature: Payment Request - Action Bar on Payment Request screen

    This Feature is a automated test to Action bar on Payment Request screen

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'All' table is loaded
        And Set '2217' testUserId on Local storage
        And Wait for the Payment Request table loaded
        When Clicks on 'Add' button in toolbar


    Scenario: Adds Payment Request with complete data in Payment Request screen
        And Fills in all Payment Request data with Document
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
    

    Scenario Outline: Adds Payment Request '<context>' Payment Context and '<type>' Payment Types and Accept decision on the Payment Request screen
        And Fills in Payment Request data '<context>' Payment Context and '<type>' Payment Types without select Document
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

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

        When Clicks on 'Add' button in toolbar
        And Add one 'Proof' Tax Documents on Payment Request
        And Clicks on 'Save' button
        Then The 'Add Tax Document' sidebar should be closed

        Examples:
            | context             | type             |
            | Legal Case Instance | Certidão - Legal |
            | Asset               | Valuations       |


    Scenario Outline: Adds Payment Request '<context>' Payment Context and '<type>' Payment Types and Delegate decision on the Payment Request screen
        And Fills in Payment Request data '<context>' Payment Context and '<type>' Payment Types without select Document
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

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
        And Delegate to 'testhead3' user on Provide Decision
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed

        Examples:
            | context             | type             |
            | Legal Case Instance | Certidão - Legal |
            | Asset               | Valuation        |
        

    Scenario Outline: Adds Payment Request and Reject decision and return to '<status>' status on the Payment Request screen
        And Fills in Payment Request data 'Legal Case Instance' Payment Context and 'Certidão - Legal' Payment Types without select Document
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

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
        And Selects 'Reject' decision and '<status>' status on Provide Decision
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed

         Examples:
            | status                |
            # | New                   |
            # | Validation            |
            # | Bank Launch           |
            # | Canceled              |
            | Accounting Validation |


    Scenario Outline: Provide Accounting Validation to '<status>' status on the Payment Request screen
        And Fills in Payment Request data 'Legal Case Instance' Payment Context and 'Certidão - Legal' Payment Types without select Document
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

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
        And Selects 'Reject' decision and 'Accounting Validation' status on Provide Decision
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed

        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Selects '<status>' Accounting Validation and writes 'Provide Validation Decision' comment on Provide Accounting Validation
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed

         Examples:
            | status             |
            | Accept and Account |
            | Accept             |
            | Archive            |


    Scenario Outline: Reject Payment Request decision and return to '<status>' status on the Payment Request screen
        And Fills in Payment Request data 'Legal Case Instance' Payment Context and 'Certidão - Legal' Payment Types without select Document
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

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
        And Selects 'Reject' decision and 'Accounting Validation' status on Provide Decision
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        
        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Selects 'Reject' Accounting Validation selects '<status>' status and writes 'Validation Decision Rejected' comment on Provide Accounting Validation
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed

         Examples:
            | status                |
            | New                   |
            | Validation            |
