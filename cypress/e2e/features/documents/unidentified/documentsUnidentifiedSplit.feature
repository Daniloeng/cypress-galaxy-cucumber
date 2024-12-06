Feature: Documents - Unidentified - Split action

     This Feature is a Split action automated test in Unidentified Documents
     As a head User

    Background: Navigate to Documents Unidentified tab
        Given Navigate to Documents 'Unidentified' tab in the 'docsunidentified' url
        And Created document by API for Split porpuses in Cashflow tab
        And Writes the document name on the search bar
        And Selects the searched item from datatable


    Scenario: Split an item with success
        And Clicks on Edit button in Documents
        And Edit the document for splitting porpuses
        And Clicks on Split button
        And Edit the item with mandatory fields filled in splitting sidebar 'Unidentified'
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the splitted item 'Unidentified'
