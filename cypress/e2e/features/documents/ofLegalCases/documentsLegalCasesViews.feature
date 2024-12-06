Feature: Documents - Legal Cases - Columns Views

    This Feature is a automated test to Views in Documents Legal Cases Columns
    As a head user

    Background: Navigate to Documents/Legal Cases tab
        Given Navigate to Documents 'Legal Cases' tab in the 'docsoflegalcases' url
        When Selects 'Table' in View
        And Selects All columns option on dropdown columns


    Scenario Outline: Unselects '<columnName>' column from Documents/Legal Cases tab
        When 'Unselects' the '<columnName>' column on Columns menu
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
