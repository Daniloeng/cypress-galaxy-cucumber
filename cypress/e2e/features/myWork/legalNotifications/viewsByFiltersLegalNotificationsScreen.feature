Feature: Legal Notifications - Filters on Legal Notifications screen

  This Feature is a automated test to view in Filters in Legal Notifications screen

  Background:
    Given As a user logged in 'legalnotification' screen
    And 'Legal Notifications' table is loaded
    When Selects All columns option in dropdown columns
    And Selects 'LT Team' on Show Dropdown Menu
    And Clicks on Global Filter button of the table


  # Scenario Outline: Filter Legal Notifications by the '<filter>' Status field
  #   When Filters by '<filter>' in the Status field of the Legal Notifications table screen
  #   And Wait for filter applied in the Legal Notifications table
  #   Then Only Legal Notifications with this '<filter>' Status should displayed in the list

  #   Examples:
  #     | filter             |
  #     | New                |
  #     | Finance Department | bug https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20128?workitem=158945
      

  Scenario Outline: Filter Legal Notifications by the '<filter>' Status Reason field
    When Filters by '<filter>' in the Status Reason field of the Legal Notifications table screen
    And Wait for filter applied in the Legal Notifications table
    Then Only Legal Notifications with this '<filter>' Status Reason should displayed in the list

    Examples:
      | filter                                     |
      | Aguarda existência do registo de pagamento |


  Scenario Outline: Filter Legal Notifications by the '<filter>' Document Type field
    When Filters by '<filter>' in the Document Type field of the Legal Notifications table screen
    And Wait for filter applied in the Legal Notifications table
    Then Only Legal Notifications with this '<filter>' Document Type should displayed in the list

    Examples:
      | filter                     |
      | Custas de Parte            |
      | Pagamentos a Tribunais     |
      | Pagamentos a Solicitadores |


  Scenario Outline: Filter Legal Notifications by the '<filter>' Portfolio Group field
    When Filters by '<filter>' in the Portfolio Group field of the Legal Notifications table screen
    And Wait for filter applied in the Legal Notifications table
    Then Only Legal Notifications with this '<filter>' Portfolio Group should displayed in the list

    Examples:
      | filter          |
      | Arrow (GC)      |
      | Hefesto (Snipe) |
      

  Scenario Outline: Filter Legal Notifications by the '<filter>' Assignees field
    When Filters by '<filter>' in the Assignees field of the Legal Notifications table screen
    And Wait for filter applied in the Legal Notifications table
    Then Only Legal Notifications with this '<filter>' Assignees should displayed in the list

    Examples:
      | filter         |
      | Legal Treasury |
      | Legal Support  |
  

  Scenario Outline: Filter Legal Notifications by the '<filter>' Priority field
    When Filters by '<filter>' in the Priority field of the Legal Notifications table screen
    And Wait for filter applied in the Legal Notifications table
    Then Only Legal Notifications with this '<filter>' Priority should displayed in the list

    Examples:
      | filter |
      | High   |
      | Medium |


  Scenario Outline: Filter Legal Notifications by the Legal Case Number column with the filter '<filterType>'
    And Wait for the Legal Notifications table loaded
    When Clicks on the filter option in the 'legalCaseNumber' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'legalCaseNumber' Name column filter
    And Wait for filter applied in the Legal Notifications table
    Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'legalCaseNumber' column applied

    Examples:
      | filterType     | dataToSearch     |
      | Different from | 24/24.2T8STS     |
      | Contains       | 2T8STS           |
      | Starts with    | 24/24            |
      | Equals to      | 10639/19.5T8PRT  |
      | Ends with      | PRT              |
      # # | Is empty       |              |
      

  Scenario Outline: Filter Legal Notifications by the Supplier column with the filter '<filterType>'
    And 'Unselects' the 'Amount' column in Columns menu
    And 'Unselects' the 'Document Type' column in Columns menu
    And 'Unselects' the 'Status Reason' column in Columns menu
    And 'Unselects' the 'Payment Id' column in Columns menu
    And 'Unselects' the 'Payment Type' column in Columns menu
    
    And Wait for the Legal Notifications table loaded
    When Clicks on the filter option in the 'supplierDescription' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'supplierDescription' Name column filter
    And Wait for filter applied in the Legal Notifications table
    Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'supplierDescription' column applied

    Examples:
      | filterType     | dataToSearch     |
      | Different from | Leonor Bentinho  |
      | Contains       | Nacional de      |
      | Equals to      | Filipa Cordeiro  |
      | Ends with      | Cordeiro         |
      | Starts with    | Filipa           |
      # | Is empty       |                |


  Scenario Outline: Filter Legal Notifications by the Request Date column with the filter '<filterType>'
    And 'Unselects' the 'Amount' column in Columns menu
    And 'Unselects' the 'Supplier' column in Columns menu
    And 'Unselects' the 'Status Reason' column in Columns menu
    And 'Unselects' the 'Payment Id' column in Columns menu
    And 'Unselects' the 'Payment Type' column in Columns menu
    
    And Wait for the Legal Notifications table loaded
    When Clicks on the filter option in the 'created' Date column
    And Selects the '<filterType>' option in the dropdown-menu
    And Selects '<dataToSearch>' to be searched in the 'created' Date Name column filter
    And Wait for filter applied in the Legal Notifications table
    Then The datatable should show the date items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'created' column applied

    Examples:
      | filterType            | dataToSearch |
      | Different from        | 2024-10-25    |
      | Equals to             | 2024-10-25   |
      | Less than             | 2024-10-25   |
      | Less than or equal    | 2024-10-25   |
      | Greater than          | 2024-10-25   |
      | Greater than or equal | 2024-10-25   |
      # | Is empty              |              |
