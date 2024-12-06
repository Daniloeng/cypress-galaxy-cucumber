Feature: Assets - Lien - Edit

    This Feature is a automated test to Edit a Lien

    Background: 
      Given An user is on Assets '3478' view in 'liens' screen
      And Lien is created by API

    Scenario Outline: Edit Asset Lien
        When Select a active lien
        And Clicks on Edit button in Assets Liens
        And Edit lien sidebar
        And Clicks on 'Save' button
        Then Check if the Lien was edited