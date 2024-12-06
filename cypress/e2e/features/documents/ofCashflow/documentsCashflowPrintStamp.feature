Feature: Documents - Cashflow tab - Print Stamp action

     This Feature is a Print stamp action automated test in Cashflow Documents
    As a head User

    Background: Navigate to Documents Cashflow tab
        Given Navigate to Documents 'Cashflow' tab in the 'docsofcashflow' url

    Scenario: Print Stamp an item with New Document successs
        When Clicks on Print Stamp button
        And Fills the sidebar form with number of stamps '2'
        And Clicks on Save button on Documents sidebar
        Then The Print Stamp should be saved
