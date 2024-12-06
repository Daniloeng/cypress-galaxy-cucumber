Feature: Key-sets to Return - Columns on Key-sets to Return screen

    This Feature is a automated test to Operations in Key-sets to Return Columns

    Background: Navigate to the Key-sets to Return view
        Given As a user logged in 'keysetstoreturn' screen
        And 'Key-sets to Return' table is loaded
    

    Scenario: Selects the links by Key-sets to Return screen
        When Selects the 1st 'assetId' link on Key-sets to Return screen
        Then Checks if the user was directed to the correct Asset

        And Navigate to the 'keysetstoreturn' screen
        When Selects the 1st 'keySetId' link on Key-sets to Return screen
        Then Checks if the user was directed to the correct KeySet

        And Navigate to the 'keysetstoreturn' screen
        When Selects the 1st 'deliveredToName' link on Key-sets to Return screen
        Then Checks if the user was directed to the correct Organization

        And Navigate to the 'keysetstoreturn' screen
        When Selects the 1st 'entityName' link on Key-sets to Return screen
        Then Checks if the user was directed to the correct Organization
        
        And Navigate to the 'keysetstoreturn' screen
        When Selects the 1st 'keySafeStorageName' link on Key-sets to Return screen
        Then Checks if the user was directed to the correct Key Safe Storages


    Scenario: Set as Returned on Key-sets to Return and validations
        When Selects the 1st KeySet to Return from the list
        And Clicks on 'Set as Returned' button in toolbar
        And Selects 'manager3' Delivered to in sidebar
        And Clicks on 'Save' button

        Then The 'Movement undefined' sidebar is closed
        And Verifies that the Key-sets have been retorned and should not displayed in the list

        And Navigate to the 'keysets' screen
        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'id' column
        And Selects the 'Equals to' option in the dropdown-menu
        And Writes to be searched in the 'id' Name column filter

        Then Checks if Key Set Retorned is available in the keySets list

        When Selects the the Asset Id to Return from the Key-sets list
        And Selects the 'Key-sets' submenu in 'Diligencies' tab
        Then Checks if Key Set Retorned is available in the Asset keySets list


    Scenario: Bulk Set Key-sets as Returned 
        When Selects the 1st and 2nd KeySet to Return from the list
        And Clicks on 'Set as Returned' button in toolbar
        And Selects 'manager3' Delivered to in sidebar
        And Clicks on 'Save' button

        Then The 'Movement undefined' sidebar is closed
        And Verifies that the Key-sets have been returned in bulk and should not be displayed in the list

        And Navigate to the 'keysets' screen
        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'id' column
        And Selects the 'Equals to' option in the dropdown-menu
        And Writes the 1st KeySet to be searched in bulk in the 'id' Name column filter

        Then Checks if the 1st Key Set Returned is available in the keySets list

        When Selects the the Asset Id to Return from the Key-sets list
        And Selects the 'Key-sets' submenu in 'Diligencies' tab
        Then Checks if the 1st Key Set Returned is available in the Asset keySets list
        
        # validation second keyset and assetId
        And Navigate to the 'keysets' screen
        When Clicks on Global Filter button of the table
        And Clicks on the filter option in the 'id' column
        And Selects the 'Equals to' option in the dropdown-menu
        And Writes the 2nd KeySet to be searched in bulk in the 'id' Name column filter

        Then Checks if the 2nd Key Set Returned is available in the keySets list

        When Selects the the Asset Id to Return from the Key-sets list
        And Selects the 'Key-sets' submenu in 'Diligencies' tab
        Then Checks if the 2nd Key Set Returned is available in the Asset keySets list
   