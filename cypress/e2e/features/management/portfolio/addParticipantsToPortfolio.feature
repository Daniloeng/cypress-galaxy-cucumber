Feature: Management - Add - Portfolio

    This Feature is a automated test to add a Participants to a Portfolio

    Background: 
      Given An user is on Portfolio '435' view in 'participants' screen

    Scenario Outline: Add a participant to a Portfolio
        When Clicks on Add button in Portfolio debts
        And Fill participants sidebar for creation porpuses
        And Clicks on 'Save' button
        Then Check if the Participant was created