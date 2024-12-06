Feature: Asset - Remove an Ownership on Asset view

    This feature is an automated test to Remove a Ownership on the Asset view

    Background: Navigate to the Asset view:
        Given An user is on Assets '10' view in 'assetownerships' screen
        And Wait for the Ownership Asset '10' table loaded
        And Remove the Ownership on Asset view 'Deed Originators' by API

    Scenario: Create a new Debt from Documents tab on Debts Screen
        And Clicks on 'Add' button in Documents
        And Fill the fields on Asset Ownership side bar
        And Clicks on 'Save' button
        Then The Ownership created should be visble on table

        #Remove Ownership Created
        When Selects the first item from the Ownership Asset table
        And Clicks on 'Remove' button in Documents
        And Intercept and wait for closing the Ownership Asset sidebar
        And Clicks on Yes button in sidebar
        Then Verifies that the Ownership has been removed from debt table



