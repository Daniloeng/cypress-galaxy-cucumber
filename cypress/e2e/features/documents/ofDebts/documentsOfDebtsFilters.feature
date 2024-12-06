Feature: Documents - Of Debts - Filters

     This Feature is a Filters action automated test in Of Debts Documents
    As a head user

    Background: Navigate to Documents Of Debts tab
        Given Navigate to Documents 'Of Debts' tab in the 'docsofdebts' url
        When Selects 'Table' in View
        And 'Of Debts' table is loaded
        And Selects All columns option in dropdown columns
        And Clicks on Global Filter button of the table
        And Wait for filter in the Documents table


    Scenario Outline: Filter Documents by the Name column with the filter '<filterType>'
        When Clicks on the filter option in the 'title' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'title' Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'title' column applied

        Examples:
            | filterType     | dataToSearch                 |
            | Contains       | Memo Style                   |
            # | Different from |  148856624 - Agostinho Duarte Silva |
            # | Starts with    | Micros                          |
            # | Equals to      |  148856624 - Agostinho Duarte Silva |
            # | Ends with      | tyle                          |
            # | Is empty       |                 |



    Scenario Outline: Filter Documents by the File Name column with the filter '<filterType>'
        When Clicks on the filter option in the 'fileName' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'fileName' Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'fileName' column applied

        Examples:
            | filterType     | dataToSearch             |
            | Starts with    | joaos                    |
            | Contains       | Martins                  |
            | Ends with      | iva.pdf                  |
            # | Equals to      | Payment Req - teste.pdf  |
            # | Different from | Andreia Martins Paiva    |
            # | Is empty       |                          |


    Scenario Outline: Filter Documents by the Barcode column with the filter '<filterType>'
        When Clicks on the filter option in the 'barcodeId' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'barcodeId' Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'barcodeId' column applied

        Examples:
            | filterType            | dataToSearch |
            | Equals to             | 647029       |
            | Less than or equal    | 647029       |
            | Less than             | 647029       |
            | Greater than or equal | 647029       |
            | Greater than          | 647029       |
            # | Different from        | 647029       |
            # | Is empty              |              |


    Scenario Outline: Filter Documents by the Document Date column with the filter '<filterType>'
        When Clicks on the filter option in the 'date' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dayToSelect>' to be searched in the 'date' Date Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'date' column applied

        Examples:
            | filterType            | dayToSelect |
            | Different from        | 2021-12-10  |            
            | Equals to             | 2021-12-10  |
            | Is empty              |             |
            | Less than             | 2021-12-10  |
            | Less than or equal    | 2021-12-10  | 
            | Greater than or equal | 2021-12-10  |
            # | Greater than          | 2021-12-10  | bug for result by filter


    Scenario Outline: Filter Documents by the Due Date column with the filter '<filterType>'
        When Clicks on the filter option in the 'dueDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dayToSelect>' to be searched in the 'dueDate' Date Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'dueDate' column applied

        Examples:
            | filterType            | dayToSelect |
            | Equals to             | 2023-02-17          |
            | Less than or equal    | 2023-02-17          |
            | Less than             | 2023-02-17          |
            | Different from        | 2023-02-17          |
            | Greater than or equal | 2023-02-17          |
            # | Is empty              |             |
            | Greater than          | 2023-02-17          |


    Scenario Outline: Filter Documents by the Last Modified column with the filter '<filterType>'
        When Clicks on the filter option in the 'modified' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dayToSelect>' to be searched in the 'modified' Date Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'modified' column applied


        Examples:
            | filterType            | dayToSelect |
            | Greater than          | 2023-02-23  |
            | Less than             | 2023-02-23  |
            | Less than or equal    | 2023-02-23  |
            | Greater than or equal | 2023-02-23  |
            | Different from        | 2023-02-23  |
            | Equals to             | 2023-02-23  |
            # | Is empty              |             |
