Feature: Services - Views - Condominium Payments

  This Feature is a automated test to filter a condominium payments page

  Background:
    Given As a user logged in 'condominiumspayments' screen
    And Clicks on Global Filter button of the table


# Scenario Outline: Filter by Supplier - Cenário: não encontra dados, apesar de existirem
#     When Filters by '<filter>' in the Supplier field of the Condominiums Entities table screen
#     Then Only Condominium Entity with this '<filter>' Supplier should displayed in the list

#     Examples:
#       | filter         |
#       | GLX_OBFUSCATED |

  Scenario Outline: Filter by AssetId
    When Filters by '<filter>' in the AssetId field of the Condominiums Entities table screen
    Then Only Condominium Entity with this '<filter>' AssetId should displayed in the list

    Examples:
      | filter |
      | 337147  |

# Scenario Outline: Filter by Payment Type - Cenário - sem dados
#     When Clicks on Payment Type
#     And Filters by '<filter>' in the Payment Type field of the Condominiums Payments table screen
#     Then Only Condominium Payments with this '<filter>' Payment Type should displayed in the list

#     Examples:
#       | filter |
#       | Condominium - Quota  |

  # Scenario Outline: Filter by Payer Bank Accout
  #   When Filters by '<filter>' in the PayerBankAccout field of the Condominiums Payments table screen
  #   Then Only Condominium Payments with this '<filter>' PayerBankAccout should displayed in the list

  #   Examples:
  #     | filter                    |
  #     | PT50003300004541770433305 |


  # Scenario Outline: Filter by Payer Entity - Cenário: não encontra dados, apesar de existirem
  #   When Filters by '<filter>' in the Payer Entity field of the Condominiums Payments table screen
  #   Then Only Condominium Payments with this '<filter>' Payer Entity should displayed in the list

  #   Examples:
  #     | filter         |
  #     | GLX_OBFUSCATED |

  # Scenario Outline: Filter by Previous AssetId - Cenário - sem dados
  #   When Filters by '<filter>' in the Previous AssetId field of the Condominiums Entities table screen
  #   Then Only Condominium Entity with this '<filter>' Previous AssetId should displayed in the list

  #   Examples:
  #     | filter        |
  #     | 90-P01-001269 |

  # Scenario Outline: Filter by Originator AssetId - Cenário - sem dados
  #   When Filters by '<filter>' in the Originator AssetId field of the Condominiums Entities table screen
  #   Then Only Condominium Entity with this '<filter>' Originator AssetId should displayed in the list

  #   Examples:
  #     | filter |
  #     | 43479  |

  #  Scenario Outline: Filter by Portfolio - Cenário - Porfolio nao contem elemento com ID
  #   When Filters by '<filter>' in the Portfolio field of the Condominiums Entities table screen
  #   Then Only Condominium Entity with this '<filter>' Portfolio should displayed in the list

  #   Examples:
  #     | filter |
  #     | Spring |

  # Scenario Outline: Filter by Managed By - Cenário - sem dados
  #   When Filters by '<filter>' in the Managed By field of the Condominiums Entities table screen
  #   Then Only Condominium Entity with this '<filter>' Managed By should displayed in the list

  #   Examples:
  #     | filter                        |
  #     | Whitestar Asset Solutions, SA |
        