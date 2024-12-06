Feature: Services - Views - Key-Sets

  This Feature is a automated test to see the different views of keysets page

  Background:
    Given As a user logged in 'keysets' screen
    When Selects All columns option in dropdown columns


 Scenario: Unselects '<option>' column and verify view
        When 'Unselects' the 'Asset Id' column in Columns menu
        Then Check if the 'Asset Id' column was removed from view
        When 'Unselects' the 'Id' column in Columns menu
        Then Check if the 'Id' column was removed from view
        When 'Unselects' the 'Origin' column in Columns menu
        Then Check if the 'Origin' column was removed from view
        When 'Unselects' the 'Position Number' column in Columns menu
        Then Check if the 'Position Number' column was removed from view
        When 'Unselects' the 'Previous Asset Id' column in Columns menu
        Then Check if the 'Previous Asset Id' column was removed from view
        When 'Unselects' the 'Reason' column in Columns menu
        Then Check if the 'Reason' column was removed from view 

        And Selects All columns option in dropdown columns

        When 'Unselects' the 'Status' column in Columns menu
        Then Check if the 'Status' column was removed from view
        When 'Unselects' the 'Status Date' column in Columns menu
        Then Check if the 'Status Date' column was removed from view
        When 'Unselects' the 'Storage' column in Columns menu
        Then Check if the 'Storage' column was removed from view
        When 'Unselects' the 'Storage Entity' column in Columns menu
        Then Check if the 'Storage Entity' column was removed from view
        When 'Unselects' the 'Total Keys' column in Columns menu
        Then Check if the 'Total Keys' column was removed from view
        
        And Selects All columns option in dropdown columns