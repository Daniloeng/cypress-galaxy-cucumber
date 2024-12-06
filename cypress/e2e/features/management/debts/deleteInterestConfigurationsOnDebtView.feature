Feature: Debts - Remove an Interest Configuration on Settings tab on the Debts view

    This feature is an automated test to Remove New Interest Configuration on Settings Tab on the Debts view

    Background: Navigate to Setting tab on Debt view
        Given Create a Interest Configuration to access on Settings tab for PortfolioId '370' by api debtId '1243363218' to remove

    Scenario: Remove a new Interest Configuration on Settings tab on the Debts view
        And Clicks on the 'Settings' tab
        And Selects the first card from the table
        And Clicks on 'Remove' button in Setting tab from Debt view
        And Clicks on Yes button in sidebar
        Then Verifies that the Interest Setting has been removed from debt table