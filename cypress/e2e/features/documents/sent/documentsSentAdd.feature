Feature: Documents - Sent - Add

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents/Sent tab
        Given Navigate to Documents-Sent tab


    Scenario: Create document with success
        When Clicks on Add button
        And Fills the sidebar form for creating porpuses on tab Sent
        And Clicks on Save button on Documents sidebar
        Then The document should be created in 'Sent' tab
