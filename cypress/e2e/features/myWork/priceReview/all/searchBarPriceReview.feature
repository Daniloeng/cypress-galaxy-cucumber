Feature: MyWork - Search Bar - Price Review

  This Feature is a automated test for search bar in Price Review

  Background:
    Given As a user logged in 'pricereview/all' screen


  Scenario Outline: Search by Asset Id
    When Search by using an AssetId '<filter>' in the search bar of the Price ReviewAll screen
    Then Only Price ReviewAll with this search bar filter '<filter>' should displayed in the list

    Examples:
      | filter |
      | 6243   |

  