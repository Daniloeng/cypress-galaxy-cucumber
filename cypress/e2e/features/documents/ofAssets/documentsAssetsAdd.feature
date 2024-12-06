Feature: Documents - Assets tab - Add action

     This Feature is a Add action automated test in Assets Documents
    As a head User

    Background: Navigate to Documents/Assets tab
        Given Navigate to Documents 'Assets' tab in the 'docsofassets' url
        When Clicks on Add button

    Scenario: Create document with success
        When Fills the sidebar form for creating porpuses on tab Assets
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the created 'Asset' document item
        
        And Clicks on 'Edit' button in Documents
        And Removes Debt Documents 'TestAutomationSuccessAsset' from the All tab
