Feature: Documents - Legal Cases tab - Split action

     This Feature is a Split action automated test in Legal Cases Documents
     As a head User

    Background: Navigate to Documents Legal Cases tab
        Given Navigate to Documents 'Legal Cases' tab in the 'docsoflegalcases' url
        And Created document by API for Split porpuses in Legal Cases tab
        And Writes the document name on the search bar
        And Selects the searched item from datatable

    Scenario: Split an item with success
        And Clicks on Edit button in Documents
        And Edit the document for splitting porpuses
        And Clicks on Split button
        And Edit the item with mandatory fields filled in splitting sidebar 'Legal Cases'
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the splitted item 'Legal Cases'
