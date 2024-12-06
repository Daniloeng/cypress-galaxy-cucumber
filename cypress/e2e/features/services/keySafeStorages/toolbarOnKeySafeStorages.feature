Feature: Key Safe Storages - Actions on the Key Safe Storages screen

    This Feature is a automated test to Actions on Key Safe Storages screen

    Background: Navigate to the Key Safe Storages screen
        Given As a user logged in 'keysafestorages' screen
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by the name of the Key Safe Storage created table screen
        Then Selects and deletes all rows that contain Key Safe Storage test in the name
        And Navigate to the 'keysafestorages' screen


    Scenario: Clicks on Add button and cancel Add - Key Safe Storages screen
        When Clicks on 'Add' button in toolbar
        And The 'Key Safe Storage' sidebar is open
        And clicks on Cancel button
        Then The 'Key Safe Storage' sidebar is closed


    Scenario: Clicks the Add button and check the required fields messages - Key Safe Storages screen
        When Clicks on 'Add' button in toolbar
        And The 'Key Safe Storage' sidebar is open
        And Clicks on 'Save' button
        Then Validation messages are presented to the user


    Scenario: Add, Edit and Remove actions - Key Safe Storage screen
        When Clicks on 'Add' button in toolbar
        And The 'Key Safe Storage' sidebar is open
        And Fills in new Key Safe Storage data
        And Clicks on 'Save' button
        Then The 'Key Safe Storage' sidebar is closed

        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by created name of the Key Safe Storage table screen
        Then Selects the row that contain created Key Safe Storage

        When Clicks on 'Edit' button in toolbar
        And The 'Key Safe Storage' sidebar is open
        And Edits Key Safe Storage data
        And Clicks on 'Save' button
        Then The 'Key Safe Storage' sidebar is closed

        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by edited name of the Key Safe Storage table screen
        Then Selects the row that contain searched Key Safe Storage
        And Clicks on 'Remove' button in toolbar
        And Click on the 'delete' button confirming the remove

 
    Scenario: Selects the links by Key Safe Storage screen
        When Selects the 1st 'name' link on Key Safe Storage screen
        Then Checks if the user was directed to the correct Key Safe Storage

        And Navigate to the 'keysafestorages' screen
        When Selects the 1st 'entityName' link on Key Safe Storage screen
        Then Checks if the user was directed to the correct Organization
