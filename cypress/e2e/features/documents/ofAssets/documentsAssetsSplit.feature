Feature: Documents - Assets tab - Split action

     This Feature is a Split action automated test in Assets Documents
     As a head User

    Background: Navigate to Documents Assets tab
        Given Navigate to Documents 'Assets' tab in the 'docsofassets' url
        And Created document by API for Split porpuses in Assets tab
        And Writes the document name on the search bar
        And Selects the searched item from datatable


    Scenario: Split an item without the mandatory fields
        And Clicks on Edit button in Documents
        And Edit the document for splitting porpuses
        And Clicks on Split button
        And Edit the item with mandatory fields empty in splitting screen
        And Clicks on Save button on Documents sidebar
        Then The document saving should prompt an error message for Split


    Scenario: Cancelation of splitting item
        And Clicks on Edit button in Documents
        And Edit the document for splitting porpuses
        And Clicks on Split button
        And Clicks on Cancel button
        Then The document should be cancel and sidebar closes


    Scenario: Split an item with success
        And Clicks on Edit button in Documents
        And Edit the document for splitting porpuses
        And Clicks on Split button
        And Edit the item with mandatory fields filled in splitting sidebar 'Assets'
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the splitted item 'Assets'


    Scenario: Split an item with the original quantity of pages
        And Clicks on Split button
        And Clicks on Save button on Documents sidebar
        Then The sidebar should show the error message for Split
