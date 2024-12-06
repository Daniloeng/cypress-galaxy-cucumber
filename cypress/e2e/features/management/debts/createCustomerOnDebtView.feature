Feature: Debts - Add customer on Debts view

This feature is an automated test to Add a customer document on the Debts screen

   Background: Navigate to the Debt view
      Given As an authenticated user on the 'debts' view with URL parameters '370' '1243319395'
      And Wait for the Customer Debt '1243319395' table loaded
      And Clicks on the 'Customers' tab
      And Remove the Customer "Jose Doria Frade" by API

   Scenario: Create a new Customer from Customer tab on Debts View
      And Clicks on Refresh button
      And Clicks on 'Add' button in Documents
      And Fill the fields on Customer side bar 'Jose' 'Borrower' 'Active' 'Automation' 'Valid'
      And Clicks on 'Save' button
      Then Sidebar view should be closed
      And The customer name 'Jose Doria Frade' should be visble on table