Feature: Services - Views - Condominium Entities

  This Feature is a automated test to see the different views of condominium entity page

  Background:
    Given As a user logged in 'condominiumsentities' screen
    When Selects All columns option in dropdown columns


 Scenario: Unselects '<option>' column and verify view
        When 'Unselects' the 'Address' column in Columns menu
        Then Check if the 'Address' column was removed from view
        When 'Unselects' the 'Asset ID' column in Columns menu
        Then Check if the 'Asset ID' column was removed from view
        When 'Unselects' the 'Asset Status' column in Columns menu
        Then Check if the 'Asset Status' column was removed from view
        When 'Unselects' the 'Asset Status Date' column in Columns menu
        Then Check if the 'Asset Status Date' column was removed from view
        When 'Unselects' the 'Managed By' column in Columns menu
        Then Check if the 'Managed By' column was removed from view
        When 'Unselects' the 'Originator Asset ID' column in Columns menu
        Then Check if the 'Originator Asset ID' column was removed from view 

        And Selects All columns option in dropdown columns

        When 'Unselects' the 'Portfolio' column in Columns menu
        Then Check if the 'Portfolio' column was removed from view
        When 'Unselects' the 'Postal Code' column in Columns menu
        Then Check if the 'Postal Code' column was removed from view
        When 'Unselects' the 'Previous Asset Id' column in Columns menu
        Then Check if the 'Previous Asset Id' column was removed from view
        When 'Unselects' the 'Supplier' column in Columns menu
        Then Check if the 'Supplier' column was removed from view
        
        And Selects All columns option in dropdown columns