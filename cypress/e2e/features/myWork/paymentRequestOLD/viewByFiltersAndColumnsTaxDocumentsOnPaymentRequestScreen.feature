Feature: Payment Request - Filters and Columns in Tax Document on the Payment Request screen

    This Feature is a automated test to Filters and Columns on Payment Request screen

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
         And 'In Draft' table is loaded
        And Set '2197' testUserId on Local storage
        And Wait for the Payment Request table loaded
        And Selects first Payment Request from datatable
        And Payment Request details is open
        And Selects All columns option in dropdown columns


    Scenario: Unselect and check Tax Document columns on the Payment Request screen
        And 'Unselects' the 'Id' column in Columns menu
        Then Check if the 'Id' column was removed from view
        And 'Unselects' the 'Name' column in Columns menu
        Then Check if the 'Name' column was removed from view
        And 'Unselects' the 'Document Type' column in Columns menu
        Then Check if the 'Document Type' column was removed from view
        And 'Unselects' the 'Date' column in Columns menu
        Then Check if the 'Date' column was removed from view
        And 'Unselects' the 'Status Date' column in Columns menu
        Then Check if the 'Status Date' column was removed from view
        And 'Unselects' the 'Reason' column in Columns menu
        Then Check if the 'Reason' column was removed from view
        And 'Unselects' the 'Supplier' column in Columns menu
        Then Check if the 'Supplier' column was removed from view

        And Selects All columns option in dropdown columns

        And 'Unselects' the 'Payer' column in Columns menu
        Then Check if the 'Payer' column was removed from view
        And 'Unselects' the 'AI Integration Status' column in Columns menu
        Then Check if the 'AI Integration Status' column was removed from view
        And 'Unselects' the 'Amount' column in Columns menu
        Then Check if the 'Amount' column was removed from view
        And 'Unselects' the 'Due Date' column in Columns menu
        Then Check if the 'Due Date' column was removed from view
        And 'Unselects' the 'Identification Status' column in Columns menu
        Then Check if the 'Identification Status' column was removed from view
        And 'Unselects' the 'Identification Amount' column in Columns menu
        Then Check if the 'Identification Amount' column was removed from view
        And 'Unselects' the 'Status' column in Columns menu
        Then Check if the 'Status' column was removed from view


    # BUG: https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20120?workitem=139540
    # Scenario Outline: Filter Tax Documents by the '<filter>' AI Integration Status field of the Payment Request table screen
    #     When Filters by '<filter>' in the AI Integration Status field of the Tax Documents table on Payment Request screen
    #     And Wait for filter applied in the Tax Document table on Payment Request screen
    #     Then Only Tax Documents with this '<filter>' AI Integration Status should displayed in the list

    #     Examples:
    #         | filter |
    #         | Yes    |
    #         | No     |
    


    Scenario: Filter Tax Documents by the Document Type field of the Payment Request table screen
        When Clicks on Global Filter button of the table
        And Filters by the Document Type field of the Tax Documents table on Payment Request screen
        Then Only Tax Documents with the Document Type searched should appear in the list
    

    # most tax documents have no reason
    # Scenario: Filter Tax Documents by the Reason field of the Payment Request table screen
    #     When Clicks on Global Filter button of the table
    #     And Filters by the Reason field of the Tax Documents table on Payment Request screen
    #     Then Only Tax Documents with the Reason searched should appear in the list


    # Scenario: Filter Tax Documents by the Status field of the Payment Request table screen
    #     And 'Unselects' the 'Identification Status' column in Columns menu
    #     When Clicks on Global Filter button of the table
    #     And Filters by the Status field of the Tax Documents table on Payment Request screen
    #     Then Only Tax Documents with the Status searched should appear in the list
    # BUG: https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20120?workitem=139540


    # Scenario Outline: Filter Legal Notifications by the Supplier column with the filter '<filterType>'
    #     When Clicks on Global Filter button of the table
    #     When Clicks on the filter option in the 'documentName' column
    #     And Selects the '<filterType>' option in the dropdown-menu
    #     And Writes '<dataToSearch>' to be searched in the 'supplierDvescription' Name column filter
    #     And Wait for filter applied in the Legal Notifications table
    #     Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'documentName' column applied

    #     Examples:
    #     | filterType     | dataToSearch                 |
    #     | Different from | Leonor Bentinho              |
    #     | Contains       | Nacional de                  |
    #     | Equals to      | Balcão Nacional de Injunções |
    #     | Ends with      | Injunções                    |
        # | Starts with    | ORDE                       |
        # | Is empty       |                 |
