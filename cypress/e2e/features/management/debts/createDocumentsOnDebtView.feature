Feature: Debts - Create a document on Debts view

This feature is an automated test to create a document on the Debts view

   Background: Navigate to the Debt view
      Given As an authenticated user on the 'debts' screen
      And 'Debts' table is loaded
      And Wait for the Document table loaded
      And Clicks on Global Filter button of the table
           
   Scenario: Create a new Debt from Documents tab on Debts View
      When Clicks on the filter option in the 'id' column
      And Selects the "Equals to" option in the dropdown-menu
      And Writes '1243286828' to be searched in the 'id' Name column filter
      And Selects the first 'id' item from the table
      And Clicks on the 'Documents' tab
      And Change to Table option in the filters table view
      And Clicks on 'Add' button in Documents
      And Select the document 'Collateral Documentation_Appraisals_C179' from debts documents sidebar
      And Clicks on 'Save' button
      Then The proposal should be created with the name 'Collateral Documentation_Appraisals_C179'
      # Steps below remove the document created
      And Selects the first item from the table
      And Clicks on 'Remove' button in Documents tab from Debt view
      And Clicks on Yes button in sidebar
      Then Verifies that the document has been removed from debt table