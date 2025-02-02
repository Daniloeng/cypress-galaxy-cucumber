Feature: Documents - Received - Split

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents/Received tab
        Given Navigate to Documents-Received tab

    Scenario: Split an item with success
        When Created document by API for Split porpuses in Received tab
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Edit button in Documents
        And Edit the document for splitting porpuses
        And Clicks on Split button
        And Edit the item with mandatory fields filled in splitting sidebar 'Received'
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the splitted item 'Received'
