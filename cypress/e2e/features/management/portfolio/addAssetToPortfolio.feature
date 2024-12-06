Feature: Management - Add - Portfolio


    This Feature is a automated test to add a asset to a Portfolio

    Background: 
      Given An user is on Portfolio '435' view in 'assets' screen

    Scenario Outline: Add a Asset to a Portfolio
        When Clicks on Add button in Portfolio assets
        And Fill asset sidebar for creation porpuses
        And Clicks on 'Save' button
        Then Check if the Asset was created