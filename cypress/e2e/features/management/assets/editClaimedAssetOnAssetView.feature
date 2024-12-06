Feature: Asset - Edit a Claimed Asset on Legal Case from Asset view

    This feature is an automated test to Edit a Claimed Asset on Legal Case from Asset view

    Background: Navigate to the Asset view
        Given An user is on LegalCase View

    Scenario: Create and Edit a Claimed Asset
        When Wait for the Claimed Assets table loaded
        And Remove the Claimed Asset on Legal Case view from Asset by API
        And Click on 'Add' button in the Claimed Debts card
        And Wait for the Asset on Side Claimed Asset side bar to load
        And Fill the New Claimed Asset fields on side bar
        And Clicks on 'Save' button
        Then The Claimed Asset should be created on Claimed Assets Card

        # Edit a Claimed Asset
        When Wait for the Claimed Assets table loaded
        And Selects the first item from the Claimed Asset card
        And Click on 'Edit' button in the Claimed Debts card
        And Wait for the Asset on Side Claimed Asset side bar to load
        And Fill the Edited Claimed Asset fields on side bar
        And Clicks on 'Save' button
        And The Claimed Asset should be modifyed on Claimed Assets Card

