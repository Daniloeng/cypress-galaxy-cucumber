Feature: MyWork - Search Bar - Price Review/WaitingDecision

  This Feature is a automated test for search bar in Price Review/WaitingDecision

  Background:
    Given As a user logged in 'pricereview/waitingpricereview' screen


  Scenario Outline: Search by Asset Id
    When Search by using an AssetId '<filter>' in the search bar of the WaitingPriceReview table screen
    Then Only WaitingPriceReview with this search bar filter '<filter>' should displayed in the list

    Examples:
      | filter |
      | 96152  |

  