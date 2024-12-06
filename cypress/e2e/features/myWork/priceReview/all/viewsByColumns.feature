Feature: MyWork - Views - Price Review/All

  This Feature is a automated test to see the different views of Price Review page

  Background:
    Given As a user logged in 'pricereview/all' screen
    When Selects All columns option in dropdown columns


 Scenario: Unselects '<option>' column and verify view
        When 'Unselects' the 'Asset Id' column in Columns menu
        Then Check if the 'Asset Id' column was removed from view
        When 'Unselects' the 'Current Price' column in Columns menu
        Then Check if the 'Current Price' column was removed from view
        When 'Unselects' the 'Current Price Date' column in Columns menu
        Then Check if the 'Current Price Date' column was removed from view
        When 'Unselects' the 'Decision Comment' column in Columns menu
        Then Check if the 'Decision Comment' column was removed from view
        When 'Unselects' the 'Decisor' column in Columns menu
        Then Check if the 'Decisor' column was removed from view
        When 'Unselects' the 'Decisor Date' column in Columns menu
        Then Check if the 'Decisor Date' column was removed from view 

        And Selects All columns option in dropdown columns

        When 'Unselects' the 'Portfolio' column in Columns menu
        Then Check if the 'Portfolio' column was removed from view
        When 'Unselects' the 'Previous Id' column in Columns menu
        Then Check if the 'Previous Id' column was removed from view
        When 'Unselects' the 'Proposed Price' column in Columns menu
        Then Check if the 'Proposed Price' column was removed from view
        When 'Unselects' the 'Remaining Days' column in Columns menu
        Then Check if the 'Remaining Days' column was removed from view
        When 'Unselects' the 'Requester' column in Columns menu
        Then Check if the 'Requester' column was removed from view
        When 'Unselects' the 'Status' column in Columns menu
        Then Check if the 'Status' column was removed from view
        When 'Unselects' the 'Type' column in Columns menu
        Then Check if the 'Type' column was removed from view
        
        And Selects All columns option in dropdown columns