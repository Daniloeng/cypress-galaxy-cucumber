Feature: Management - Add - Portfolio


    This Feature is a automated test to add a lien owner to a Portfolio

    Background: 
      Given An user is on Portfolio '435' view in 'lienowners' screen

    Scenario Outline: Add a Lien Owner to a Portfolio
        When Clicks on Add button in Portfolio debts
        And Fill lien owner sidebar for creation porpuses
        And Clicks on 'Save' button
        Then Check if the Lien Owner was created