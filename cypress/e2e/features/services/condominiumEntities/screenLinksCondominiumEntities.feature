Feature: Services - Screen Links - Condominium Entities

  This Feature is a automated test for Screen Links in condominium entity

  Background:
    Given As a user logged in 'condominiumsentities' screen


  Scenario Outline: Screen Links
    When Clicks on '<link>' column in 'Condominiums Entities' screen
    Then Should show '<screenConfirmationLabel>' screen

    Examples:
      | link         | screenConfirmationLabel |
      | assetId      | Asset                   |
      | managedBy    | Organization            |
      | portfolio    | Portfolio               |
      | supplierName | Organization            |