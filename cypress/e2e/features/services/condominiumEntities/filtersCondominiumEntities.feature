Feature: Services - Filters - Condominium Entities

  This Feature is a automated test to filter a condominium entity

  Background:
    Given As a user logged in 'condominiumsentities' screen
    And Clicks on Global Filter button of the table


  Scenario Outline: Filter by Supplier
    When Filters by '<filter>' in the Supplier field of the Condominiums Entities table screen
    Then Only Condominium Entity with this '<filter>' Supplier should displayed in the list

    Examples:
      | filter                                                |
      | Administração do Condomínio Praceta Afonso de Paiva 2 |
      | CONDOMINIO AVENIDA BRIGADEIRO FIGUEIREDO SARMENTO, 71 |

  Scenario Outline: Filter by AssetId
    When Filters by '<filter>' in the AssetId field of the Condominiums Entities table screen
    Then Only Condominium Entity with this '<filter>' AssetId should displayed in the list

    Examples:
      | filter |
      | 52824  |

  Scenario Outline: Filter by Previous AssetId
    When Filters by '<filter>' in the Previous AssetId field of the Condominiums Entities table screen
    Then Only Condominium Entity with this '<filter>' Previous AssetId should displayed in the list

    Examples:
      | filter        |
      | 90-P01-001269 |

  Scenario Outline: Filter by Originator AssetId
    When Filters by '<filter>' in the Originator AssetId field of the Condominiums Entities table screen
    Then Only Condominium Entity with this '<filter>' Originator AssetId should displayed in the list

    Examples:
      | filter |
      | 43479  |

  #  Scenario Outline: Filter by Portfolio - CENÁRIO: PORTFOLIO NAO TEM ID UNICO PARA TESTAR
  #   When Filters by '<filter>' in the Portfolio field of the Condominiums Entities table screen
  #   Then Only Condominium Entity with this '<filter>' Portfolio should displayed in the list

  #   Examples:
  #     | filter |
  #     | BCP-08 |

  Scenario Outline: Filter by Managed By
    When Filters by '<filter>' in the Managed By field of the Condominiums Entities table screen
    Then Only Condominium Entity with this '<filter>' Managed By should displayed in the list

    Examples:
      | filter                        |
      | Whitestar Asset Solutions, SA |

  Scenario Outline: Filter by Postal Code
    When Filters by '<filter>' in the Postal Code field of the Condominiums Entities table screen
    Then Only Condominium Entity with this '<filter>' Postal Code should displayed in the list

    Examples:
      | filter   |
      | 2910-705 |