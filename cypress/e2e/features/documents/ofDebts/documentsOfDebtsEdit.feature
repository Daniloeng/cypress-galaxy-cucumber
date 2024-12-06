Feature: Documents - Of Debts tab - Edit action

    This Feature is a Edit action automated test in Of Debts Documents
    As a head User

    Background: Navigate to Documents Of Debts tab
        Given Navigate to Documents 'Of Debts' tab in the 'docsofdebts' url
        And Created document by API for Edit porpuses in Debts tab
        And Writes the document name on the search bar
        And Selects the searched item from datatable


    Scenario: Edit an item in with success
        And Clicks on Edit button in Documents
        And Edit the document
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the edited 'debt' document item

        And Clicks on 'Edit' button in Documents
        And Removes Debt Documents 'docDebtsEdit' from the All tab
        