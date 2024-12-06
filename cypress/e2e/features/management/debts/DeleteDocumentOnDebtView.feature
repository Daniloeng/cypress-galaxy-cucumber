Feature: Debts - Delete a document on Debts view

    This feature is an automated test to delete a document on the Debts view

    Background: Create a document for a debt
        Given Create a Document on Document Debt View for PortfolioId '473' by api debtId '1243294694'

    Scenario: Remove debt from Documents tab on Debts Screen
        When Clicks on the 'Documents' tab
        And Selects the first item from the table
        And Clicks on 'Remove' button in Documents tab from Debt view
        And Clicks on Yes button in sidebar
        Then Verifies that the document has been removed from debt table