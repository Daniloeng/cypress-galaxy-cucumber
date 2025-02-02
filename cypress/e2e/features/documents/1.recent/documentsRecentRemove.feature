Feature: Documents - Recent - Remove

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents/Recent tab
        Given Navigate to Documents-Recent tab

    Scenario: Remove an document with success
        When Created document by API for tab 'Recent'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on remove button
        And Clicks on Yes button in sidebar
        Then The item should be removed from datatable