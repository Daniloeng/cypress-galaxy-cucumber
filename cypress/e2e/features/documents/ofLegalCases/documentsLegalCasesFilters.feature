Feature: Documents - Legal Cases - Filters

     This Feature is a Filters action automated test in Legal Cases Documents
    As a head user

    Background: Navigate to Documents Legal Cases tab
        Given Navigate to Documents 'Legal Cases' tab in the 'docsoflegalcases' url
        When Selects 'Table' in View
        And 'Legal Cases' table is loaded
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
            | filterType | dataToSearch                 |
            | Contains   | ULTIMA DILIGENCIA 08.07.2015 |
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
            | filterType  | dataToSearch                             |
            # | Starts with | a2fe9bfc                                 |
            | Contains    | a2fe9bfc-ff9c-4c51-8865-bb61bbd8f874.pdf |
    #         | Ends with   | bb61bbd8f874.pdf                         |
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
            | Equals to             | 18552       |
            # | Less than or equal    | 165065       |
            # | Less than             | 165065       |
            # | Greater than or equal | 165065       |
            # | Greater than          | 165065       |
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
            # | Less than             | 2021-12-10  |
            # | Less than or equal    | 2021-12-10  | 
            # | Greater than or equal | 2021-12-10  |
            # | Greater than          | 2021-12-10  | bug for result by filter


    Scenario Outline: Filter Documents by the Due Date column with the filter '<filterType>'
        When Clicks on the filter option in the 'dueDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dayToSelect>' to be searched in the 'dueDate' Date Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'dueDate' column applied

        Examples:
            | filterType            | dayToSelect |
            # | Equals to             | 2024-04-10  |
            # | Less than or equal    | 2024-05-01  |
            | Less than             | 2024-05-01  |
            | Different from        | 2024-05-01  |
            | Greater than or equal | 2024-02-21  |
            # | Is empty              |             |
            | Greater than          | 2024-02-21  |


    Scenario Outline: Filter Documents by the Last Modified column with the filter '<filterType>'
        When Clicks on the filter option in the 'modified' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dayToSelect>' to be searched in the 'modified' Date Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'modified' column applied


        Examples:
            | filterType            | dayToSelect |
            # | Greater than          | 2024-02-09  |
            | Less than             | 2024-02-09  |
            | Greater than or equal | 2024-02-09  |
            | Different from        | 2024-02-09  |
            # | Equals to             | 2024-02-09  |
