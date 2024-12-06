Feature: Legal Cases - Columns on Legal Cases screen

    This Feature is a automated test to view Columens in Assets sceen

    Background: Navigate to the Asset view
        Given As a user logged in 'legalcases' screen
        When Selects 'Table' in View
        And 'Legal Cases' table is loaded
        When Selects All columns option in dropdown columns
        And Clicks on Global Filter button of the table


    Scenario: Unselects Columns and verify view
        When 'Unselects' the 'Id' column in Columns menu
        Then Check if the 'Id' column was removed from view
        When 'Unselects' the 'Court' column in Columns menu
        Then Check if the 'Court' column was removed from view
        When 'Unselects' the 'Legal Case Type' column in Columns menu
        Then Check if the 'Legal Case Type' column was removed from view
        
        And Selects All columns option in dropdown columns
        When 'Unselects' the 'Number' column in Columns menu
        Then Check if the 'Number' column was removed from view
        When 'Unselects' the 'Unit' column in Columns menu
        Then Check if the 'Unit' column was removed from view
