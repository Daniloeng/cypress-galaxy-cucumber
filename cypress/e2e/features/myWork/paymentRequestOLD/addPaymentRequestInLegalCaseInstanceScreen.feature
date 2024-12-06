Feature: Payment Request - Add Payment Request on Legal Case Instance screen

    This Feature is a automated test to Add Payment Request on Legal Case Instance screen

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen        
        And Set '2217' testUserId on Local storage
        When Clicks on 'Add' button in toolbar
        And Fills in Payment Request data 'Legal Case Instance' Payment Context, 'Certidão - Legal' Payment Types and '1072/19.0T8MMN' Legal Case Instance without select Document
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status


    Scenario: Add Payment Request and Preview on Legal Case Instance screen
        Given Navigate to the 'legalcases/13/544329' screen
        When Clicks on the 'Legal Notifications' tab
        And Clicks on 'Add Payment Request' button in toolbar
        And Fills in all Payment Request data in LCI screen
        And Selects 'Collateral Documentation_Appraisals_C778' Tax Documents
        And Clicks on 'Save' button
        Then The 'Add Payment Request' sidebar should be closed
        
        When Selects the Payment Request created
        And Clicks on 'Assign' button in toolbar
        And Fill in the role fields with 'Legal Manager' and assigner with 'manager3' so that Legal Notifications is assigned
        And Clicks on 'Save' button
        Then 'Assign' sidebar is closed

        When Selects the Payment Request created
        And Clicks on 'Edit' button in toolbar
        And Relates the entity '1072/19.0T8MMN' to Legal Notifications
        And Clicks on 'Save' button
        Then 'Edit' sidebar is closed

        When Selects the Payment Request created
        And Clicks on 'Preview' button in toolbar
        Then 'Preview' sidebar is open
        And Verifies 'Details' of Legal Notification
