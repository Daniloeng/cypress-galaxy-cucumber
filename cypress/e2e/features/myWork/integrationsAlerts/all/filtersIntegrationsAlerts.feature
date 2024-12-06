Feature: MyWork - Filters - Integrations Alerts

  This Feature is a automated test to filter a Integrations Alerts

  Background:
    Given As a user logged in 'integrationalerts/all' screen
    And Clicks on Global Filter button of the table


  Scenario Outline: Filter by Id
    When Filters by '<filter>' in the Id field of the Integrations AlertsAll table screen
    Then Only Integrations AlertsAll with this '<filter>' Id should displayed in the list

    Examples:
      | filter |
      | 10548  |

  Scenario Outline: Filter by Event Type
    When Filters by '<filter>' in the Event Type field of the Integrations AlertsAll table screen
    Then Only Integrations AlertsAll with this '<filter>' Event Type should displayed in the list

    Examples:
      | filter                               |
      | IntegrationErrorRequestTaskValuation |

  Scenario Outline: Filter by Related Entity
    When Filters by '<filter>' in the Related Entity field of the Integrations AlertsAll table screen
    Then Only Integrations AlertsAll with this '<filter>' Related Entity should displayed in the list

    Examples:
      | filter |
      | Task   |

  Scenario Outline: Filter by Origin
    When Filters by '<filter>' in the Origin field of the Integrations AlertsAll table screen
    Then Only Integrations AlertsAll with this '<filter>' Origin should displayed in the list

    Examples:
      | filter |
      | 1      |

  Scenario Outline: Filter by Message
    When Filters by '<filter>' in the Message field of the Integrations AlertsAll table screen
    Then Only Integrations AlertsAll with this '<filter>' Message should displayed in the list

    Examples:
      | filter                                |
      | Error adding Asset Valuation Approved |
