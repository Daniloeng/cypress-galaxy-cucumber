Feature: Assets - Columns on Assets screen

    This Feature is a automated test to view Columens in Assets sceen

    Background: Navigate to the Asset view
        Given As a user logged in 'assets' screen
        And 'Assets' table is loaded
        When Selects All columns option in dropdown columns


    Scenario: Unselects '<option>' column and verify view
        When 'Unselects' the 'Id' column in Columns menu
        Then Check if the 'Id' column was removed from view
        When 'Unselects' the 'Address' column in Columns menu
        Then Check if the 'Address' column was removed from view
        When 'Unselects' the 'BPV' column in Columns menu
        Then Check if the 'BPV' column was removed from view
        When 'Unselects' the 'Fraction' column in Columns menu
        Then Check if the 'Fraction' column was removed from view
        When 'Unselects' the 'Municipality' column in Columns menu
        Then Check if the 'Municipality' column was removed from view
        When 'Unselects' the 'Originator' column in Columns menu
        Then Check if the 'Originator' column was removed from view
        When 'Unselects' the 'Originator Id' column in Columns menu
        Then Check if the 'Originator Id' column was removed from view
        When 'Unselects' the 'Owner\'s Tax Number' column in Columns menu
        Then Check if the 'Owner\'s Tax Number' column was removed from view

        When Selects All columns option in dropdown columns

        When 'Unselects' the 'Parish' column in Columns menu
        Then Check if the 'Parish' column was removed from view
        When 'Unselects' the 'Portfolio' column in Columns menu
        Then Check if the 'Portfolio' column was removed from view
        When 'Unselects' the 'Previous Asset ID' column in Columns menu
        Then Check if the 'Previous Asset ID' column was removed from view
        When 'Unselects' the 'Reason' column in Columns menu
        Then Check if the 'Reason' column was removed from view
        When 'Unselects' the 'Status' column in Columns menu
        Then Check if the 'Status' column was removed from view
        When 'Unselects' the 'Status Date' column in Columns menu
        Then Check if the 'Status Date' column was removed from view
        When 'Unselects' the 'Tax Office Number' column in Columns menu
        Then Check if the 'Tax Office Number' column was removed from view
        When 'Unselects' the 'Type' column in Columns menu
        Then Check if the 'Type' column was removed from view
