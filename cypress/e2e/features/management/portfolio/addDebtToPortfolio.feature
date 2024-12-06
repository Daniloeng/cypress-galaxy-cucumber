Feature: Management - Add - Portfolio


    This Feature is a automated test to add a debt to a Portfolio

    Background: 
      Given An user is on Portfolio '435' view in 'debts' screen

    Scenario Outline: Add a debt to a Portfolio
        When Clicks on Add button in Portfolio debts
        And Fill debt sidebar for creation porpuses
        And Clicks on 'Save' button
        Then Check if the Debt was created