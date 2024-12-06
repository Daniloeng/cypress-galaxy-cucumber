Feature: Services - Views - Key Safe Storages

  This Feature is a automated test to see the different views of Key Safe Storages page

  Background:
      Given As a user logged in 'keysafestorages' screen
      When Selects All columns option in dropdown columns


  Scenario: Unselects Key Safe Storages columns and verify view
      When 'Unselects' the '% Occupancy' column in Columns menu
      Then Check if the '% Occupancy' column was removed from view
      When 'Unselects' the 'Description' column in Columns menu
      Then Check if the 'Description' column was removed from view
      When 'Unselects' the 'Key Location' column in Columns menu
      Then Check if the 'Key Location' column was removed from view

      And Selects All columns option in dropdown columns

      When 'Unselects' the 'Key Storage Entity' column in Columns menu
      Then Check if the 'Key Storage Entity' column was removed from view
      When 'Unselects' the 'Name' column in Columns menu
      Then Check if the 'Name' column was removed from view
      When 'Unselects' the 'Total Position' column in Columns menu
      Then Check if the 'Total Position' column was removed from view
      
      And Selects All columns option in dropdown columns


  Scenario Outline: Filter Key Safe Storages by the Name column with the filter '<filterType>'
      When Clicks on Global Filter button of the table
      And Wait for the Key Safe Storage table loaded
      And Clicks on the filter option in the 'name' column
      And Selects the '<filterType>' option in the dropdown-menu
      And Writes '<dataToSearch>' to be searched in the 'name' Name column filter
      Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'name' column applied

      Examples:
          | filterType     | dataToSearch |
          | Different from | Armário      |
          | Contains       | Lisboa       |
          | Starts with    | Lisboa       |
          | Equals to      | Armário      |
          | Ends with      | Cofre 2      |


  Scenario Outline: Filter Key Safe Storages by the Description column with the filter '<filterType>'
      When Clicks on Global Filter button of the table
      And Wait for the Key Safe Storage table loaded
      And Clicks on the filter option in the 'description' column
      And Selects the '<filterType>' option in the dropdown-menu
      And Writes '<dataToSearch>' to be searched in the 'description' Name column filter
      Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'description' column applied

      Examples:
          | filterType     | dataToSearch |
          | Different from | Armário      |
          | Contains       | Lisboa       |
          | Starts with    | Lisboa       |
          | Equals to      | Armário      |
          | Ends with      | Cofre 2      |


  Scenario Outline: Filter Key Safe Storages by the Key Storages Entity column with the filter '<filterType>'
      When Clicks on Global Filter button of the table
      And Wait for the Key Safe Storage table loaded
      And Clicks on the filter option in the 'entityName' column
      And Selects the '<filterType>' option in the dropdown-menu
      And Writes '<dataToSearch>' to be searched in the 'entityName' Name column filter
      Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'entityName' column applied

      Examples:
          | filterType     | dataToSearch                       |
          | Different from | Arrow                              |
          | Contains       | Solutions                          |
          | Starts with    | Whitestar                          |
          | Equals to      | Whitestar Asset Solutions, SA      |
          | Ends with      | SA                                 |


  Scenario Outline: Filter Key Safe Storages by the '<filter>' Key Location field
      When Clicks on Global Filter button of the table
      And Wait for the Key Safe Storage table loaded
      And Filters by '<filter>' in the Key Location field of the Key Safe Storage table screen
      Then Only Key Safe Storage with this '<filter>' key location should displayed in the list

      Examples:
          | filter |
          | Porto  |
          | Lisbon |


   Scenario Outline: Filter Key Safe Storages by the Amount column with the filter '<filterType>'
      When Clicks on Global Filter button of the table
      And Wait for the Key Safe Storage table loaded
      And Clicks on the filter option in the 'totalPositions' column
      And Selects the '<filterType>' option in the dropdown-menu
      And Writes '<dataToSearch>' to be searched in the 'totalPositions' Name column filter
      Then The datatable should show the currency items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'totalPositions' column applied

      Examples:
          | filterType            | dataToSearch |
          | Equals to             | 1170         |
          | Less than or equal    | 1170         |
          | Less than             | 1170         |
          | Different from        | 1439         |
          | Greater than or equal | 999          | 
          | Greater than          | 1170         | 
