Feature: Transactions - Filters on Transactions screen

  This Feature is a automated test to view in Filters in Transactions screen

  Background:
    Given As a user logged in 'transactions' screen
    And 'All' table is loaded
    And Wait for filter in the Transactions table
    When Selects All columns option in dropdown columns
    And Clicks on Global Filter button of the table

  Scenario Outline: Filter Transactions by the '<filter>' Id field
    When Filters by '<filter>' in the Id field of the Transactions table screen
    And Wait for filter applied in the Transactions table
    Then Only Transactions with this '<filter>' Id should displayed in the list

    Examples:
      | filter    |
      | 315674684 |
      | 315674678 |


  Scenario Outline: Filter Transactions by the '<filter>' Group field
    And 'Unselects' the 'Beneficiary' column in Columns menu
    And 'Unselects' the 'Effective Allocation' column in Columns menu
    And 'Unselects' the 'Fee Amount' column in Columns menu
    And 'Unselects' the 'Gross Amount' column in Columns menu
    And 'Unselects' the 'Identification' column in Columns menu
    And 'Unselects' the 'Is Interim Transaction' column in Columns menu
    And 'Unselects' the 'Performed By Manager' column in Columns menu

    When Filters by '<filter>' in the Group field of the Transactions table screen
    And Wait for filter applied in the Transactions table
    Then Only Transactions with this '<filter>' Group should displayed in the list

    Examples:
      | filter      |
      | Adjustments |
      | Collections |
      | Expenses    |
      # | Interest    |


  Scenario Outline: Filter Transactions by the '<filter>' Type field
      And 'Unselects' the 'Beneficiary' column in Columns menu
      And 'Unselects' the 'Effective Allocation' column in Columns menu
      And 'Unselects' the 'Fee Amount' column in Columns menu
      And 'Unselects' the 'Gross Amount' column in Columns menu
      And 'Unselects' the 'Identification' column in Columns menu
      And 'Unselects' the 'Is Interim Transaction' column in Columns menu
      And 'Unselects' the 'Performed By Manager' column in Columns menu

      When Filters by '<filter>' in the Type field of the Transactions table screen
      And Wait for filter applied in the Transactions table
      Then Only Transactions with this '<filter>' Type should displayed in the list

      Examples:
          | filter                          |
          | Legal Payment                   |
          | Transfer Between Accounts       |
          | Comissões Bancárias (Bank Fees) |


  Scenario Outline: Filter Transactions by the Gross Amount column with the filter '<filterType>'
    When Filters by 'Collections' in the Group field of the Transactions table screen
    And Wait for filter applied in the Transactions table

    When Clicks on the filter option in the 'grossAmount' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'grossAmount' Name column filter
    And Wait for filter applied in the Transactions table
    Then The datatable should show the currency items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'grossAmount' column applied

    Examples:
        | filterType            | dataToSearch |
        | Equals to             | 1000         |
        | Less than or equal    | 100000       |
        | Less than             | 100000       |
        | Different from        | 100000       |
        | Is empty              |              |
        | Greater than or equal | 1000         | 
        | Greater than          | 1000         | 

  Scenario Outline: Filter Transactions by the Entry Date column with the filter '<filterType>'
      When Clicks on the filter option in the 'entryDate' Date column
      And Selects the '<filterType>' option in the dropdown-menu
      And Writes '<dayToSelect>' to be searched in the 'entryDate' Date Name column filter
      And Wait for filter applied in the Transactions table
      Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'entryDate' column applied

      Examples:
          | filterType            | dayToSelect |
          | Different from        | 2023-01-07  |            
          | Equals to             | 2023-01-07  |
          | Less than             | 2023-01-07  |
          | Less than or equal    | 2023-01-07  | 
          | Greater than or equal | 2023-01-07  |
          | Greater than          | 2023-01-07  | 
        #   | Is empty              |             |


  Scenario Outline: Filter Transactions by the Posted Date column with the filter '<filterType>'
      When Clicks on the filter option in the 'postedDate' Date column
      And Selects the '<filterType>' option in the dropdown-menu
      And Selects '<dayToSelect>' to be searched in the 'postedDate' Date Name column filter
      And Wait for filter applied in the Transactions table
      Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'postedDate' column applied

      Examples:
          | filterType            | dayToSelect |
          | Different from        | 2023-01-07  |            
          | Equals to             | 2023-01-07  |
          | Less than             | 2023-01-07  |
          | Greater than or equal | 2023-01-07  |
          | Greater than          | 2023-01-07  | 
        #   | Less than or equal    | 2024-06-07  | 
        #   | Is empty              |             |

   
   Scenario Outline: Filter Transactions by the '<filter>' Type field
      And 'Unselects' the 'Beneficiary' column in Columns menu
      And 'Unselects' the 'Effective Allocation' column in Columns menu
      And 'Unselects' the 'Fee Amount' column in Columns menu
      And 'Unselects' the 'Gross Amount' column in Columns menu
      And 'Unselects' the 'Identification' column in Columns menu
      And 'Unselects' the 'Is Interim Transaction' column in Columns menu
      And 'Unselects' the 'Performed By Manager' column in Columns menu
      And 'Unselects' the 'Type' column in Columns menu

      When Filters by '<filter>' in the Posted By field of the Transactions table screen
      And Wait for filter applied in the Transactions table
      Then Only Transactions with this '<filter>' Posted By should displayed in the list

      Examples:
          | filter          |
          | Daniela Pereira |
          | Ricardo Casaca  | 



  Scenario Outline: Filter Transactions by the CashFlow Id column with the filter '<filterType>'
      When Clicks on the filter option in the 'cashFlowId' column
      And Selects the '<filterType>' option in the dropdown-menu
      And Writes '<dataToSearch>' to be searched in the 'cashFlowId' Name column filter
      And Wait for filter applied in the Transactions table
      Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'cashFlowId' column applied

      Examples:
          | filterType     | dataToSearch |
          | Starts with    | 1192         |
          | Contains       | 119204       |
          | Equals to      | 1192042      | 
          | Ends with      | 5905         | 
          | Different from | 1255905      | 
          | Is empty       |              | 
  

  Scenario Outline: Filter Transactions by the Customer Case Id column with the filter '<filterType>'
      And 'Unselects' the 'Beneficiary' column in Columns menu
      And 'Unselects' the 'Effective Allocation' column in Columns menu
      And 'Unselects' the 'Fee Amount' column in Columns menu
      And 'Unselects' the 'Gross Amount' column in Columns menu
      And 'Unselects' the 'Identification' column in Columns menu
      And 'Unselects' the 'Is Interim Transaction' column in Columns menu
      And 'Unselects' the 'Performed By Manager' column in Columns menu

      When Clicks on the filter option in the 'customerCaseId' column
      And Selects the '<filterType>' option in the dropdown-menu
      And Writes '<dataToSearch>' to be searched in the 'customerCaseId' Name column filter
      And Wait for filter applied in the Transactions table
      Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'customerCaseId' column applied

      Examples:
          | filterType     | dataToSearch |
          | Contains       | 60040        |
          | Starts with    | 6004         |
          | Equals to      | 2636385      |
          | Ends with      | 6385         | 
          | Different from | 2636385      | 
          | Is empty       |              | 



  Scenario Outline: Filter Transactions by the Bank Account column with the filter '<filterType>'
      When Clicks on the filter option in the 'bankAccountName' column
      And Selects the '<filterType>' option in the dropdown-menu
      And Writes '<dataToSearch>' to be searched in the 'bankAccountName' Name column filter
      And Wait for filter applied in the Transactions table
      Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'bankAccountName' column applied

      Examples:
          | filterType     | dataToSearch   |
          | Contains       | SPEAR          |
          | Starts with    | ETAPA          |
          | Equals to      | SPEAR (AURORA) |
          | Ends with      | YATCH          | 
          | Different from | SPEAR (AURORA) | 
          | Is empty       |                | 


  Scenario Outline: Filter Transactions by the Beneficiary column with the filter '<filterType>'
      When Clicks on the filter option in the 'beneficiaryName' column
      And Selects the '<filterType>' option in the dropdown-menu
      And Writes '<dataToSearch>' to be searched in the 'beneficiaryName' Name column filter
      And Wait for filter applied in the Transactions table
      Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'beneficiaryName' column applied

      Examples:
          | filterType     | dataToSearch           |
          | Contains       | Merecido               |
          | Starts with    | ETAPA                  |
          | Equals to      | Merecido Exemplo, S.A. |
          | Ends with      | Unipessoal lda         | 
          | Different from | Merecido Exemplo, S.A. | 
          | Is empty       |              | 


  Scenario Outline: Filter Transactions by the '<filter>' Is Interim Transaction field
      When Filters by '<filter>' in the Is Interim Transaction field of the Transactions table screen
      And Wait for filter applied in the Transactions table
      Then Only Transactions with this '<filter>' Is Interim Transaction should displayed in the list

      Examples:
          | filter |
          | Yes    |
          | No     |


  Scenario Outline: Filter Transactions by the '<filter>' Effective Allocation field
      When Filters by '<filter>' in the Effective Allocation field of the Transactions table screen
      And Wait for filter applied in the Transactions table
      Then Only Transactions with this '<filter>' Effective Allocation should displayed in the list

      Examples:
          | filter |
          | Yes    |
          | No     |
