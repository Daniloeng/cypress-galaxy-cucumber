Feature: Documents - ALL - Views

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head user

    Background: Navigate to Documents All tab
        Given Navigate to Documents 'All' tab in the '' url


    Scenario Outline: Unselects columns and verify view from Documents/All tab
        And Selects All columns option in dropdown columns
        And 'Unselects' the 'Barcode' column in Columns menu
        Then Check if the 'Barcode' column was removed from view
        And 'Unselects' the 'Category' column in Columns menu
        Then Check if the 'Category' column was removed from view
        And 'Unselects' the 'Direction' column in Columns menu
        Then Check if the 'Direction' column was removed from view
        And 'Unselects' the 'Document Date' column in Columns menu
        Then Check if the 'Document Date' column was removed from view
        And 'Unselects' the 'Due Date' column in Columns menu
        Then Check if the 'Due Date' column was removed from view
        And 'Unselects' the 'File Name' column in Columns menu
        Then Check if the 'File Name' column was removed from view
        And 'Unselects' the 'File Size' column in Columns menu
        Then Check if the 'File Size' column was removed from view

        And Selects All columns option in dropdown columns

        And 'Unselects' the 'Is Confidential' column in Columns menu
        Then Check if the 'Is Confidential' column was removed from view
        And 'Unselects' the 'Last Modified' column in Columns menu
        Then Check if the 'Last Modified' column was removed from view
        And 'Unselects' the 'Modified by' column in Columns menu
        Then Check if the 'Modified by' column was removed from view
        And 'Unselects' the 'Original Document' column in Columns menu
        Then Check if the 'Original Document' column was removed from view
        And 'Unselects' the 'Type' column in Columns menu
        Then Check if the 'Type' column was removed from view



    Scenario: Changing view mode to Table and Cards
        When Clicks on View button
        And Selects 'Table' option
        Then The Documents items should be shown as 'Table'
        When Clicks on View button
        And Selects 'Cards' option
        Then The Documents items should be shown as 'Cards'
