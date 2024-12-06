Feature: Missing Tax Documents - Filters and Columns on the Missing Tax Documents screen

    This Feature is a automated test to Filters and Columns on Missing Tax Documents screen

    Background: Navigate to the Missing Tax Documents screen
        Given As a user logged in 'missingtaxdocuments' screen
        And 'Missing Tax Documents' table is loaded
        And Set '2197' testUserId on Local storage
        And Selects All columns option in dropdown columns


    Scenario: Unselect and check Columns on the Missing Tax Documents screen
        And 'Unselects' the 'Amount' column in Columns menu
        Then Check if the 'Amount' column was removed from view
        And 'Unselects' the 'BillingTo' column in Columns menu
        Then Check if the 'BillingTo' column was removed from view
        And 'Unselects' the 'Follow-Up Date' column in Columns menu
        Then Check if the 'Follow-Up Date' column was removed from view
        And 'Unselects' the 'Follow-Up Status' column in Columns menu
        Then Check if the 'Follow-Up Status' column was removed from view
        And 'Unselects' the 'Id' column in Columns menu
        Then Check if the 'Id' column was removed from view
        And 'Unselects' the 'LAPR Status' column in Columns menu
        Then Check if the 'LAPR Status' column was removed from view
        And 'Unselects' the 'Payment Date' column in Columns menu
        Then Check if the 'Payment Date' column was removed from view
        And 'Unselects' the 'Payment Type' column in Columns menu
        Then Check if the 'Payment Type' column was removed from view

        And Selects All columns option in dropdown columns

        And 'Unselects' the 'Pop' column in Columns menu
        Then Check if the 'Pop' column was removed from view
        And 'Unselects' the 'Pop Sent Date' column in Columns menu
        Then Check if the 'Pop Sent Date' column was removed from view
        And 'Unselects' the 'Pop Sent Error' column in Columns menu
        Then Check if the 'Pop Sent Error' column was removed from view
        And 'Unselects' the 'Portfolio' column in Columns menu
        Then Check if the 'Portfolio' column was removed from view
        And 'Unselects' the 'Portfolio Groups' column in Columns menu
        Then Check if the 'Portfolio Groups' column was removed from view
        And 'Unselects' the 'Remaining Amount' column in Columns menu
        Then Check if the 'Remaining Amount' column was removed from view
        And 'Unselects' the 'Service Type' column in Columns menu
        Then Check if the 'Service Type' column was removed from view
        And 'Unselects' the 'Supplier' column in Columns menu
        Then Check if the 'Supplier' column was removed from view


    Scenario Outline: Filter Missing Tax Documents by the '<filter>' Pop Sent Error field
        And Wait for filter applied in the Missing Tax Documents table
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Pop Sent Error field of the Missing Tax Documents table screen
        Then Only Missing Tax Documents with this '<filter>' Pop Sent Error should displayed in the list

        Examples:
            | filter |
            | Yes    |
            | No     |
        

    Scenario Outline: Filter Missing Tax Documents by the '<filter>' Portfolio field
        And Wait for filter applied in the Missing Tax Documents table
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Portfolio field of the Missing Tax Documents table screen
        Then Only Missing Tax Documents with this '<filter>' portfolio should displayed in the list

        Examples:
            | filter                                       |
            | VBES                                         |
            | Hefesto (Carter Subparticipation e Pending)  |


    Scenario Outline: Filter Missing Tax Documents by the '<filter>' Service Type field
        And Wait for filter applied in the Missing Tax Documents table
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Service Type field of the Missing Tax Documents table screen
        Then Only Missing Tax Documents with this '<filter>' service type should displayed in the list

        Examples:
            | filter    |
            | Solicitor |
            | Lawyer    |


    Scenario Outline: Filter Missing Tax Documents by the '<filter>' Payment Type field
        And Wait for filter applied in the Missing Tax Documents table
        When Clicks on Global Filter button of the table
        And Filters by '<filter>' in the Payment Type field of the Missing Tax Documents table screen
        Then Only Missing Tax Documents with this '<filter>' payment type should displayed in the list

        Examples:
            | filter                |
            | Custas de Parte       |
            | Provisão - Honorários |
            

    Scenario Outline: Filter Missing Tax Documents by the '<filter>' LAPR Status field
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Missing Tax Documents table
        And Filters by '<filter>' in the LAPR Status field of the Missing Tax Documents table screen
        Then Only Missing Tax Documents with this '<filter>' lapr status should displayed in the list

        Examples:
            | filter               |
            | Pending              |
            | Closed Successfully  |


    Scenario Outline: Filter Missing Tax Documents by the '<filter>' LAPR Status field
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Missing Tax Documents table
        And Filters by '<filter>' in the Follow-Up Status field of the Missing Tax Documents table screen
        Then Only Missing Tax Documents with this '<filter>' followUp status should displayed in the list

        Examples:
            | filter |
            | Sent   |
    

    Scenario Outline: Filter Missing Tax Documents by the Id column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Missing Tax Documents table
        And Clicks on the filter option in the 'id' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'id' Name column filter
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'id' column applied

        Examples:
            | filterType     | dataToSearch  |
            | Equals to      | 27            |
            # | Ends with      | 7             |
            # | Starts with    | 5             |
            # | Different from | 27            |
            # | Contains       | 5             | # bug opened https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20122?workitem=145144


    Scenario Outline: Filter Missing Tax Documents by the Amount column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Missing Tax Documents table
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


    Scenario Outline: Filter Missing Tax Documents by the Remaining Amount column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Missing Tax Documents table
        And Clicks on the filter option in the 'remainingAmount' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'remainingAmount' Name column filter
        Then The datatable should show the currency items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'remainingAmount' column applied

        Examples:
            | filterType            | dataToSearch |
            | Equals to             | 70.00        |
            | Less than or equal    | 500.00       |
            | Less than             | 500.00       |
            | Different from        | 500.00       |
            | Is empty              |              |
            | Greater than or equal | 500.00       | 
            | Greater than          | 500.00       | 
        

    Scenario Outline: Filter Missing Tax Documents by the Supplier column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for the Missing Tax Documents table loaded
        And Clicks on the filter option in the 'supplierName' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'supplierName' Name column filter
        And Wait for filter applied in the Missing Tax Documents table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'supplierName' column applied

        Examples:
            | filterType     | dataToSearch   |
            | Different from | Madalena Ralha |
            | Contains       | Mada           |
            | Starts with    | Madalena       |
            | Equals to      | Madalena Ralha |
            | Ends with      | Ralha          |


    Scenario Outline: Filter Missing Tax Documents by the BillingTo column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for the Missing Tax Documents table loaded
        And Clicks on the filter option in the 'billingToName' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'billingToName' Name column filter
        And Wait for filter applied in the Missing Tax Documents table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'billingToName' column applied

        Examples:
            | filterType     | dataToSearch      |
            | Different from | HEFESTO, STC, S.A |
            | Contains       | Arrow             |
            | Starts with    | BANCO SANTANDER   |
            | Equals to      | HEFESTO, STC, S.A |
            | Ends with      | S.A               |



    Scenario Outline: Filter Missing Tax Documents by the Payment Date column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Missing Tax Documents table
        And Clicks on the filter option in the 'paymentDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Selects '<dayToSelect>' to be searched in the 'paymentDate' Date Name column filter
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'paymentDate' column applied

        Examples:
            | filterType            | dayToSelect |
            | Different from        | 2017-01-17  |            
            | Equals to             | 2017-01-17  |
            | Less than             | 2017-01-17  |
            | Greater than or equal | 2017-01-17  |
            | Greater than          | 2017-01-17  | 
            | Less than or equal    | 2017-01-17  | 
            | Is empty              |             |


    Scenario Outline: Filter Missing Tax Documents by the Pop Sent Date column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Missing Tax Documents table
        And Clicks on the filter option in the 'popDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Selects '<dayToSelect>' to be searched in the 'popDate' Date Name column filter
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'popDate' column applied

        Examples:
            | filterType            | dayToSelect |
            | Different from        | 2024-03-19  |            
            | Is empty              |             |
            # | Equals to             | 2024-03-19  |
            # | Less than             | 2024-03-19  |
            # | Greater than or equal | 2024-03-19  |
            # | Greater than          | 2024-03-19  | 
            # | Less than or equal    | 2024-03-19  | 


    Scenario Outline: Filter Missing Tax Documents by the FollowUp Date column with the filter '<filterType>'
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Missing Tax Documents table
        And Clicks on the filter option in the 'followUpDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Selects '<dayToSelect>' to be searched in the 'followUpDate' Date Name column filter
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'followUpDate' column applied

        Examples:
            | filterType            | dayToSelect |
            | Different from        | 2023-05-22  |            
            | Equals to             | 2021-05-14  |
            | Less than             | 2023-05-22  |
            | Greater than or equal | 2023-05-22  |
            | Greater than          | 2023-05-22  | 
            | Less than or equal    | 2023-05-22  | 
            | Is empty              |             |
