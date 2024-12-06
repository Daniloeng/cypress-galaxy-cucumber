Feature: Requests - Import documents by folder on the Requests screen

    This Feature is a automated test to Import documents by folder on the Requests screen

    Background: Navigate to the Requests screen
        Given As a user logged in 'requests/all' screen


    Scenario: Import documents by tag
        And Switches to 'In Draft' tab
        When Clicks on 'Add Request' button in toolbar
        And The 'New Request' sidebar is open
        And Fills in new Request data
        And Clicks on 'Save' button
        Then The 'New Request' sidebar is closed
        And Set '2217' testUserId on Local storage

        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Writes the name to be searched in the Request Name column filter
        And Selects the Request added 
        And Switches to 'Tasks' tab
        When Clicks on 'Add' button in toolbar
        And The 'New Import Documents' sidebar is open
        And Fills in new Import Documents data by tag
        And Clicks on 'Save' button
        Then The 'New Import Documents' sidebar is closed
        And Switches to 'Overview' tab
        And Clicks on 'Send to be Started' button in Progress bar
    

    Scenario: Import of mail documents (by schema a vaio)
        And Switches to 'In Draft' tab
        When Clicks on 'Add Request' button in toolbar
        And The 'New Request' sidebar is open
        And Fills in new Request data
        And Clicks on 'Save' button
        Then The 'New Request' sidebar is closed
        And Set '2217' testUserId on Local storage

        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Writes the name to be searched in the Request Name column filter
        And Selects the Request added 
        And Switches to 'Tasks' tab
        When Clicks on 'Add' button in toolbar
        And The 'New Import Documents' sidebar is open
        And Fills in new Import Documents data by schema a vaio
        And Clicks on 'Save' button
        Then The 'New Import Documents' sidebar is closed
        And Switches to 'Overview' tab
        And Clicks on 'Send to be Started' button in Progress bar
