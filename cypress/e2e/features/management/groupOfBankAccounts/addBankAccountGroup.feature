Feature: Management - Add - Group Of Bank Accounts

    This Feature is a automated test to add a group of bank accounts

    Background: 
      Given As a user logged in 'bankaccountgroups' screen

    Scenario Outline: Add a Bank Account Group with a bank account
        When Clicks on 'Add' button in toolbar
        And Fill bank account group sidebar
        And Clicks on 'Save' button
        Then Check if the Bank Account Group was created
        And Clicks on 'Add' button in toolbar
        And Add a bank account
        And Clicks on 'Save' button
        Then Check if Bank Account was added