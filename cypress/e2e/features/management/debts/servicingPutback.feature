Feature: Debts - Servicing - Putback

This feature is an automated test to servicing a document on the Debts screen

   Background: Navigate to the Debt view
      Given As an authenticated user on the 'debts' view with URL parameters '335' '532949'
      And Create a putback by api
      And Clicks on Putback Analysis tab


   Scenario: Add a desktop document to a Putback
      When Selects the putback in the datatable by clause description
      And Clicks on Provide Analysis button
      And Edit putback status to 'For Putback'
      And Fill the sidebar in putback tab with a desktop document
      And Fill document sidebar
      And Clicks on 'Save' button
      And Clicks on Save button on putback sidebar
      Then Check if the putback status changed and have the desktop document attached
      And Deletes the putback by API

   Scenario: Add a system document to a Putback
      When Selects the putback in the datatable by clause description
      And Clicks on Provide Analysis button
      And Edit putback status to 'For Putback'
      And Fill the sidebar in putback tab with a system document
      And Clicks on 'Save' button
      Then Check if the putback status changed and have the system document attached
      And Deletes the putback by API

   Scenario: Change putback status to Not For Putback
      When Selects the putback in the datatable by clause description
      And Clicks on Provide Analysis button
      And Edit putback status to 'Not for Putback'
      And Clicks on 'Save' button
      Then Check if the putback status changed to Not for Putback
      And Deletes the putback by API

   Scenario: Close Putback analysis
      When Selects the putback in the datatable by clause description
      And Clicks on Close Analysis button
      Then Check if Comment column has comment Bulk closing
      And Deletes the putback by API