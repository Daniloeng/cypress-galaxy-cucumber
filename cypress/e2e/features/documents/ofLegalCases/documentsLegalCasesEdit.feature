Feature: Documents - Legal Cases tab - Edit action

    This Feature is a Edit action automated test in Legal Cases Documents
    As a head User

    Background: Navigate to Documents Legal Cases tab
        Given Navigate to Documents 'Legal Cases' tab in the 'docsoflegalcases' url
        And Created document by API for Edit porpuses in Legal Cases tab
        And Writes the document name on the search bar
        And Selects the searched item from datatable

    Scenario: Edit an item in with success
        And Clicks on Edit button in Documents
        And Edit the document
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the edited 'Legal Cases' document item

        And Clicks on 'Edit' button in Documents
        And Removes Debt Documents 'docLegalCaseEdit' from the All tab
        