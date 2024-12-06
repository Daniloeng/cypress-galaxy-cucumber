Feature: Debts - Delete an Ownership on Debts view

    This feature is an automated test to delete an Ownership on the Debts view
    Background: Navigate to the Debt view
        Given As an authenticated user on the 'debts' view with URL parameters '437' '1243406406'
        And Wait for the Ownership table loaded '1243406406'
        And Clicks on the 'Ownership' tab
        And Remove the Ownership 'BANCO BPI, SA' by API
        And Clicks on Global Filter button of the table

    Scenario: Delete Ownership from Ownership tab on Debts Screen
        And Clicks on 'Add' button in Documents
        And Fill the fields on Ownership side bar 'BANCO BPI, SA' 'Sale of Debts' '5000' '5'
        And Clicks on 'Save' button
        Then The customer name 'BANCO BPI, SA' should be visble on table

        #Delete Ownership
        And Clicks on 'Remove' button in Setting tab from Debt view
        And Clicks on Yes button in sidebar
        Then Verifies that the Interest Setting has been removed from debt table

