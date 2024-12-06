Feature: Asset - Create an Ownership on Asset view

This feature is an automated test to Create a Ownership on the Asset view

    Background: Navigate to the Asset view
        Given An user is on Assets '10' view in 'assetownerships' screen
        And Wait for the Ownership Asset '10' table loaded
        And Remove the Ownership on Asset view 'Deed Originators' by API

    Scenario: Create a new Debt from Documents tab on Debts Screen
        And Clicks on 'Add' button in Documents
        And Fill the fields on Asset Ownership side bar
        And Clicks on 'Save' button
        Then The Ownership created should be visble on table
