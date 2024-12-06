Feature: Missing Tax Documents - Actions on the Missing Tax Documents screen

    This Feature is a automated test to Actions on Missing Tax Documents screen

    Background: Navigate to the Missing Tax Documents screen
        Given As a user logged in 'missingtaxdocuments' screen
        And Wait for the Missing Tax Documents table loaded

    Scenario: Preview action - Missing Tax Documents screen
        When Selects first Missing Tax Documents from datatable
        And Clicks on 'Preview' button in toolbar
        Then The 'Missing Tax Documents' Preview sidebar is open


    Scenario: Edit action - Missing Tax Documents screen
        When Selects first Missing Tax Documents from datatable
        And Clicks on 'Edit' button in toolbar
        Then The 'Update Payment Request' sidebar is open
        And Selects 'Sent' Follow-Up Status on sidebar
        And Clicks on 'Save' button


    Scenario: Edit action more than one option - Missing Tax Documents screen
        When Selects '3' Missing Tax Documents from datatable
        And Clicks on 'Edit' button in toolbar
        Then The 'Update Payment Request' sidebar is open
        And Selects 'Sent' Follow-Up Status on sidebar
        And Clicks on 'Save' button


    Scenario: Ask Correction action - Missing Tax Documents screen
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Missing Tax Documents table
        And Filters by 'New' in the LAPR Status field of the Missing Tax Documents table screen
        Then Only Missing Tax Documents with this 'New' lapr status should displayed in the list

        When Selects first Missing Tax Documents from datatable
        And Clicks on 'Ask Correction' button in toolbar
        Then The 'Ask Correction' sidebar is open
        And Selects 'Actualização de Status' Status Reason and destination for 'Andreia Jesus' on sidebar
        And Clicks on 'Save' button
        Then The 'Ask Correction' sidebar is closed
        And Validates the Missing Tax Documents is no longer present in the datatable

    ## there is a bug in this scenario
    ## https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20122?workitem=145838
    # Scenario: Ask Correction action more than one option - Missing Tax Documents screen
    #     When Clicks on Global Filter button of the table
    #     And Wait for filter applied in the Missing Tax Documents table
    #     And Filters by 'New' in the LAPR Status field of the Missing Tax Documents table screen
    #     Then Only Missing Tax Documents with this 'New' lapr status should displayed in the list

    #     When Selects '3' Missing Tax Documents from datatable
    #     And Clicks on 'Ask Correction' button in toolbar
    #     Then The 'Ask Correction' sidebar is open
    #     And Selects 'Actualização de Status' Status Reason and destination for 'Andreia Jesus' on sidebar
    #     And Clicks on 'Save' button
    #     Then The 'Ask Correction' sidebar is closed
    #     And Validates Missing Tax Documents are no longer present in the datatable


    Scenario: Export action - Missing Tax Documents screen
        When Clicks on Global Filter button of the table
        And Wait for filter applied in the Missing Tax Documents table
        And Clicks on the filter option in the 'id' column
        And Selects the 'Equals to' option in the dropdown-menu
        And Writes '12621167' to be searched in the 'id' Name column filter
        Then The datatable should show the string items according to the filter 'Equals to' option and '12621167' data in the 'id' column applied

        When Reads and selects all the missing tax documents from the table
        And Clicks on 'Export' button in toolbar
        Then Checks the Missing Tax Documents are in the exported file
