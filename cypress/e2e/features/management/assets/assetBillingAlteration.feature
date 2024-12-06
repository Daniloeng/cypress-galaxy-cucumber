Feature: Assets - Billing Alteration To

    This Feature is a automated test to change Asset Billing 

    Background: 
      Given An user is on Assets '3478' view in '' screen

    Scenario Outline: Asset Billing Alteration
        When Clicks on Edit button in Assets screen
        And Edit the asset Billing To in asset sidebar
        And Clicks on 'Save' button
        Then Check if the Asset was edited