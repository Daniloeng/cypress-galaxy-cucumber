Feature: Documents - Customers tab - Print Stamp action

    This Feature is a Print stamp action automated test in Unidentified Documents
    As a head User

    Background: Navigate to Documents Customers tab
        Given Navigate to Documents 'Of Customers' tab in the 'docsofcustomers' url

    Scenario: Print Stamp an item without mandatory fields
        When Clicks on Print Stamp button
        And Clicks on Save button on Documents sidebar
        Then The sidebar should show the error message for Print Stamp

    Scenario: Print Stamp an item with number of stamps 0
        When Clicks on Print Stamp button
        And Fills the sidebar form with number of stamps '0'
        And Clicks on Save button on Documents sidebar
        Then The document saving should prompt an error message for Print Stamp with the number of stamps 0

    Scenario: Print Stamp an item only selecting the Selected Document field
        When Clicks on Print Stamp button
        And Select Selected Documents filled in sidebar
        Then The Number of Stamps Field should be disabled

    Scenario: Print Stamp an item with New Document successs
        When Clicks on Print Stamp button
        And Fills the sidebar form with number of stamps '2'
        And Clicks on Save button on Documents sidebar
        Then The Print Stamp should be saved

    Scenario: Cancelation of a Print Stamp item using No button
        When Selects first Document from datatable
        And Clicks on Print Stamp button
        And Clicks on No button in sidebar
        Then The sidebar should be closed