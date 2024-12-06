Feature: Management - Colunms - Group Of Bank Accounts

  This Feature is a automated test to see the different views of Group of Bank Accounts page

  Background:
    Given As a user logged in 'bankaccountgroups' screen
    When Selects All columns option in dropdown columns


 Scenario: Unselects '<option>' column and verify view
        When 'Unselects' the 'Name' column in Columns menu
        Then Check if the 'Name' column was removed from view
        When 'Unselects' the '# Bank Accounts' column in Columns menu
        Then Check if the '# Bank Accounts' column was removed from view
        When 'Unselects' the 'Status' column in Columns menu
        Then Check if the 'Status' column was removed from view
        When 'Unselects' the 'Status Date' column in Columns menu
        Then Check if the 'Status Date' column was removed from view

        And Selects All columns option in dropdown columns

        When 'Unselects' the 'Open Period' column in Columns menu
        Then Check if the 'Open Period' column was removed from view
        When 'Unselects' the 'Closed Month' column in Columns menu
        Then Check if the 'Closed Month' column was removed from view
        
        And Selects All columns option in dropdown columns