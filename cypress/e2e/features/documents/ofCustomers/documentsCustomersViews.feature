Feature: Documents - Of Customers - Columns Views

    This Feature is a automated test to Views in Documents Unidentified Columns
    As a head user

    Background: Navigate to Documents/Of Customers tab
        Given Navigate to Documents 'Of Customers' tab in the 'docsofcustomers' url
        When Selects 'Table' in View
        And Selects All columns option on dropdown columns

    Scenario Outline: Unselects '<columnName>' column from Documents/Unidentified tab
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
            | Is Confidential   |
            | Last Modified     |
            | Modified by       |
            | Status            |
            | Type              |
