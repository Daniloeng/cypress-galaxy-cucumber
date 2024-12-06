Feature: Key-sets to Return - Filters and Columns on Key-sets to Return screen

    This Feature is a automated test to Operations in Key-sets to Return Filters and Columns

    Background: Navigate to the Key-sets to Return view
        Given As a user logged in 'keysetstoreturn' screen
        And 'Key-sets to Return' table is loaded
        When Selects All columns option in dropdown columns
        And Wait for Key-sets to Return table loaded


    Scenario: Unselects columns and verifies view
        When 'Unselects' the 'Asset Id' column in Columns menu
        Then Check if the 'Asset Id' column was removed from view
        When 'Unselects' the 'Previous Asset Id' column in Columns menu
        Then Check if the 'Previous Asset Id' column was removed from view
        When 'Unselects' the 'Status' column in Columns menu
        Then Check if the 'Status' column was removed from view
        When 'Unselects' the 'KeySet Id' column in Columns menu
        Then Check if the 'KeySet Id' column was removed from view
        When 'Unselects' the 'Delivered to' column in Columns menu
        Then Check if the 'Delivered to' column was removed from view        
        And Selects All columns option in dropdown columns

        When 'Unselects' the 'Storage Entity' column in Columns menu
        Then Check if the 'Storage Entity' column was removed from view
        When 'Unselects' the 'Storage' column in Columns menu
        Then Check if the 'Storage' column was removed from view
        When 'Unselects' the 'Position Number' column in Columns menu
        Then Check if the 'Position Number' column was removed from view
        When 'Unselects' the 'Date to Return' column in Columns menu
        Then Check if the 'Date to Return' column was removed from view
        And Selects All columns option in dropdown columns
        

    Scenario Outline: Filter Key-sets to Return by the Asset Id column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'assetId' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'assetId' Name column filter
        Then The datatable should show the currency items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'assetId' column applied

        Examples:
            | filterType            | dataToSearch  |
            | Equals to             | 97862         |
            | Less than or equal    | 96775         |
            | Less than             | 96775         |
            | Different from        | 96775         |
            | Greater than or equal | 96775         | 
            | Greater than          | 96775         | 
        

    Scenario Outline: Filter Key-sets to Return by the KeySet Id column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'keySetId' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'keySetId' Name column filter
        Then The datatable should show the currency items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'keySetId' column applied

        Examples:
            | filterType            | dataToSearch   |
            | Equals to             | 118813         |
            | Less than or equal    | 119044         |
            | Less than             | 119044         |
            | Different from        | 119044         |
            | Greater than or equal | 119044         | 
            | Greater than          | 119044         | 


    Scenario Outline: Filter Key-sets to Return by the Position Number column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'keySafeStoragePositionNumber' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'keySafeStoragePositionNumber' Name column filter
        Then The datatable should show the currency items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'keySafeStoragePositionNumber' column applied

        Examples:
            | filterType            | dataToSearch  |
            | Equals to             | 1931          |
            | Less than or equal    | 1187          |
            | Less than             | 1187          |
            | Different from        | 1187          |
            | Greater than or equal | 1077          | 
            | Greater than          | 1077          | 


    Scenario Outline: Filter Key-sets to Return by the Previous Asset Id column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'previousAssetIdentifier' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'previousAssetIdentifier' Name column filter
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'previousAssetIdentifier' column applied

        Examples:
            | filterType     | dataToSearch  |
            | Equals to      | 10-P13-000118 |
            | Different from | 10-P13-000118 |
            | Ends with      | 0118          |
            | Starts with    | C9-P01        |
            | Contains       | P01           | 
            | Is empty       |               | 


    Scenario Outline: Filter Key-sets to Return by the Storage Entity column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'entityName' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'entityName' Name column filter
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'entityName' column applied

        Examples:
            | filterType     | dataToSearch                  |
            | Equals to      | Whitestar Asset Solutions, SA |
            | Different from | Arrow                         |
            | Ends with      | Solutions, SA                 |
            | Starts with    | Whitestar                     |
            | Contains       | Asset Solutions               | 


    Scenario Outline: Filter Key-sets to Return by the Storage column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'keySafeStorageName' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'keySafeStorageName' Name column filter
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'keySafeStorageName' column applied

        Examples:
            | filterType     | dataToSearch |
            | Equals to      | Armário      |
            | Different from | Armário      |
            | Ends with      | Cofre 1      |
            | Starts with    | Lisboa       |
            | Contains       | Cofre        | 


    Scenario Outline: Filter Key-sets to Return by the '<filter>' Status field
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Status field of the Key-sets to Return table screen
        Then Only Key-sets to Return with this '<filter>' Status should displayed in the list

        Examples:
            | filter |
            | REO    |
            | CLOSED |


    Scenario Outline: Filter Key-sets to Return by the '<filter>' Status field
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Delivered to field of the Key-sets to Return table screen
        Then Only Key-sets to Return with this '<filter>' Delivered to should displayed in the list

        Examples:
            | filter         |
            | Andre Tonel    |
            | Marco Malheiro |


    Scenario Outline: Filter Key-sets to Return by the Date to Return column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'expectedDateToReturn' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Selects '<dayToSelect>' to be searched in the 'expectedDateToReturn' Date Name column filter
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'expectedDateToReturn' column applied

        Examples:
            | filterType            | dayToSelect |
            | Different from        | 2023-09-14  |            
            | Equals to             | 2023-09-14  |
            | Less than             | 2024-04-15  |
            | Greater than or equal | 2023-09-14  |
            | Greater than          | 2023-09-14  | 
            | Less than or equal    | 2024-04-15  | 
        