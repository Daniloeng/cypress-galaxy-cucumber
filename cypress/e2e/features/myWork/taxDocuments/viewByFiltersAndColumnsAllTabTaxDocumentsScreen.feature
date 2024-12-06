Feature: Tax Documents - Filters and Columns in In Draft tab on Tax Documents screen

    This Feature is a automated test to Filters and Columns on Payment Request screen

    Background: Navigate to the Tax Documents screen
        Given As a user logged in 'taxdocuments/tobecataloged' screen
        And Intercept the all tax documents are shown
        And 'To Be Cataloged' table is loaded
        And Clicks on the 'All' tab
        Then Waits the all tax documents are shown


    Scenario: Unselect and check Columns on the Tax Documents screen
        And Selects All columns option in dropdown columns        
        And 'Unselects' the 'Amount' column in Columns menu
        Then Check if the 'Amount' column was removed from view
        And 'Unselects' the 'Beneficiary' column in Columns menu
        Then Check if the 'Beneficiary' column was removed from view
        And 'Unselects' the 'Document Date' column in Columns menu
        Then Check if the 'Document Date' column was removed from view
        And 'Unselects' the 'Document Number' column in Columns menu
        Then Check if the 'Document Number' column was removed from view
        And 'Unselects' the 'Document Type' column in Columns menu
        Then Check if the 'Document Type' column was removed from view
        And 'Unselects' the 'Due Date' column in Columns menu
        Then Check if the 'Due Date' column was removed from view
        And 'Unselects' the 'Identification Number' column in Columns menu
        Then Check if the 'Identification Number' column was removed from view
        And 'Unselects' the 'Number Of Revalidations' column in Columns menu
        Then Check if the 'Number Of Revalidations' column was removed from view
        And 'Unselects' the 'Payment Request Id' column in Columns menu
        Then Check if the 'Payment Request Id' column was removed from view

        And Selects All columns option in dropdown columns

        And 'Unselects' the 'Payment Request Status' column in Columns menu
        Then Check if the 'Payment Request Status' column was removed from view
        And 'Unselects' the 'Portfolio Group' column in Columns menu
        Then Check if the 'Portfolio Group' column was removed from view
        And 'Unselects' the 'Securitization' column in Columns menu
        Then Check if the 'Securitization' column was removed from view
        And 'Unselects' the 'Status' column in Columns menu
        Then Check if the 'Status Reason' column was removed from view
        And 'Unselects' the 'Status Reason' column in Columns menu
        Then Check if the 'Status' column was removed from view
        And 'Unselects' the 'Supplier' column in Columns menu
        Then Check if the 'Supplier' column was removed from view
        And 'Unselects' the 'Transaction Type' column in Columns menu
        Then Check if the 'Transaction Type' column was removed from view
        And 'Unselects' the 'Validated by' column in Columns menu
        Then Check if the 'Validated by' column was removed from view


    Scenario: Selects Show Tax Documents and verify view        
        And Waits the all tax documents are shown
        When Selects by 'Archived' in the Show of the 'Tax Documents' table screen
        Then Waits the archived tax documents are shown
        When Selects by 'Relevant' in the Show of the 'Tax Documents' table screen
        Then Waits the relevant tax documents are shown
        When Selects by 'All' in the Show of the 'Tax Documents' table screen
        Then Waits the all tax documents are shown


    Scenario: Export action - Tax Documents  - Tab All
        And Clicks on Global Filter button of the table
        When Selects the '1' checkbox from the Tax Document list
        And Filters by Payment Request Id in Waiting Accounting tab on Tax Document table screen
        And Clicks on 'Export' button in toolbar
        Then Checks if the Tax Documents in the All tab were exported with the correct file name


    Scenario: Ascending Order Tax Documents by the 'Document Number' Column
        When Ordination the Tax Documents table by the 'Id' column in Ascending and Descending order
        Then The Assets should presented in Ascending order


    Scenario: Descending Order Tax Documents by the 'Document Number' Column
        When Aligns the Asset table by the 'Id' column in Descending order
        Then The Assets should presented in Descending order


    Scenario Outline: Filter Tax Documents by the '<filter>' Status field
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Status field of the Tax Documents table screen
        Then Only Tax Documents with this '<filter>' status should displayed in the list

        Examples:
            | filter    |
            | Error     |
            | Archived  |


    Scenario Outline: Filter Tax Documents by the '<filter>' Status Reason field
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Status Reason field of the Tax Documents table screen
        Then Only Tax Documents with this '<filter>' status reason should displayed in the list

        Examples:
            | filter           |
            | Com sucesso      |
            | Aguarda original |


    Scenario Outline: Filter Tax Documents  by the '<filter>' Document Type field
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Document Type field of the Tax Documents table screen
        Then Only Tax Documents with this '<filter>' document type should displayed in the list

        Examples:
            | filter    |
            | Invoice   |
            | Receipt   |


    Scenario Outline: Filter Payment Request Status by the '<filter>' Document Type field
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Payment Request Status field of the Tax Documents table screen
        Then Only Tax Documents with this '<filter>' payment request status should displayed in the list

        Examples:
            | filter               |
            | Archived             |
            | Payment Accounting   |


    Scenario Outline: Filter Portfolio Group by the '<filter>' Document Type field
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Portfolio Group field of the Tax Documents table screen
        Then Only Tax Documents with this '<filter>' portfolio group should displayed in the list

        Examples:
            | filter        |
            | DD BankInter  |
            | DD Cassiopeia |


    Scenario Outline: Filter Transaction Type by the '<filter>' Document Type field
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Transaction Type field of the Tax Documents table screen
        Then Only Tax Documents with this '<filter>' transaction type should displayed in the list

        Examples:
            | filter      |
            | Broker Fee  |
            | Blue Prints |


    Scenario Outline: Filter Payment Request by the Due Date column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Payment Request table
        And Clicks on the filter option in the 'dueDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Selects '<dayToSelect>' to be searched in the 'dueDate' Date Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'dueDate' column applied

        Examples:
            | filterType            | dayToSelect |
            | Different from        | 2023-11-09  |            
            | Equals to             | 2023-11-09  |
            | Less than             | 2023-11-09  |
            | Greater than or equal | 2023-11-09  |
            | Greater than          | 2023-11-09  | 
            | Less than or equal    | 2023-11-09  | 


    Scenario Outline: Filter Payment Request by the Document Date column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Payment Request table
        And Clicks on the filter option in the 'documentDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Selects '<dayToSelect>' to be searched in the 'documentDate' Date Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'documentDate' column applied

        Examples:
            | filterType            | dayToSelect |
            | Equals to             | 2016-07-21  |
            | Different from        | 2016-07-21  |            
            | Greater than or equal | 2016-07-21  |
            | Greater than          | 2016-07-21  | 
            | Less than or equal    | 2016-07-21  | 
            | Less than             | 2016-07-21  |


    Scenario Outline: Filter Payment Request by the Payment Request Id column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Payment Request table
        And Clicks on the filter option in the 'requestTaskPaymentIds' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'requestTaskPaymentIds' Name column filter
        Then The datatable should show the currency items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'requestTaskPaymentIds' column applied

        Examples:
            | filterType     | dataToSearch |
            | Equals to      | 813881       |
            # | Different from | 813881       |
            # | Contains       | 81388        |
            # | Starts with    | 8138         |
            # | Ends with      | 3881         | 
            # Bug opened - https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20125?workitem=153438


    Scenario Outline: Filter Payment Request by the Identification Number column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for the Payment Request table loaded
        And Clicks on the filter option in the 'supplierNif' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'supplierNif' Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'supplierNif' column applied

        Examples:
            | filterType     | dataToSearch |
            | Equals to      | 508184258    |
            | Different from | 508184258    |
            | Contains       | 81842        |
            | Starts with    | 50818        |
            | Ends with      | 84258        |


    Scenario Outline: Filter Payment Request by the Document Number column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for the Payment Request table loaded
        And Clicks on the filter option in the 'documentNumber' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'documentNumber' Name column filter
        And Wait for filter applied in the Payment Request table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'documentNumber' column applied

        Examples:
            | filterType     | dataToSearch |
            | Equals to      | 6004132016   |
            | Different from | 6004132016   |
            | Contains       | 41320        |
            | Starts with    | 600413       |
            | Ends with      | 132016       |
