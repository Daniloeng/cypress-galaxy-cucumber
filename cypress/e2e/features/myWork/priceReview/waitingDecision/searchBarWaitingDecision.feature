Feature: MyWork - Search Bar - Price Review/WaitingDecision

  This Feature is a automated test for search bar in Price Review/WaitingDecision

  Background:
    Given As a user logged in 'pricereview/waitingdecision' screen


  Scenario Outline: Search by Asset Id
    When Search by using an AssetId '<filter>' in the search bar of the Price Review WaitingDecision screen
    Then Only Price Review WaitingDecision with this search bar filter '<filter>' should displayed in the list

    Examples:
      | filter |
      | 40183  |

  