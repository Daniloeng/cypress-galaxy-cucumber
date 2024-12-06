Feature: Services - Shows - Condominium Payments

  This Feature is a automated test to see the different views of condominium payments page

    Background: Navigate to the Condominiums Payments screen
        Given As a user logged in 'condominiumspayments' screen
        And Intercepts the all Condominiums Payments are shown


    Scenario: Selects Show Condominium Payments and verify view
        When Selects by 'Current' in the Show of the 'Condominiums Payments' table screen
        Then Waits the all Condominiums Payments are shown
        When Selects by 'All' in the Show of the 'Condominiums Payments' table screen
        Then Waits the current Condominiums Payments are shown
        