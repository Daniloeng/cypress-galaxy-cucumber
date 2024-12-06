Feature: Securitizations - Actions on the Securitizations screen

    This Feature is a automated test to Actions on Securitizations screen

    Background: Navigate to the Securitizations screen
        Given As a user logged in 'securitizations' screen
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by the name of the Securitization created table screen
        Then Selects and deletes all rows that contain test data in the name


    Scenario: Clicks on Add button and cancel Add - Securitizations screen
        When Clicks on 'Add' button in toolbar
        And The 'New Securitization' sidebar is open
        And clicks on Cancel button
        Then The 'New Securitization' sidebar is closed


    Scenario: Clicks the Add button and check the required fields messages - Securitizations screen
        When Clicks on 'Add' button in toolbar
        And The 'New Securitization' sidebar is open
        And Clicks on 'Save' button
        Then Validation messages are presented to the user


    Scenario: Add, Edit and Remove actions - Securitizations screen
        When Clicks on 'Add' button in toolbar
        And The 'New Securitization' sidebar is open
        And Fills in new Securitization data
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        And Selects the 'Debts' tab in Securitization screen
        When Clicks on 'Edit' Secutization button
        And The 'Securitization' sidebar is open
        And Edits Securitization data
        And Clicks on 'Save' button
        Then The 'Securitization' sidebar is closed

        When Clicks on 'Securitizations' breadcrumb route
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by edited name of the Securitization table screen
        Then Selects the row that contain searched securitization
        And Clicks on 'Remove' button in toolbar
        And Click on the 'delete' button confirming the remove


    Scenario: Add new Securitization, Add Debt - Securitizations screen
        When Clicks on 'Add' button in toolbar
        And The 'New Securitization' sidebar is open
        And Fills in new Securitization data
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        And Selects the 'Debts' tab in Securitization screen
        When Clicks on 'Add' button in toolbar
        And The 'New Debt' sidebar is open
        And Selects '1243522839' Debt in Securitizations screen
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed
        
        And Selects the 'Debts' tab in Securitization screen
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'id' column
        And Selects the 'Equals to' option in the dropdown-menu
        And Writes '1243522839' to be searched in the 'id' Name column filter
        
        And Selects the 1st debt from the list
        And Clicks on 'Remove' button in toolbar
        When Click on the 'delete' button confirming the remove

        #remove Securitization created
        When Clicks on 'Securitizations' breadcrumb route
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by created name of the Securitization table screen
        Then Selects the row that contain created securitization
        And Clicks on 'Remove' button in toolbar
        And Click on the 'delete' button confirming the remove


    Scenario: Add new Securitization, Add Debt and Edit Debt - Securitizations screen
        When Clicks on 'Add' button in toolbar
        And The 'New Securitization' sidebar is open
        And Fills in new Securitization data
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        And Selects the 'Debts' tab in Securitization screen
        When Clicks on 'Add' button in toolbar
        And The 'New Debt' sidebar is open
        And Selects '1243522839' Debt in Securitizations screen        
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed
        
        And Selects the 'Debts' tab in Securitization screen
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'id' column
        And Selects the 'Equals to' option in the dropdown-menu
        And Writes '1243522839' to be searched in the 'id' Name column filter
        
        And Selects the 1st debt from the list
        And Clicks on 'Edit' button in toolbar
        And Selects '4703' Biling Entity on Edit Debt sidebar in Securitizations screen
        And Clicks on 'Save' button

        #remove Securitization created
        When Clicks on 'Securitizations' breadcrumb route
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by created name of the Securitization table screen
        Then Selects the row that contain created securitization
        And Clicks on 'Remove' button in toolbar
        And Click on the 'delete' button confirming the remove


    Scenario: Add new Securitization, Add 2 Debts and Bulk Edit Debt - Securitizations screen
        When Clicks on 'Add' button in toolbar
        And The 'New Securitization' sidebar is open
        And Fills in new Securitization data
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        And Selects the 'Debts' tab in Securitization screen
        When Clicks on 'Add' button in toolbar
        And The 'New Debt' sidebar is open
        And Selects '1243522839' Debt in Securitizations screen        
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        When Clicks on 'Add' button in toolbar
        And The 'New Debt' sidebar is open
        And Selects '1243522831' Debt in Securitizations screen        
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed
        
        And Selects the 'Debts' tab in Securitization screen        
        And Selects 2 Debts from the list
        And Clicks on 'Edit' button in toolbar
        And Selects '4703' Biling Entity on Edit Debt sidebar in Securitizations screen
        And Clicks on 'Save' button

        #remove Securitizations created
        When Clicks on 'Securitizations' breadcrumb route
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by created name of the Securitization table screen
        Then Selects the row that contain created securitization
        And Clicks on 'Remove' button in toolbar
        And Click on the 'delete' button confirming the remove


    Scenario: Add Debts on Securitizations and cancel Add Debts - Securitizations screen
        When Clicks on 'Add' button in toolbar
        And The 'New Securitization' sidebar is open
        And Fills in new Securitization data
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        And Selects the 'Debts' tab in Securitization screen
        When Clicks on 'Add' button in toolbar
        And The 'New Debt' sidebar is open
        And clicks on Cancel button
        Then The 'New Debt' sidebar is closed

        #remove Securitizations created
        When Clicks on 'Securitizations' breadcrumb route
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by created name of the Securitization table screen
        Then Selects the row that contain created securitization
        And Clicks on 'Remove' button in toolbar
        And Click on the 'delete' button confirming the remove


    Scenario: Add new Securitization, Add 2 Debts and Bulk Collection Bank Account Edit Debt - Securitizations screen
        And Set '2169' testUserId on Local storage
        When Clicks on 'Add' button in toolbar
        And The 'New Securitization' sidebar is open
        And Fills in new Securitization data
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        And Selects the 'Debts' tab in Securitization screen
        When Clicks on 'Add' button in toolbar
        And The 'New Debt' sidebar is open
        And Selects '1243522839' Debt in Securitizations screen        
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        When Clicks on 'Add' button in toolbar
        And The 'New Debt' sidebar is open
        And Selects '1243522831' Debt in Securitizations screen        
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        And Selects the 'Bank Accounts' tab in Securitization screen
        And Clicks on 'Add' button in toolbar
        And Selects 'PT50 0007 0000 0030 6531 3502 3' IBAN of the Bank Account in Securitizations screen
        And Clicks on 'Save' button
        
        And Selects the 'Debts' tab in Securitization screen        
        And Selects 2 Debts from the list
        And Clicks on 'Edit' button in toolbar
        And Selects Collections Bank Account on Edit Debt sidebar in Securitizations screen
        And Clicks on 'Save' button

        #remove Securitizations created
        When Clicks on 'Securitizations' breadcrumb route
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by created name of the Securitization table screen
        Then Selects the row that contain created securitization
        And Clicks on 'Remove' button in toolbar
        And Click on the 'delete' button confirming the remove


    Scenario: Add new Securitization, Add Debt is already associated to another securitization - Securitizations screen
        When Clicks on 'Add' button in toolbar
        And The 'New Securitization' sidebar is open
        And Fills in new Securitization data
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        And Selects the 'Debts' tab in Securitization screen
        When Clicks on 'Add' button in toolbar
        And The 'New Debt' sidebar is open
        And Selects '1243522839' Debt in Securitizations screen
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        When Clicks on 'Securitizations' breadcrumb route
        
         When Clicks on 'Add' button in toolbar
        And The 'New Securitization' sidebar is open
        And Fills in new Securitization data
        And Clicks on 'Save' button
        Then The 'New Securitization' sidebar is closed

        And Selects the 'Debts' tab in Securitization screen
        When Clicks on 'Add' button in toolbar
        And The 'New Debt' sidebar is open
        And Selects '1243522839' Debt in Securitizations screen
        And Clicks on 'Save' button
        Then The validation message 'This debt is already associated to another securitization' is displayed
        And clicks on Cancel button
        Then The 'New Securitization' sidebar is closed

        #remove Securitization created
        When Clicks on 'Securitizations' breadcrumb route
        And Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'name' column
        And Selects the 'Contains' option in the dropdown-menu
        And Filters by created name of the Securitization table screen
        Then Selects the row that contain created securitization
        And Clicks on 'Remove' button in toolbar
        And Click on the 'delete' button confirming the remove

        And Filters by the name of the Securitization created table screen
        Then Selects and deletes all rows that contain test data in the name
