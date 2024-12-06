Feature: Debts - Edit a Customer on Debts view

This feature is an automated test to edit a Customer on the Debts view

    Background: Edit a Customer for a debt
        Given Create a Customer on Customer tab on Debt Screen for PortfolioId '473' by api debtId '1243346127'
        And Wait for the Customer Debt '1243346127' table loaded

    Scenario: Edit a debt from Documents tab on Debts Screen
        When Clicks on the 'Customers' tab
        And Remove the Customer "CARLOS DA SILVA NETO" by API
        And Clicks on Refresh button
        And Selects the first item from the table
        And Clicks on 'Edit' button in Documents
        And Edit fileds on Customer side bar from debt 'Active' 'Valid'
        And Clicks on 'Save' button
        Then Should be edited to status 'Active' column on customer table
