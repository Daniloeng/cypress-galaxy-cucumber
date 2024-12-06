Feature: MyWork - Screen Links - Price Review/WaitingDecision

  This Feature is a automated test for Screen Links in Price Review

  Background:
    Given As a user logged in 'pricereview/waitingdecision' screen


  Scenario Outline: Screen Links
    When Clicks on '<link>' column in 'Price Review' screen
    Then Should show '<screenConfirmationLabel>' screen

    Examples:
      | link         | screenConfirmationLabel |
      | assetId      | Asset                   |
      | portfolio    | Portfolio               |