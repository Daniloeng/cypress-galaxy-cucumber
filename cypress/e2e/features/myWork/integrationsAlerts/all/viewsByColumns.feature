Feature: MyWork - Views - Integrations Alert

  This Feature is a automated test to see the different views of Integrations Alert page

  Background:
    Given As a user logged in 'integrationalerts/all' screen
    When Selects All columns option in dropdown columns


 Scenario: Unselects '<option>' column and verify view
        When 'Unselects' the 'Id' column in Columns menu
        Then Check if the 'Id' column was removed from view
        When 'Unselects' the 'Event Type' column in Columns menu
        Then Check if the 'Event Type' column was removed from view
        When 'Unselects' the 'Related Entity' column in Columns menu
        Then Check if the 'Related Entity' column was removed from view
        When 'Unselects' the 'Origin' column in Columns menu
        Then Check if the 'Origin' column was removed from view

        And Selects All columns option in dropdown columns

        When 'Unselects' the 'Message' column in Columns menu
        Then Check if the 'Message' column was removed from view
        
        And Selects All columns option in dropdown columns