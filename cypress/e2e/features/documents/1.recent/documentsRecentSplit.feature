Feature: Documents - Recent - Split

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents/Recent tab
        Given Navigate to Documents-Recent tab

    Scenario: Split an item with success
        When Created document by API for Split porpuses in Recent tab
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on Edit button in Documents
        And Edit the document for splitting porpuses
        And Clicks on Split button
        And Edit the item with mandatory fields filled in splitting sidebar 'Recent'
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the splitted item 'Recent'
