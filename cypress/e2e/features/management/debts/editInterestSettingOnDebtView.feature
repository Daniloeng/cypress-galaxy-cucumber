Feature: Debts - Edit Interest Configuration on Settings tab on the Debts view

    This feature is an automated test to Edit Interest Configuration on Settings Tab on the Debts view

    Scenario: Edit Interest Configuration on Settings tab on the Debts view
        Given Create a Interest Configuration on Settings tab for PortfolioId '370' by api debtId '1243346127'
        And Clicks on the 'Settings' tab
        And Selects the first card from the table
        And Clicks on 'Edit' button in Documents
        And Waits to load requests on New Interest Configurations sidebar
        And Edit the fields on Interest Configuration side bar
        And Clicks on 'Save' button
        Then Sidebar view should be closed
        And The interest configuration 'Accrued Interest' should be visble on table
        And The interest configuration '365' should be visble on table
        And The interest configuration 'COMERCIAL' should be visble on table

        # Steps below remove the Interest Configurations created
        And Selects the first card from the table
        And Clicks on 'Remove' button in Setting tab from Debt view
        And Clicks on Yes button in sidebar
        Then Verifies that the Interest Setting has been removed from debt table
