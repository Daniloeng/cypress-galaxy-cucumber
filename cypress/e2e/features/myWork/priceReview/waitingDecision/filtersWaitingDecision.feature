Feature: MyWork - Filters - Waiting Decision

  This Feature is a automated test to filter a Waiting Decision

  Background:
    Given As a user logged in 'pricereview/waitingdecision' screen
    And Clicks on Global Filter button of the table


  Scenario Outline: Filter by AssetId
    When Filters by '<filter>' in the AssetId field of the Price Review WaitingDecision table screen
    Then Only Price Review WaitingDecision with this '<filter>' AssetId should displayed in the list

    Examples:
      | filter |
      | 49815  |

  Scenario Outline: Filter by Previous Id
    When Filters by '<filter>' in the Previous Id field of the Price Review WaitingDecision table screen
    Then Only Price Review WaitingDecision with this '<filter>' Previous Id should displayed in the list

    Examples:
      | filter        |
      | 67-P01-000207 |

  Scenario Outline: Filter by Portfolio
    When Filters by '<filter>' in the Portfolio field of the Price Review WaitingDecision table screen
    Then Only Price Review WaitingDecision with this '<filter>' Portfolio should displayed in the list

    Examples:
      | filter |
      | MARS   |

  # Scenario Outline: Filter by Proposed Price - BUG: quando pesquisamos pelo proposed price com um valor existente, a data table nao mostra resultados
  #   When Filters by '<filter>' in the Proposed Price field of the Price Review WaitingDecision table screen
  #   Then Only Price Review WaitingDecision with this '<filter>' Proposed Price should displayed in the list

  #   Examples:
  #     | filter    |
  #     | 46,900.00 |

  Scenario Outline: Filter by Type
    When Filters by '<filter>' in the Type field of the Price Review WaitingDecision table screen
    Then Only Price Review WaitingDecision with this '<filter>' Type should displayed in the list

    Examples:
      | filter                       |
      | BPV Update                   |
      | Entry Price                  |
      | Entry Price by Investor      |


  Scenario Outline: Filter by Requester
    When Filters by '<filter>' in the Requester field of the Price Review WaitingDecision table screen
    Then Only Price Review WaitingDecision with this '<filter>' Requester should displayed in the list

    Examples:
      | filter         |
      | Marco Malheiro |
      | Andre Tonel    |
