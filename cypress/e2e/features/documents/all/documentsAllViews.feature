Feature: Views - Documents - ALL

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head user

    Background: Navigate to Documents/All tab
        Given Navigate to Documents-All tab


    Scenario Outline: Remove and Add column from Documents/All tab
        When Clicks on Columns
        And 'Unselects' the '<columnName>' column on Columns menu
        Then Check if the '<columnName>' column was removed from view

        Examples:
            | columnName        |
            | Barcode           |
            | Category          |
            | Direction         |
            | Document Date     |
            | Due Date          |
            | File Name         |
            | File Size         |
            | Is Confidential   |
            | Last Modified     |
            | Modified by       |
            | Original Document |
            | Status            |
            | Type              |


    Scenario Outline: Changing view mode to "<tableView>"
        When Clicks on View button
        And Selects "<tableView>" option
        Then The Documents items should be shown as "<tableView>"

        Examples:
            | tableView |
            | Table     |
            | Cards     |