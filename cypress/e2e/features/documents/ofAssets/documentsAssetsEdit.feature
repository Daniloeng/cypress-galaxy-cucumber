Feature: Documents - Assets tab - Edit action

    This Feature is a Edit action automated test in Assets Documents
    As a head User

    Background: Navigate to Documents Assets tab
        Given Navigate to Documents 'Assets' tab in the 'docsofassets' url
        And Created document by API for Edit porpuses in Assets tab
        And Writes the document name on the search bar
        And Selects the searched item from datatable

    Scenario: Edit an item in with success
        And Clicks on Edit button in Documents
        And Edit the document
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the edited 'Assets' document item

        And Clicks on 'Edit' button in Documents
        And Removes Debt Documents 'docAssetEdit' from the All tab
        