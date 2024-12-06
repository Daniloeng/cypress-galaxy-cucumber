Feature: MyWork - Filters - Waiting 

  This Feature is a automated test to filter a Waiting 

  Background:
    Given As a user logged in 'pricereview/waitingpricereview' screen
    And Clicks on Global Filter button of the table


  Scenario Outline: Filter by AssetId
    When Filters by '<filter>' in the AssetId field of the WaitingPriceReview table screen
    Then Only WaitingPriceReview with this '<filter>' AssetId should displayed in the list

    Examples:
      | filter |
      | 96152  |

  Scenario Outline: Filter by Previous Id
    When Filters by '<filter>' in the Previous Id field of the WaitingPriceReview table screen
    Then Only WaitingPriceReview with this '<filter>' Previous Id should displayed in the list

    Examples:
      | filter        |
      | 86-P01-000788 |

  Scenario Outline: Filter by Portfolio
    When Filters by '<filter>' in the Portfolio field of the WaitingPriceReview table screen
    Then Only WaitingPriceReview with this '<filter>' Portfolio should displayed in the list

    Examples:
      | filter |
      | GNBRE  |

  # Scenario Outline: Filter by Proposed Price - BUG: quando pesquisamos pelo proposed price com um valor existente, a data table nao mostra resultados
  #   When Filters by '<filter>' in the Proposed Price field of the  WaitingPriceReview table screen
  #   Then Only WaitingPriceReview with this '<filter>' Proposed Price should displayed in the list

  #   Examples:
  #     | filter    |
  #     | 46,900.00 |

  Scenario Outline: Filter by Type
    When Filters by '<filter>' in the Type field of the WaitingPriceReview table screen
    Then Only WaitingPriceReview with this '<filter>' Type should displayed in the list

    Examples:
      | filter        |
      | Reentry Price |
      | Price Review  |


  Scenario Outline: Filter by Requester
    When Filters by '<filter>' in the Requester field of the WaitingPriceReview table screen
    Then Only WaitingPriceReview with this '<filter>' Requester should displayed in the list

    Examples:
      | filter          |
      | Andre Tonel     |
      | Elisabete Sousa |
