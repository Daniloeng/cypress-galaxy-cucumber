Feature: Services - Filters - Key-Sets

  This Feature is a automated test to filter a Key-Sets

  Background:
    Given As a user logged in 'keysets' screen
    And Clicks on Global Filter button of the table


  Scenario Outline: Filter by AssetId
    When Filters by '<filter>' in the AssetId field of the Key-Sets table screen
    Then Only Key-Sets with this '<filter>' AssetId should displayed in the list

    Examples:
      | filter |
      | 330580 |
 
  # Scenario Outline: Filter by Previous AssetId - BUG: No property or field: mesmo usando um ID existente na data table
  #   When Filters by '<filter>' in the Previous AssetId field of the Key-Sets table screen
  #   Then Only Key-Sets with this '<filter>' Previous AssetId should displayed in the list

  #   Examples:
  #     | filter        |
  #     | 90-P01-001373 | 

  Scenario Outline: Filter by Id
    When Filters by '<filter>' in the Id field of the Key-Sets table screen
    Then Only Key-Sets with this '<filter>' Id should displayed in the list

    Examples:
      | filter |
      | 118314 |

  # Scenario Outline: Filter by Storage Entity - BUG: No property or field: mesmo usando um ID existente na data table
  #   When Filters by '<filter>' in the Storage Entity field of the Key-Sets table screen
  #   Then Only Key-Sets with this '<filter>' Storage Entity should displayed in the list

  #   Examples:
  #     | filter         |
  #     | GLX_OBFUSCATED |

  Scenario Outline: Filter by Storage
    When Filters by '<filter>' in the Storage field of the Key-Sets table screen
    Then Only Key-Sets with this '<filter>' Storage should displayed in the list

    Examples:
      | filter  |
      | Armário |

  Scenario Outline: Filter by Position Number
    When Filters by '<filter>' in the Position Number field of the Key-Sets table screen
    Then Only Key-Sets with this '<filter>' Position Number should displayed in the list

    Examples:
      | filter |
      | 3042   |

  Scenario Outline: Filter by Total Keys 
    When Filters by '<filter>' in the Total Keys field of the Key-Sets table screen
    Then Only Key-Sets with this '<filter>' Total Keys should displayed in the list

    Examples:
      | filter |
      | 2      |
      