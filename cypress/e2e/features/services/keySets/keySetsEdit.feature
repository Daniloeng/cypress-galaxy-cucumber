Feature: Services - Remove - Key-Sets

    This Feature is a automated test to CRUD and VIEWS Operations in Key Sets
    As a head User

    Background: Navigate to Key Sets tab in Services
        Given As a user logged in 'keysets' screen 

    Scenario: Edit a Key-Set with success
        When Selects the first item from the table
        And Clicks on 'Edit' button in toolbar
        And Fills the sidebar form for editing porpuses on tab Key Sets
        And Clicks on 'Save' button
        Then The Key-Set should be edited
        
    Scenario: Cancel Edit action of a Key-Set
        When Selects the first item from the table
        And Clicks on 'Edit' button in toolbar
        And Clicks on Cancel button
        Then The sidebar should be closed