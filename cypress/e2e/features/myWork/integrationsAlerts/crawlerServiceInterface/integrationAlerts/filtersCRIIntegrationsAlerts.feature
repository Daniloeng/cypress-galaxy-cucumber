Feature: MyWork - Filters - CRI Integrations Alerts

  This Feature is a automated test to filter a CRI Integrations Alerts

  Background:
    Given As a user logged in 'integrationalerts/crawlerserviceinterface/citiusnotifications' screen
    And Clicks on Global Filter button of the table


  Scenario Outline: Filter by Id
    When Filters by '<filter>' in the Id field of the Integrations AlertsAll table screen
    Then Only Integrations AlertsAll with this '<filter>' Id should displayed in the list

    Examples:
      | filter |
      | 10337  |

  Scenario Outline: Filter by Event Type
    When Filters by '<filter>' in the Event Type field of the Integrations AlertsAll table screen
    Then Only Integrations AlertsAll with this '<filter>' Event Type should displayed in the list

    Examples:
      | filter                             |
      | IntegrationErrorCitiusNotification |

  # Scenario Outline: Filter by Related Entity - BUG - quando tentamos procurar pela palavra Request, o filtro funciona, quando tentamos procurar por Request e o Id. Exemplo: Request 1860085, nao funciona. e so pelo o Id tambem nao funciona
  #   When Filters by '<filter>' in the Related Entity field of the Integrations AlertsAll table screen
  #   Then Only Integrations AlertsAll with this '<filter>' Related Entity should displayed in the list

  #   Examples:
  #     | filter  |
  #     | 1860080 |

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
      | filter                   |
      | Error to Create Document |
