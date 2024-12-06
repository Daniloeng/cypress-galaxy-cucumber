Feature: Documents - Legal Cases tab - Add action

     This Feature is a Add action automated test in Legal Cases Documents
    As a head User

    Background: Navigate to Documents/Legal Cases tab
        Given Navigate to Documents 'Legal Cases' tab in the 'docsoflegalcases' url
        When Clicks on Add button

    Scenario: Create document with success
        When Fills the sidebar form for creating porpuses on tab Legal Cases
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the created 'LegalCase' document item
        
        And Clicks on 'Edit' button in Documents
        And Removes Debt Documents 'TestAutomationSuccessLegalCase' from the All tab
