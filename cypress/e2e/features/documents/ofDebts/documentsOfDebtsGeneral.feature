Feature: Documents - Of Debts tab - Preview action

     This Feature is a General action automated test in Of Debts Documents
    As a head User

    Background: Navigate to Documents Of Debts tab
        Given Navigate to Documents 'Of Debts' tab in the 'docsofdebts' url


    Scenario: Preview the first Document the 'Of Debts' list
        When Selects the first item from the table
        And Clicks on 'Preview' button in Documents
        Then The sidebar should be opened

    Scenario: Preview the second Document the 'Of Debts' list
        When Selects the second item from the table
        And Clicks on 'Preview' button in Documents
        Then The sidebar should be opened

    Scenario: Full Preview the first Document the 'Of Debts' list
        When Selects the '1'º item in the table for full view
        Then The full document view should open

    Scenario: Full Preview the second Document the 'Of Debts' list
        When Selects the '2'º item in the table for full view
        Then The full document view should open

    Scenario: Select two Documents on different pages from the 'Of Debts' list
        When Selects the first item from the table
        And Selects the '2'º page
        And Selects the second item from the table
        Then The message '2 records selected' must be displayed

    Scenario: Removes selection by X button after Select two Documents on different pages in the 'Of Debts' list
        When Selects the first item from the table
        And Selects the '2'º page
        And Selects the second item from the table
        Then The message '2 records selected' must be displayed
        
        When Clicks the X button to remove filter from selected documents
        Then The message should no longer be displayed        

    Scenario: Removes selection by Remove Filter button after Select two Documents on different pages in the 'Of Debts' list
        When Selects the first item from the table
        And Selects the '2'º page
        And Selects the second item from the table
        Then The message '2 records selected' must be displayed
        
        When Clicks on the '2 records selected' message
        And The list must only present selected documents
        And Clicks on "Remove Filter" button from the selected documents
        Then The list displays documents without filters
