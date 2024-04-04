Feature: Columns on Legal Notifications screen

    This Feature is a automated test to Operations in Legal Notifications Columns

    Background: Navigate to the Legal Notifications view
        Given As a head logged in
        When Clicks on "Legal Notifications" tab on "mywork" - "My Work" menu
        And 'Legal Notifications' table is loaded
        And Selects All columns option on dropdown columns


    Scenario Outline: Unselects '<option>' column and verify view
        When 'Unselects' the '<option>' column on Columns menu
        Then Check if the '<option>' column was removed from view

        Examples:
            | option               |
            | Assets Claim Number  |
            | Comment              |
            | Document Category    |
            | Document Type        |
            | Legal Case Number    |
            | Legal Case Type      |
            | Notification Manager |
            | Portfolio Group      |
            | Priority             |
            | Ranking              |
            | Recommended Due Date |
            | Request Date         |
            | Status               |
