Feature: Services - Views - Condominium Payments

  This Feature is a automated test to see the different views of condominium payments page

  Background:
    Given As a user logged in 'condominiumspayments' screen
    And Set '2169' testUserId on Local storage
    When Selects All columns option in dropdown columns


 Scenario: Unselects columns Condominium Payments and verify view
        When 'Unselects' the 'Amount' column in Columns menu
        Then Check if the 'Amount' column was removed from view
        When 'Unselects' the 'Asset ID' column in Columns menu
        Then Check if the 'Asset ID' column was removed from view
        When 'Unselects' the 'Asset Status' column in Columns menu
        Then Check if the 'Asset Status' column was removed from view
        When 'Unselects' the 'Due Date' column in Columns menu
        Then Check if the 'Due Date' column was removed from view
        When 'Unselects' the 'Entity Code' column in Columns menu
        Then Check if the 'Entity Code' column was removed from view
        When 'Unselects' the 'IBAN' column in Columns menu
        Then Check if the 'IBAN' column was removed from view 
        When 'Unselects' the 'Id' column in Columns menu
        Then Check if the 'Id' column was removed from view
        When 'Unselects' the 'Managed by' column in Columns menu
        Then Check if the 'Managed by' column was removed from view

        And Selects All columns option in dropdown columns

        When 'Unselects' the 'Originator Asset ID' column in Columns menu
        Then Check if the 'Originator Asset ID' column was removed from view
        When 'Unselects' the 'Payer Bank Account' column in Columns menu
        Then Check if the 'Payer Bank Account' column was removed from view
        When 'Unselects' the 'Payer Entity' column in Columns menu
        Then Check if the 'Payer Entity' column was removed from view
        When 'Unselects' the 'Payment Type' column in Columns menu
        Then Check if the 'Payment Type' column was removed from view
        When 'Unselects' the 'Portfolio' column in Columns menu
        Then Check if the 'Portfolio' column was removed from view
        When 'Unselects' the 'Previous Asset ID' column in Columns menu
        Then Check if the 'Previous Asset ID' column was removed from view
        When 'Unselects' the 'Reference' column in Columns menu
        Then Check if the 'Reference' column was removed from view
        When 'Unselects' the 'Supplier' column in Columns menu
        Then Check if the 'Supplier' column was removed from view
        
        And Selects All columns option in dropdown columns
        