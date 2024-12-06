Feature: Documents - Sent - Edit

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents/Sent tab
        Given Navigate to Documents-Sent tab

    Scenario: Edit an item in with success
        When Created document by API for Edit porpuses in Sent tab
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Edit button in Documents
        And Edit the document
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the edited item