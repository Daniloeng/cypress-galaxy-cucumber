Feature: MyWork - Filters - Price ReviewAll

  This Feature is a automated test to filter a Price ReviewAll

  Background:
    Given As a user logged in 'pricereview/all' screen
    And Clicks on Global Filter button of the table


  Scenario Outline: Filter by AssetId
    When Filters by '<filter>' in the AssetId field of the Price ReviewAll table screen
    Then Only Price ReviewAll with this '<filter>' AssetId should displayed in the list

    Examples:
      | filter |
      | 6243   |

  Scenario Outline: Filter by Previous Id 
    When Filters by '<filter>' in the Previous Id field of the Price ReviewAll table screen
    Then Only Price ReviewAll with this '<filter>' Previous Id should displayed in the list

    Examples:
      | filter        |
      | 86-P01-001057 | 

  Scenario Outline: Filter by Portfolio
    When Filters by '<filter>' in the Portfolio field of the Price ReviewAll table screen
    Then Only Price ReviewAll with this '<filter>' Portfolio should displayed in the list

    Examples:
      | filter |
      | Pumas  |

  # Scenario Outline: Filter by Proposed Price - BUG: quando pesquisamos pelo proposed price com um valor existente, a data table nao mostra resultados
  #   When Filters by '<filter>' in the Proposed Price field of the Price ReviewAll table screen
  #   Then Only Price ReviewAll with this '<filter>' Proposed Price should displayed in the list

  #   Examples:
  #     | filter    |
  #     | 46,900.00 |

  Scenario Outline: Filter by Type
    When Filters by '<filter>' in the Type field of the Price ReviewAll table screen
    Then Only Price ReviewAll with this '<filter>' Type should displayed in the list

    Examples:
      | filter                    |
      | BPV Update                |
      | Campaigns                 |
      | Entry Price               |
      | Entry Price by Investor   |
      | Investor Strategy         |
      | Market Value Strategy     |
      | Price ReviewAll              |
      | Reentry Price             |
      | Reentry Price by Investor |


  Scenario Outline: Filter by Status
    When Filters by '<filter>' in the Status field of the Price ReviewAll table screen
    Then Only Price ReviewAll with this '<filter>' Status should displayed in the list

    Examples:
      | filter           |
      | Approved         |
      | Rejected         |
      | Canceled         |
      | New              |
      | Sendback         |
      | Waiting Decision |


  Scenario Outline: Filter by Requester
    When Filters by '<filter>' in the Requester field of the Price ReviewAll table screen
    Then Only Price ReviewAll with this '<filter>' Requester should displayed in the list

    Examples:
      | filter          |
      | Elisabete Sousa |
      | Ana Ledo        |


  Scenario Outline: Filter by Decisor
    When Filters by '<filter>' in the Decisor field of the Price ReviewAll table screen
    Then Only Price ReviewAll with this '<filter>' Decisor should displayed in the list

    Examples:
      | filter              |
      | Iolanda Vasconcelos |
      | Paulo Goncalves     |
      