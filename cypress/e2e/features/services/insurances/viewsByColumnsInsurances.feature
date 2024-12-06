Feature: Services - Views - Insurances

  This Feature is a automated test to see the different views of Insurances page

  Background:
    Given As a user logged in 'insurances' screen
    When Selects 'Table' in View
    And Selects All columns option in dropdown columns


 Scenario: Unselects '<option>' column and verify view
        When 'Unselects' the 'Number' column in Columns menu
        Then Check if the 'Number' column was removed from view
        When 'Unselects' the 'Status' column in Columns menu
        Then Check if the 'Status' column was removed from view
        When 'Unselects' the 'Status Date' column in Columns menu
        Then Check if the 'Status Date' column was removed from view
        When 'Unselects' the 'Asset Category' column in Columns menu
        Then Check if the 'Asset Category' column was removed from view

        And Selects All columns option in dropdown columns

        When 'Unselects' the 'Beneficiary' column in Columns menu
        Then Check if the 'Beneficiary' column was removed from view
        When 'Unselects' the 'Insurance Company' column in Columns menu
        Then Check if the 'Insurance Company' column was removed from view 
        When 'Unselects' the 'Total Amount' column in Columns menu
        Then Check if the 'Total Amount' column was removed from view
        When 'Unselects' the 'Insurance Date' column in Columns menu
        Then Check if the 'Insurance Date' column was removed from view
        
        And Selects All columns option in dropdown columns