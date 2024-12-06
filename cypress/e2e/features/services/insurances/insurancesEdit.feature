Feature: Services - Edit - Insurances

    This Feature is a automated test to CRUD and VIEWS Operations in Insurances
    As a head User

    Background: Navigate to Insurances tab in Services
        Given As a user logged in 'insurances' screen


    Scenario: Edit a Insurance with success
        When Clicks the first item from the table in Insurances screen
        And Clicks on 'Edit' button in toolbar
        And Fills the sidebar form for editing porpuses on tab Insurances
        And Clicks on 'Save' button
        Then The Insurance should be edited