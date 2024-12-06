Feature: Assets - Filters on Assets screen

  This Feature is a automated test to view in Filters in Assets screen

  Background:
    Given As a user logged in 'assets' screen
    And Selects 'Table' in View
    And 'Assets' table is loaded
    And Selects All columns option in dropdown columns
    And Clicks on Global Filter button of the table

  Scenario Outline: Filter Assets by the '<filter>' Id field
    When Filters by '<filter>' in the Id field of the Asset table screen
    Then Only Asset with this '<filter>' Id should displayed in the list

    Examples:
      | filter |
      | 130    |
      | 152    |


  Scenario Outline: Filter Assets by the '<filter>' Type field
    When Filters by '<filter>' in the Type field of the Asset table screen
    Then Only Assets with this '<filter>' Type should displayed in the list

    Examples:
      | filter      |
      | Car         |
      | Residential |


  Scenario: Ascending Order Assets by the 'Id' Column
    When Aligns the Asset table by the 'Id' column in Ascending order
    Then The Assets should presented in Ascending order


  Scenario: Descending Order Assets by the 'Id' Column
    When Aligns the Asset table by the 'Id' column in Descending order
    Then The Assets should presented in Descending order

  Scenario Outline: Filter Assets by the '<filter>' Portfolio field
    When Filters by '<filter>' in the Portfolio field of the Asset table screen
    Then Only Assets with this '<filter>' Portfolio should displayed in the list

    Examples:
      | filter    |
      | Badajoz   |
      | Primestar |


  Scenario Outline: Filter Assets by the '<filter>' Reason field
    When Filters by '<filter>' in the Reason field of the Asset table screen
    Then Only Assets with this '<filter>' Reason should displayed in the list

    Examples:
      | filter     |
      | For Sale   |
      | Marketable |


  Scenario: Ascending Order Assets by the 'Type' Column
    And 'Unselects' the 'Type' column in Columns menu
    And Selects All columns option in dropdown columns
    When Aligns the Asset table by the 'Type' column in Ascending order
    Then The texts Assets should presented in Ascending order


  Scenario: Descending Order Assets by the 'Type' Column
    And 'Unselects' the 'Type' column in Columns menu
    And Selects All columns option in dropdown columns
    When Aligns the Asset table by the 'Type' column in Descending order
    Then The texts Assets should presented in Descending order


  Scenario Outline: Filter Assets by the Originator column with the filter '<filterType>'
    And Wait for filter in the Asset table
    When Clicks on the filter option in the 'originatorAssetName' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'originatorAssetName' Name column filter
    And Wait for filter applied in the Asset table
    Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'originatorAssetName' column applied

    Examples:
      | filterType     | dataToSearch    |
      | Different from | BEST BANK       |
      | Contains       | MONTEPIO GERAL  |
      | Starts with    | BANCO SANTANDER |
      | Equals to      | BCP             |
      | Ends with      | CGD             |
      # | Is empty       |                 |


  Scenario Outline: Filter Assets by the Originator Id column with the filter '<filterType>'
    And Wait for filter in the Asset table
    When Clicks on the filter option in the 'originatorAssetId' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'originatorAssetId' Name column filter
    And Wait for filter applied in the Asset table
    Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'originatorAssetId' column applied

    Examples:
      | filterType     | dataToSearch     |
      | Different from | 0990000099999999 |
      | Contains       | 90010010002      |
      | Starts with    | 0689             |
      | Equals to      | 0689001001000206 |
      | Ends with      | 206              |
      | Is empty       |                  |


  Scenario Outline: Filter Assets by the Previous Asset Id column with the filter '<filterType>'
    And Wait for filter in the Asset table
    When Clicks on the filter option in the 'previousAssetIdentifier' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'previousAssetIdentifier' Name column filter
    And Wait for filter applied in the Asset table
    Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'previousAssetIdentifier' column applied

    Examples:
      | filterType     | dataToSearch  |
      | Different from | 11-001--00000 |
      | Contains       | 9-P01         |
      | Starts with    | 19-P01        |
      | Equals to      | 19-P01-001982 |
      | Ends with      | 5685          |
      # | Is empty       |               |


  Scenario Outline: Filter Assets by the Owner Tax Number column with the filter '<filterType>'
    And Wait for filter in the Asset table
    When Clicks on the filter option in the 'taxNumber' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'taxNumber' Name column filter
    And Wait for filter applied in the Asset table
    Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'taxNumber' column applied

    Examples:
      | filterType     | dataToSearch |
      | Different from | 000174022    |
      | Contains       | 417402       |
      | Equals to      | 144174022    |
  # | Starts with    | 11           | # Is commented because there is a bug https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_workitems/edit/121845/
  # | Ends with   | 2             | # Is commented because there is a bug https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_workitems/edit/121845/
  # | Is empty       |              | # Is commented because there is a bug https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_workitems/edit/121845/


  Scenario Outline: Filter Assets by the Status Date column with the filter '<filterType>'
    And Wait for filter in the Asset table
    When Clicks on the filter option in the 'assetStatusDate' Date column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'assetStatusDate' Date Name column filter
    And Wait for filter applied in the Asset table
    Then The datatable should show the date items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'assetStatusDate' column applied

    Examples:
      | filterType            | dataToSearch |
      | Equals to             | 2022-06-27   |
      | Different from        | 2022-06-27   |
      | Less than             | 2023-06-27   |
      | Less than or equal    | 2023-06-27   |
      | Is empty              |              |
      | Greater than          | 2022-10-07   |
      | Greater than or equal | 2022-10-27   |
