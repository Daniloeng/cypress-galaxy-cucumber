Feature: Assets - Lien - Add

    This Feature is a automated test to add a lien

    Background: 
      Given An user is on Assets '3478' view in 'liens' screen

    Scenario Outline: Add a lien to a Asset
        When Clicks on Add button in Assets liens
        And Fill lien sidebar for creation porpuses
        And Clicks on 'Save' button
        Then Check if the Lien was created