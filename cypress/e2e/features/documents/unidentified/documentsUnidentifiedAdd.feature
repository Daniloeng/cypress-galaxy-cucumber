Feature: Documents - Unidentified tab - Add action

    This Feature is a Add action automated test in Unidefined Documents
    As a head User

    Background: Navigate to Documents/Unidentified tab
        Given Navigate to Documents 'Unidentified' tab in the 'docsunidentified' url
        When Clicks on Add button

  Scenario: Create document with success
        When Fills the sidebar form for creating porpuses on tab Cashflow
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the created 'Cashflow' document item   
        And Clicks on 'Edit' button in Documents
        And Removes Debt Documents 'TestAutomationSuccessCashflow' from the All tab
