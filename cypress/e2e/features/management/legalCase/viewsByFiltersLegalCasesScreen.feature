Feature: Legal Cases - Filters on Legal Cases screen

  This Feature is a automated test to view in Filters in Legal Cases screen

  Background:
    Given As a user logged in 'legalcases' screen
    When Selects 'Table' in View
    And 'Legal Cases' table is loaded
    And Selects All columns option in dropdown columns
    And Clicks on Global Filter button of the table


  Scenario: Ascending Order Legal Cases by the 'Number' Column
    When Aligns the Legal Cases table by the 'Number' column in Ascending order
    Then The texts Number should presented in Ascending order


  Scenario: Descending Order Legal Cases by the 'Number' Column
    When Aligns the Legal Cases table by the 'Number' column in Descending order
    Then The texts Number should presented in Descending order



  Scenario Outline: Filter Legal Cases by the '<filter>' Legal Case Type field
    When Filters by '<filter>' in the Legal Case Type field of the Legal Cases table screen
    Then Only Legal Cases with this '<filter>' Type should displayed in the list

    Examples:
      | filter      |
      | Foreclosure |
      | Injunction  |
      | Tax         |


  Scenario: Ascending Order Legal Cases by the 'Legal Case Type' Column
    And 'Unselects' the 'Legal Case Type' column in Columns menu
    And Selects All columns option in dropdown columns
    When Aligns the Legal Cases table by the 'Legal Case Type' column in Ascending order
    Then The texts Legal Case Type should presented in Ascending order


  Scenario: Descending Order Legal Cases by the 'Legal Case Type' Column
    And 'Unselects' the 'Legal Case Type' column in Columns menu
    And Selects All columns option in dropdown columns
    When Aligns the Legal Cases table by the 'Legal Case Type' column in Descending order
    Then The texts Legal Case Type should presented in Descending order


  Scenario Outline: Filter Legal Cases by the Legal Cases Type column with the filter '<filterType>'
    And Wait for filter in the Legal Cases table
    When Clicks on the filter option in the 'number' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'number' Name column filter
    And Wait for filter applied in the Legal Cases table
    Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'number' column applied

    Examples:
      | filterType     | dataToSearch     |
      | Different from | 2999912021       |
      | Contains       | 1212             |
      | Starts with    | 1212             |
      | Equals to      | 3565200901023888 |
      | Ends with      | 2121             |
      # | Is empty       |                 |


  Scenario Outline: Filter Legal Cases by the Court column with the filter '<filterType>'
    And Wait for filter in the Legal Cases table
    When Clicks on the filter option in the 'courtDescription' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'courtDescription' Name column filter
    And Wait for filter applied in the Legal Cases table
    Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'courtDescription' column applied

    Examples:
      | filterType     | dataToSearch                                  |
      | Different from | Porto - Tribunal Judicial da Comarca do Porto |
      | Contains       | Nacional                                      |
      | Starts with    | Montemor                                      |
      | Equals to      | Comarca do Porto-Porto-Unidade Central        |
      | Ends with      | Braga                                         |
      # | Is empty       |                                               |


  Scenario Outline: Filter Legal Cases by the Id column with the filter '<filterType>'
    And Wait for filter in the Legal Cases table
    And 'Unselects' the 'Id' column in Columns menu
    And 'Selects' the 'Id' column in Columns menu
    When Clicks on the filter option in the 'id' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'id' Name column filter
    And Wait for filter applied in the Legal Cases table
    Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'id' column applied

    Examples:
      | filterType     | dataToSearch |
      | Different from | 60           |
      | Contains       | 59           |
      | Starts with    | 51           |
      | Equals to      | 50           |
      | Ends with      | 54           |
      # | Is empty       |               |


  Scenario Outline: Filter Legal Cases by the Unit column with the filter '<filterType>'
    And Wait for filter in the Legal Cases table
    When Clicks on the filter option in the 'unitDescription' column
    And Selects the '<filterType>' option in the dropdown-menu
    And Writes '<dataToSearch>' to be searched in the 'unitDescription' Name column filter
    And Wait for filter applied in the Legal Cases table
    Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'unitDescription' column applied

    Examples:
      | filterType     | dataToSearch                        |
      | Different from | Porto - Juízo de Execução - Juiz 3  |
      | Contains       | Vila Franca                         |
      | Equals to      | Vila Verde - Juízo Local Cível      |
      | Starts with    | Porto                               | 
      | Ends with      | Juiz 4                              | 
      | Is empty       |                                     |
