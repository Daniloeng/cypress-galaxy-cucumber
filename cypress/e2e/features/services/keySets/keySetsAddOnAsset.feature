Feature: Services - Add - Key-Sets on Asset screen

    This Feature is a automated test to CRUD and VIEWS Operations in Key Sets
    As a head User

    Background: Navigate to Key Sets tab in Services
        Given As a head logged in
        And Visit a specific Asset '336140' Key-sets page 

    Scenario: Add a Key-Set on Asset
        When Clicks on 'Add' button in toolbar
        And Fills the sidebar form for creating porpuses on tab Key Sets in Asset page
        And Clicks on 'Save' button
        Then The Key-Set should be created