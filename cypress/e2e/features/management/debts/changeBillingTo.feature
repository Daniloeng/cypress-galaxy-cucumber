Feature: Debts - Change Billing

This feature is an automated test to servicing a document on the Debts screen

   Background: Navigate to the Debt view
      Given As an authenticated user on the securitizations view with URL parameters '35' 'debts'


   Scenario: Change Billing Adress of a Debt
      When Selects the first item from the table
      And Clicks on 'Edit' button in toolbar
      And Edit the debt billing address
      And Clicks on 'Save' button
      Then The debt billing to address should be changed