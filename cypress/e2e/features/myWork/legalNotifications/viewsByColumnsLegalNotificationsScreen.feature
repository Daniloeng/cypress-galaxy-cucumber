Feature: Legal Notifications - Columns on Legal Notifications screen

    This Feature is a automated test to Operations in Legal Notifications Columns

    Background: Navigate to the Legal Notifications view
        Given As a user logged in 'legalnotification' screen
        And 'Legal Notifications' table is loaded
        When Selects All columns option in dropdown columns


    Scenario: Unselects '<option>' column and verify view
        When 'Unselects' the 'Amount' column in Columns menu
        Then Check if the 'Amount' column was removed from view
        When 'Unselects' the 'Assignees' column in Columns menu
        Then Check if the 'Assignees' column was removed from view
        When 'Unselects' the 'Document Type' column in Columns menu
        Then Check if the 'Document Type' column was removed from view
        When 'Unselects' the 'Legal Case Number' column in Columns menu
        Then Check if the 'Legal Case Number' column was removed from view
        When 'Unselects' the 'Payment Id' column in Columns menu
        Then Check if the 'Payment Id' column was removed from view
        When 'Unselects' the 'Payment Type' column in Columns menu
        Then Check if the 'Payment Type' column was removed from view
        
        And Selects All columns option in dropdown columns

        When 'Unselects' the 'Portfolio' column in Columns menu
        Then Check if the 'Portfolio' column was removed from view
        When 'Unselects' the 'Portfolio Group' column in Columns menu
        Then Check if the 'Portfolio Group' column was removed from view
        When 'Unselects' the 'Priority' column in Columns menu
        Then Check if the 'Priority' column was removed from view
        When 'Unselects' the 'Request Date' column in Columns menu
        Then Check if the 'Request Date' column was removed from view
        When 'Unselects' the 'Status' column in Columns menu
        Then Check if the 'Status' column was removed from view
        When 'Unselects' the 'Status Reason' column in Columns menu
        Then Check if the 'Status Reason' column was removed from view
        When 'Unselects' the 'Supplier' column in Columns menu
        Then Check if the 'Supplier' column was removed from view
