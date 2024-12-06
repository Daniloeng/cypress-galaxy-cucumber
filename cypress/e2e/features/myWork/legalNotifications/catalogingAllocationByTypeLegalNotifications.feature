Feature: Legal Notifications - Cataloging/Allocation by Type on Legal Notifications

    This Feature is a automated test to Cataloging/Allocation by Type on Legal Notifications screen

    Background: Navigate to the Queue screen
        Given As a user logged in 'queues/all' screen
        And Set '2169' testUserId on Local storage
        And Wait for the Queue table loaded
        And Verifies if Toolbar is showing
        And Clicks on the 'To Work On' tab
        And Clicks on Global Filter button of the table

 
    Scenario: Add Payment Request on the Legal Notifications screen
        When Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Writes 'Legal Support - Limpeza All' to be searched in the 'name' Name column filter
        And Clicks on the 'name' searched in the list
        And Clicks on the 'Tasks' tab
        And Cancels all Tasks Opened before add new task
        And Clicks on 'Save' button

        When Clicks on 'Add' button in toolbar
        And Fills in the fields to Add a Task in the Queue screen
        And Clicks on 'Save' button

        When Selects the Queue added
        And Clicks on 'Start' button in toolbar
        And Clicks on 'Edit' in Legal Details
        And Fills in the fields to Edit the Legal Details
        And Clicks on 'Save' button

        And Clicks on the 'Relations' tab
        Then Verifies that Relations with Legal Case Instances e Legal Notificaions

