Feature: Asset - Add a Colateral Of Debts on Asset view

    This feature is an automated test to Create a Ownership on the Asset view

    Background: Navigate to the Asset view:
        Given An user is on Assets '43' view in '' screen
        And Wait for the Colateral Of Debts with Portfolio '217' and AssetId '43' on Asset View table load
        And Remove the Colateral Of Debts with Portfolio '217' and AssetId '43' with DebtId '268119' on Asset view by API

    Scenario: Add a new Colateral Of Debts from Asset view
        And Clicks on 'Add' button in Documents
        And Selects the Colateral of Debts to Add
        And Clicks on Add Buton in the New Debts side bar
        And Clicks on 'Save' button
        Then Colateral of Debts table should be loaded
        And The Debt should be visible on Colateral of Debts card from Asset View