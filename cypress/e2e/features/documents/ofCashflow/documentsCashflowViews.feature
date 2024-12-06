Feature: Documents - Cashflow - Columns Views

    This Feature is a automated test to Views in Documents Cashflow Columns
    As a head user

    Background: Navigate to Documents/Cashflow tab
        Given Navigate to Documents 'Cashflow' tab in the 'docsofcashflow' url
        When Selects 'Table' in View
        And Selects All columns option on dropdown columns


    Scenario Outline: Unselects '<columnName>' column from Documents/Cashflow tab
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
