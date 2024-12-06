Feature: Documents - Assets - Columns Views

    This Feature is a automated test to Views in Documents Assets Columns
    As a head user

    Background: Navigate to Documents/Assets tab
        Given Navigate to Documents 'Assets' tab in the 'docsofassets' url
        When Selects 'Table' in View
        And Selects All columns option in dropdown columns


    Scenario: Unselects columns and verify view from Documents/Assets tab
        When 'Unselects' the 'Barcode' column in Columns menu
        Then Check if the 'Barcode' column was removed from view
        When 'Unselects' the 'Category' column in Columns menu
        Then Check if the 'Category' column was removed from view
        When 'Unselects' the 'Direction' column in Columns menu
        Then Check if the 'Direction' column was removed from view
        When 'Unselects' the 'Document Date' column in Columns menu
        Then Check if the 'Document Date' column was removed from view
        When 'Unselects' the 'Due Date' column in Columns menu
        Then Check if the 'Due Date' column was removed from view
        When 'Unselects' the 'File Name' column in Columns menu
        Then Check if the 'File Name' column was removed from view

        And Selects All columns option in dropdown columns

        When 'Unselects' the 'File Size' column in Columns menu
        Then Check if the 'File Size' column was removed from view
        When 'Unselects' the 'Is Confidential' column in Columns menu
        Then Check if the 'Is Confidential' column was removed from view
        When 'Unselects' the 'Last Modified' column in Columns menu
        Then Check if the 'Last Modified' column was removed from view
        When 'Unselects' the 'Modified by' column in Columns menu
        Then Check if the 'Modified by' column was removed from view
        When 'Unselects' the 'Original Document' column in Columns menu
        Then Check if the 'Original Document' column was removed from view
        When 'Unselects' the 'Type' column in Columns menu
        Then Check if the 'Type' column was removed from view

    Scenario: Changing view mode to Table and Cards
        When Clicks on View button
        And Selects 'Table' option
        Then The Documents items should be shown as 'Table'
        
        When Clicks on View button
        And Selects 'Cards' option
        Then The Documents items should be shown as 'Cards'
