Feature: Services - Acceptance - Condominium Payments

  This Feature is a automated test of acceptance of a condominium payments

  Background:
    Given As a user logged in 'condominiumspayments' screen

  Scenario Outline: Clicking No in Cancellation of Condominium Payments 
      When Selects the first item from the table
      And Clicks on 'Accept' button in toolbar
      And Clicks on 'No' button in sidebar on condiminium payments
      Then The sidebar should be closed

  Scenario Outline: Clicking No in Cancellation of mass Condominium Payments
      When Selects multiple items from the table
      And Clicks on 'Accept' button in toolbar
      And Clicks on 'No' button in sidebar on condiminium payments
      Then The sidebar should be closed