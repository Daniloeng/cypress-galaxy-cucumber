Feature: Documents - Recent - Print Stamp

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents/Recent tab
        Given Navigate to Documents-Recent tab

    Scenario: Print Stamp an item with New Document successs
        When Clicks on Print Stamp button
        And Fills the sidebar form with number of stamps '2'
        And Clicks on Save button on Documents sidebar
        Then The Print Stamp should be saved
