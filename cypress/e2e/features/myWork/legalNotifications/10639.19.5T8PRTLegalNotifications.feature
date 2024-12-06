Feature: Legal Notifications - 10639/19.5T8PRT Legal Case Instance

    This Feature is a automated test 10639/19.5T8PRT Legal Case Instance

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'In Draft' table is loaded
        And Set '2217' testUserId on Local storage
        And Wait for the Payment Request table loaded

        When Clicks on 'Add' button in toolbar


    Scenario: 10639/19.5T8PRT - Legal Notification
        And Fills in Payment Request data 10639.19.5T8PRT Legal Case Instance
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Adds the 'Notificação' document of type 'Invoice' and links the Related Entity '10639/19.5T8PRT' Legal Case Instance and 'Hefesto(Atlas II)' Porfolio to the Payment Request
        And Clicks on Save button on Documents sidebar
        Then The document is displayed in the list of Tax Documents

        When Clicks on the 'Ask Validation' button under Current Status on the Payment Request screen
        And Types 'Send for validation' comments for Validation
        And Clicks on 'Save' button
        Then The Payment Request should be change the to 'Validation' in Current Status
        
        And Selects the Payment Request Id
        And Clicks and Edits the Legal Details '10639/19.5T8PRT' associated with Payment Request
        And Clicks on the 'Relations' tab
        And Opens '10639/19.5T8PRT - 500585' Legal Case Instance Relations

        And Clicks on the 'Legal Notifications' tab
        And Checks if the Legal Notification has been created

       And Clicks on the 'Relations' tab
        And Opens Payment Request Relations

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
