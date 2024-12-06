Feature: Payment Request - Filters and Columns in In Draft tab on Payment Request screen

    This Feature is a automated test to Filters and Columns on Payment Request screen

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
         And 'In Draft' table is loaded
        And Set '2197' testUserId on Local storage
        And Wait for the Payment Request table loaded
        And Selects 'In Draft' tab on the Payment Request table screen
        And Selects All columns option in dropdown columns


    Scenario: Unselect and check Columns on the Payment Request screen
        And 'Unselects' the 'Amount' column in Columns menu
        Then Check if the 'Amount' column was removed from view
        And 'Unselects' the 'Assignee' column in Columns menu
        Then Check if the 'Assignee' column was removed from view
        And 'Unselects' the 'Comment' column in Columns menu
        Then Check if the 'Comment' column was removed from view
        And 'Unselects' the 'Payment Date' column in Columns menu
        Then Check if the 'Payment Date' column was removed from view
        And 'Unselects' the 'Payment Id' column in Columns menu
        Then Check if the 'Payment Id' column was removed from view
        And 'Unselects' the 'Payment Reference' column in Columns menu
        Then Check if the 'Payment Reference' column was removed from view
        And 'Unselects' the 'Portfolios' column in Columns menu
        Then Check if the 'Portfolios' column was removed from view

        And Selects All columns option in dropdown columns

        And 'Unselects' the 'Portfolios' column in Columns menu
        Then Check if the 'Portfolios' column was removed from view
        And 'Unselects' the 'Service Type' column in Columns menu
        Then Check if the 'Service Type' column was removed from view
        And 'Unselects' the 'Status' column in Columns menu
        Then Check if the 'Status' column was removed from view
        And 'Unselects' the 'Supplier' column in Columns menu
        Then Check if the 'Supplier' column was removed from view
        And 'Unselects' the 'Status Date' column in Columns menu
        Then Check if the 'Status Date' column was removed from view
        And 'Unselects' the 'Type' column in Columns menu
        Then Check if the 'Type' column was removed from view
        And 'Unselects' the 'Payment Context' column in Columns menu
        Then Check if the 'Payment Context' column was removed from view
        And 'Unselects' the 'Rejected' column in Columns menu
        Then Check if the 'Rejected' column was removed from view


    Scenario Outline: Filter Payment Request by the '<filter>' Status field
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Payment Request table
        And Filters by '<filter>' in the Status field of the Payment Request table screen
        Then Only Payment Request with this '<filter>' status should displayed in the list

        Examples:
            | filter    |
            | New       |
            | Archived  |


    Scenario Outline: Filter Payment Request by the '<filter>' Service Type field
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Payment Request table
        And Filters by '<filter>' in the Service Type field of the Payment Request table screen
        Then Only Payment Request with this '<filter>' service type should displayed in the list

        Examples:
            | filter    |
            | Solicitor |
            | Other     |


    Scenario Outline: Filter Payment Request by the '<filter>' Rejected field
        And Wait for filter applied in the Payment Request table
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Rejected field of the Payment Request table screen
        Then Only Payment Request with this '<filter>' rejected should displayed in the list

        Examples:
            | filter |
            | Yes    |
            | No     |


    Scenario Outline: Filter Payment Request by the '<filter>' Portfolio field
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Payment Request table
        And Filters by '<filter>' in the Portfolio field of the Payment Request table screen
        Then Only Payment Request with this '<filter>' portfolio should displayed in the list

        Examples:
            | filter                                       |
            | VBES                                         |
            | Hefesto (Carter Subparticipation e Pending)  |


    Scenario Outline: Filter Payment Request by the '<filter>' Payment Context field
        And Wait for filter applied in the Payment Request table
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Payment Context field of the Payment Request table screen
        Then Only Payment Request with this '<filter>' payment context should displayed in the list

        Examples:
            | filter              |
            | Asset               |
            | Customer Case       |
            | Debt                |
            | Legal Case Instance |


    Scenario Outline: Filter Payment Request by the Payment Date column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Payment Request table
        And Clicks on the filter option in the 'paymentDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Selects '<dayToSelect>' to be searched in the 'paymentDate' Date Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'paymentDate' column applied

        Examples:
            | filterType            | dayToSelect |
            | Different from        | 2023-02-15  |            
            # | Equals to             | 2023-02-15  |
            # | Less than             | 2023-02-15  |
            # | Greater than or equal | 2023-02-15  |
            # | Greater than          | 2023-02-15  | 
            # | Less than or equal    | 2023-02-15  | 
            # | Is empty              |             |
            # Is commented because there is a bug

 
    Scenario Outline: Filter Payment Request by the Status Date column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Payment Request table
        And Clicks on the filter option in the 'statusDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Selects '<dayToSelect>' to be searched in the 'statusDate' Date Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'statusDate' column applied

        Examples:
            | filterType            | dayToSelect |
            | Different from        | 2023-02-10  |            
            | Equals to             | 2023-02-10  |
            # | Less than             | 2023-02-10  |
            # | Greater than or equal | 2023-02-10  |
            # | Greater than          | 2023-02-10  | 
            # | Less than or equal    | 2023-02-10  | 
            # | Is empty              |             | 
            # Is commented because there is a bug


    Scenario Outline: Filter Payment Request by the Amount column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Payment Request table
        And Clicks on the filter option in the 'amount' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'amount' Name column filter
        Then The datatable should show the currency items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'amount' column applied

        Examples:
            | filterType            | dataToSearch |
            | Equals to             | 70.00        |
            | Less than or equal    | 500.00       |
            | Less than             | 500.00       |
            | Different from        | 500.00       |
            | Is empty              |              |
            | Greater than or equal | 500.00       | 
            | Greater than          | 500.00       | 


    Scenario Outline: Filter Payment Request by the Payment Id column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Payment Request table
        And Clicks on the filter option in the 'id' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'id' Name column filter
        Then The datatable should show the currency items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'id' column applied

        Examples:
            | filterType            | dataToSearch  |
            | Equals to             | 1533966       |
            | Less than or equal    | 1533966       |
            | Less than             | 1607208       |
            | Different from        | 1533966       |
            | Greater than or equal | 1533966       | 
            | Greater than          | 1533966       | 


    Scenario Outline: Filter Payment Request by the Payment Reference column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for the Payment Request table loaded
        And Clicks on the filter option in the 'paymentReference' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'paymentReference' Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'paymentReference' column applied

        Examples:
            | filterType     | dataToSearch              |
            | Different from | PT50000700000032711930923 |
            | Contains       | 70000003                  |
            | Starts with    | PT5000070                 |
            | Equals to      | PT50000700000032711930923 |
            | Ends with      | 0923                      |
            | Is empty       |                           | 


    Scenario Outline: Filter Payment Request by the Supplier column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for the Payment Request table loaded
        And Clicks on the filter option in the 'supplier' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'supplier' Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'supplier' column applied

        Examples:
            | filterType     | dataToSearch                               |
            | Different from | Comarca de Coimbra-Coimbra-Unidade Central |
            | Contains       | de Coimbra                                 |
            | Starts with    | Comarca de Coimbra                         |
            | Equals to      | Comarca de Coimbra-Coimbra-Unidade Central |
            | Ends with      | Central                                    |


    Scenario Outline: Filter Payment Request by the Assignee column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for the Payment Request table loaded
        And Clicks on the filter option in the 'assignee' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'assignee' Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'assignee' column applied

        Examples:
            | filterType     | dataToSearch |
            | Contains       | Joana        |
            | Equals to      | Joana Moura  |
            | Ends with      | Moura        |
            # | Starts with    | Joana Mel    |
            # | Different from | Joana Moura  | # bug different = equals to


    Scenario Outline: Filter Payment Request by the Description column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for the Payment Request table loaded
        And Clicks on the filter option in the 'description' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'description' Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'description' column applied

        Examples:
            | filterType     | dataToSearch                                       |
            | Different from | Creditor Replacement Court Tax for portfolio Mars_ |
            | Contains       | Replacement Court                                  |
            | Starts with    | Creditor Replacement                               |
            | Equals to      | Creditor Replacement Court Tax for portfolio Mars_ |
            | Ends with      | for portfolio Mars_                                |


    Scenario Outline: Filter Payment Request by the Comment column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for the Payment Request table loaded
        And Clicks on the filter option in the 'paymentRequestComment' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'paymentRequestComment' Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'paymentRequestComment' column applied

        Examples:
            | filterType     | dataToSearch            |
            | Different from | Request Date 2023-08-24 |
            | Contains       | Date 2023               |
            | Starts with    | Request Date            |
            | Equals to      | Request Date 2023-08-24 |
            | Ends with      | 2023-08-24              |
