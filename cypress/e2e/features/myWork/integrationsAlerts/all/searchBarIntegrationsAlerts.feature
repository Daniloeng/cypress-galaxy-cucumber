Feature: MyWork - Search Bar - Integrations Alerts

  This Feature is a automated test for search bar in Integrations Alerts

  Background:
    Given As a user logged in 'integrationalerts/all' screen


  Scenario Outline: Search by Id
    When Search by using an AssetId '<filter>' in the search bar of the Integrations AlertsAll screen
    Then Only Integrations AlertsAll with this search bar filter '<filter>' should displayed in the list

    Examples:
      | filter |
      | 10548  |

  