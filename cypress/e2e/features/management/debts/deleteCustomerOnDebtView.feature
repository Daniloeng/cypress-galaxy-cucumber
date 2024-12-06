Feature: Debts - Delete customer on Debts view

This feature is an automated test to Delete a customer document on the Debts screen

    Background: Navigate to the Debt view
        Given Create a Customer on Customer tab on Debt Screen for PortfolioId '370' by api debtId '1243346247'
        And Set '2195' testUserId on Local storage
        And Verify default user

    Scenario: Remove a customer from customer tab on Debts View
        When Clicks on the 'Customer' tab
        And Selects the first item from the table
        And Clicks on 'Remove' button in Documents
        And Clicks on Yes button in sidebar
        Then Verifies that the customer 'CARLOS DA SILVEIRA NETO' has been removed from debt table
