Feature: Services - Add - Insurances

    This Feature is a automated test to CRUD and VIEWS Operations in Insurances
    As a head User

    Background: Navigate to Insurances tab in Services
        Given As a user logged in 'insurances' screen


    Scenario: Add a Insurance with success
        When Clicks on 'Add' button in toolbar
        And Fills the sidebar form for creating porpuses on tab Insurances
        And Clicks on 'Save' button
        Then The Insurance should be created