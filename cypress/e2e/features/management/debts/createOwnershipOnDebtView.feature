Feature: Debts - Create an Ownership on Debts view

This feature is an automated test to create a Ownership on the Debts view

    Background: Navigate to the Debt view
        Given As an authenticated user on the 'debts' view with URL parameters '370' '1243353964'
        And Wait for the Ownership table loaded '1243353964'
        And Clicks on the 'Ownership' tab
        And Remove the Ownership 'HEFESTO, STC, S.A' by API

    Scenario: Create a new Debt from Documents tab on Debts Screen
        When Clicks on Refresh button
        And Clicks on 'Add' button in Documents
        And Fill the fields on Ownership side bar
        And Clicks on 'Save' button
        Then The Ownership name should be visble on table
