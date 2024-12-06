Feature: Legal Notifications - Action Bar on Legal Notifications

    This Feature is a automated test to Action bar on Legal Notifications screen

    Background: Navigate to the Legal Notifications screen
        Given As a user logged in 'legalnotification' screen
        And 'Legal Notifications' table is loaded
        And Set '2217' testUserId on Local storage
        And Selects 'LT Team' on Show Dropdown Menu
        And Selects 'Opened' on Show Dropdown Menu
        And Wait for the Legal Notifications table loaded

 
    Scenario: Add Payment Request on the Legal Notifications screen
        When Clicks on 'Add' button in toolbar
        And Fills in all Payment Request data for '673/03.2TBALM' Legal Case Instance
        And Searches for an existing document
        And Clicks on 'Save' button
        Then 'Add Payment Request' sidebar is closed


    Scenario: Preview Legal Notifications screen
        When Selects first 'New' Legal Notifications from datatable
        And Clicks on 'Preview' button in toolbar
        Then 'Preview' sidebar is open
        And Clicks on 'Details' Legal Notifications


    Scenario: Full Preview Legal Notifications screen
        When Selects first 'New' Legal Notifications from datatable
        And Clicks on 'Preview' button in toolbar
        And Clicks Full View button on Preview Details
        Then Full Preview Legal Notifications is open
    

    Scenario: Archive Legal Notifications screen
        When Selects first 'New' Legal Notifications from datatable
        And Clicks on 'Archive' button in toolbar
        And Fills 'The test must be archived' in the comment field to be archived
        And Clicks on 'Save' button
        Then 'Archive' sidebar is closed
    

    Scenario: Archive without filling in the Legal Notifications screen
        When Selects first 'New' Legal Notifications from datatable
        And Clicks on 'Archive' button in toolbar
        And Clicks on 'Save' button
        Then 'Archive' sidebar is closed
        
 
     Scenario: Archive in lot in the Legal Notifications screen
        And Selects second 'New' Legal Notifications from datatable
        When Selects first 'New' Legal Notifications from datatable
        And Clicks on 'Archive' button in toolbar
        And Clicks on 'Save' button
        Then 'Archive' sidebar is closed

        And Selects 'All' on Show Dropdown Menu
        When Selects first 'Archived' Legal Notifications from datatable
        And Clicks on 'Preview' button in toolbar
        Then 'Preview' sidebar is open
        And Clicks on 'Details' Legal Notifications
        And Check that in Legal Notification the 'Status' is 'Archived'
    

    Scenario: Assign in the Legal Notifications screen
        When Selects first 'New' Legal Notifications from datatable
        And Clicks on 'Assign' button in toolbar
        And Fill in the role fields with 'Legal Manager' and assigner with 'manager3' so that Legal Notifications is assigned
        And Fill in the role fields with 'Legal Treasury' and assigner with 'manager3' so that Legal Notifications is assigned
        And Clicks on 'Save' button
        Then 'Assign' sidebar is closed
        And Selects 'Manager' on Show Dropdown Menu
        And Column 'Notification Manager' contains 'manager3' manager


    Scenario: Invalidate in the Legal Notifications screen
        When Selects first 'New' Legal Notifications from datatable
        And Clicks on 'Invalidate' button in toolbar
        And Fills 'The test must be invalidate' in the comment and selects 'Duplicated/Deleted' status Reason fields to be invalidate
        And Clicks on 'Save' button
        Then 'Invalidate' sidebar is closed


    Scenario: Add Comment in the Legal Notifications screen
        When Selects first 'New' Legal Notifications from datatable
        And Clicks on 'Edit' button in toolbar
        And Types a comment 'Legal Notification edited' on Comments field in Legal Notification
        And Clicks on 'Save' button
        Then 'Edit Legal Notifications' sidebar is closed


    Scenario: Add Phone Call in the Legal Notifications screen
        When Selects first 'New' Legal Notifications from datatable
        And Clicks on the phone button at the top of the screen 
        And Clicks on the Entity filter selects the first Entity
        And Types the new phone number '927555333' and selects 'Inbound' Direction
        And Clicks on 'Save' button
        Then 'Add Phone Call' sidebar is closed


    Scenario: Edit in the Legal Notifications screen
        When Clicks on 'Add' button in toolbar
        And Fills in all Payment Request data for '673/03.2TBALM' Legal Case Instance
        And Searches for an existing document
        And Clicks on 'Save' button
        Then 'Add Payment Request' sidebar is closed

        When Clicks on Global Filter button of the table        
        And Wait for the Legal Notifications table loaded
        And Clicks on the filter option in the 'created' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        
        When Clicks on 'Assign' button in toolbar
        And Fill in the role fields with 'Legal Manager' and assigner with 'manager3' so that Legal Notifications is assigned
        And Clicks on 'Save' button
        Then 'Assign' sidebar is closed

        When Set '2217' testUserId on Local storage
        And Selects 'Manager' on Show Dropdown Menu
        And Selects first 'New' Legal Notifications from datatable
        And Clicks on 'Remove' button in toolbar
