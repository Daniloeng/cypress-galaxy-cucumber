Feature: Documents - Cashflow tab - Edit action

    This Feature is a Edit action automated test in Cashflow Documents
    As a head User

    Background: Navigate to Documents Cashflow tab
        Given Navigate to Documents 'Cashflow' tab in the 'docsofcashflow' url
        And Created document by API for Edit porpuses in Cashflow tab
        And Writes the document name on the search bar
        And Selects the searched item from datatable

    Scenario: Edit an item in with success
        And Clicks on Edit button in Documents
        And Edit the document
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the edited 'cashflow' document item

        And Clicks on 'Edit' button in Documents
        And Removes Debt Documents 'docCashflowEdit' from the All tab
        