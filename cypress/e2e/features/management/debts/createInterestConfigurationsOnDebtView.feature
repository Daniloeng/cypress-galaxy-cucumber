Feature: Debts - Create a New Interest Configuration on Settings tab on the Debts view

    This feature is an automated test to create New Interest Configuration on Settings Tab on the Debts view

    Scenario: Create a new Interest Configuration on Settings tab on the Debts view
        Given As an authenticated user on the 'debts' view with URL parameters '437' '1243364513'
        And Clicks on the 'Settings' tab
        When Clicks on 'Add' button in Documents
        And Waits to load requests on New Interest Configurations sidebar
        And Fill the fields on Interest Configuration side bar
        And Clicks on 'Save' button
        Then Sidebar view should be closed
        And The interest configuration 'Accrued Interest' should be visble on table
        And The interest configuration '360' should be visble on table
        And The interest configuration 'CIVIL' should be visble on table

        # Steps below remove the Interest Configurations created
        And Selects the first card from the table
        And Clicks on 'Remove' button in Setting tab from Debt view
        And Clicks on Yes button in sidebar
        Then Verifies that the Interest Setting has been removed from debt table

