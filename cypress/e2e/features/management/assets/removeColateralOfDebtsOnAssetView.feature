Feature: Asset - Remove a Colateral Of Debts on Asset view

    This feature is an automated test to Remove a Colateral Of Debts on the Asset view

    Background: Navigate to the Asset view:
        Given An user is on Assets '43' view in 'Photos' screen
        And Wait for the Colateral Of Debts with Portfolio '217' and AssetId '43' on Asset View table load
        And Clicks on the 'Overview' tab
        And Remove the Colateral Of Debts with Portfolio '217' and AssetId '43' with DebtId '663730' on Asset view by API

    Scenario: Add a new Colateral Of Debts from Asset view
        And Clicks on 'Add' button in Documents
        And Selects the Colateral of Debts to Add
        And Clicks on Add Buton in the New Debts side bar
        And Clicks on 'Save' button
        Then The Debt should be visible on Colateral of Debts card from Asset View

        #Remove Colateral of Debt Created
        When Selects the first item from the Colateral of Debts card
        And Clicks on 'Remove' button in Documents
        And Clicks on Yes button in sidebar
        Then Verifies that the Colateral of Debts has been removed from asset card
