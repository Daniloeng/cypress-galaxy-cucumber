Feature: Documents - ALL - Remove

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents All tab
        Given Navigate to Documents 'All' tab in the '' url


    Scenario: Cancel the removal using No button
        When Created document by API for tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on remove button
        And Clicks on No button in sidebar
        Then The sidebar should be closed
        And Delete the created item


    Scenario: Cancel the removal using X button
        When Created document by API for tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on remove button
        And Clicks on X button in sidebar
        Then The sidebar should be closed
        And Delete the created item


    Scenario: Remove an document with success
        When Created document by API for tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on remove button
        And Clicks on Yes button in sidebar
        Then The item should be removed from datatable



