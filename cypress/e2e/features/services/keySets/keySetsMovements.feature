Feature: Services - Movements - Key-Sets

    This Feature is a automated test to CRUD and VIEWS Operations in Key Sets
    As a head User

    Background: Navigate to Key Sets tab in Services
        Given As a user logged in 'keysets' screen


    Scenario: Movements of a key
        When Enter in the first item from the table
        And Click on Add button on key sets movement
        And Fill the Key-Sets movement sidebar
        And Clicks on 'Save' button
        Then The Key-Set movement should be created
