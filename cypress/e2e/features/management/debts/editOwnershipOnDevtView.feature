Feature: Debts - Edit an Ownership on Debts view

    This feature is an automated test to edit an Ownership on the Debts view

    Background: Navigate to the Debt view
        Given As an authenticated user on the 'debts' view with URL parameters '370' '1243353964'
        And Wait for the Ownership table loaded '1243353964'
        And Clicks on the 'Ownership' tab
        And Remove the Ownership 'HEFESTO, STC, S.A' by API

    Scenario: Edit a new Ownership from Ownership tab on Debts Screen
        When Clicks on Refresh button
        And Clicks on 'Add' button in Documents
        And Fill the fields on Ownership side bar
        And Clicks on 'Save' button
        Then The Ownership name should be visble on table

        #Edit Ownership
        And Selects the first item from the Ownership Debt table
        And Clicks on 'Edit' button in Documents
        And Edit the fields on Ownership side bar
        And Clicks on 'Save' button
        Then The Ownership name edited should be visble on table





