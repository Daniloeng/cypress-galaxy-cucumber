Feature: Documents - ALL - Split

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents All tab
        Given Navigate to Documents 'All' tab in the '' url


    Scenario: Split an item without the mandatory fields
        When Created document by API for Split porpuses in tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Edit button in Documents
        And Edit the document for splitting porpuses
        And Clicks on Split button
        And Edit the item with mandatory fields empty in splitting screen
        And Clicks on Save button on Documents sidebar
        Then The document saving should prompt an error message for Split


    Scenario: Cancelation of splitting item
        When Created document by API for Split porpuses in tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Edit button in Documents
        And Edit the document for splitting porpuses
        And Clicks on Split button
        And Clicks on Cancel button
        Then The document should be cancel and sidebar closes


    Scenario: Split an item with success
        When Created document by API for Split porpuses in tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Edit button in Documents
        And Edit the document for splitting porpuses
        And Clicks on Split button
        And Edit the item with mandatory fields filled in splitting sidebar 'All'
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the splitted item 'All'


    Scenario: Split an item with the original quantity of pages
        When Created document by API for Split porpuses in tab 'All'
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Split button
        And Clicks on Save button on Documents sidebar
        Then The sidebar should show the error message for Split


