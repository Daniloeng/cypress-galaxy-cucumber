Feature: Documents - Of Debts tab - Add action

     This Feature is a Add action automated test in Of Debts Documents
    As a head User

    Background: Navigate to Documents/Of Debts tab
        Given Navigate to Documents 'Of Debts' tab in the 'docsofdebts' url
        When Clicks on Add button

  Scenario: Create document with success
        When Fills the sidebar form for creating porpuses on tab Debts
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the created 'Debts' document item
        
        And Clicks on 'Edit' button in Documents
        And Removes Debt Documents 'TestAutomationSuccessDebts' from the All tab
