Feature: CRUD - Documents - Received - Add

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents/Received tab
        Given Navigate to Documents-Received tab


    Scenario: Create document with success
        When Clicks on Add button
        And Fills the sidebar form for creating porpuses on tab Received
        And Clicks on Save button on Documents sidebar
        Then The document should be created in 'Received' tab
