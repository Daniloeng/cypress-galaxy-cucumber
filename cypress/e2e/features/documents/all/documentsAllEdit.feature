Feature: Documents - ALL - Edit

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents All tab
        Given Navigate to Documents 'All' tab in the '' url


    Scenario: Edit an item without the mandatory fields filled
        When Created document by API for Edit porpuses in tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Edit button in Documents
        And Leaves mandatory fields empty
        And Clicks on Save button on Documents sidebar
        Then The document saving should prompt an error message for the missing fields


    Scenario: Edit an item  without a file
        When Created document by API for Edit porpuses in tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Edit button in Documents
        And Edit the document
        And Click on button to delete the file
        And Clicks on Save button on Documents sidebar
        Then The document saving should prompt an error message for Edit


    Scenario: Cancel the edition of an item
        When Created document by API for Edit porpuses in tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Edit button in Documents
        And Clicks on Cancel button
        Then The document should be cancel and sidebar closes


    Scenario: Edit an item in with success
        When Created document by API for Edit porpuses in tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Edit button in Documents
        And Edit the document
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the edited item