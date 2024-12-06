Feature: Assets - Lien - Remove

    This Feature is a automated test to Remove a Lien

    Background: 
      Given An user is on Assets '3478' view in 'liens' screen
      And Lien is created by API

    Scenario Outline: Remove Asset Lien
        When Select a active lien
        And Clicks on Remove button in Assets Liens
        And Clicks Delete
        Then Check if the Lien was Removed