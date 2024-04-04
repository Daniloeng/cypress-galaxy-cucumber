Feature: Columns on Assets screen

    This Feature is a automated test to view Columens in Assets sceen

    Background: Navigate to the Asset view
        Given As a head logged in
        When Clicks on 'Assets' tab on 'management' menu
        And 'Assets' table is loaded
        And Wait for filter in the Asset table
        And Selects All columns option on dropdown columns


    Scenario Outline: Unselects '<option>' column and verify view
        When 'Unselects' the '<option>' column on Columns menu
        Then Check if the '<option>' column was removed from view

        Examples:
            | option              |
            | Id                  |
            | Address             |
            | BPV                 |
            | Fraction            |
            | Municipality        |
            | Originator          |
            | Originator Id       |
            | Owner\'s Tax Number |
            | Parish              |
            | Portfolio           |
            | Previous Asset ID   |
            | Reason              |
            | Status              |
            | Status Date         |
            | Tax Office Number   |
            | Type                |
