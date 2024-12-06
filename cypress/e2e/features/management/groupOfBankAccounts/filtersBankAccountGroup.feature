Feature: Management - Filters - Group Of Bank Accounts

  This Feature is a automated test to filter a group of bank account

  Background:
    Given As a user logged in 'bankaccountgroups' screen
    And Clicks on Global Filter button of the table


  Scenario Outline: Filter by Name
    When Filters by '<filter>' in the Name field of the Groups Of Bank Accounts table screen
    Then Only Group Of Bank Account with this '<filter>' Name should displayed in the list

    Examples:
      | filter |
      | Apollo |
      | Pluto  |

  Scenario Outline: Filter by Bank Accounts
    When Filters by '<filter>' in the Bank Accounts field of the Groups Of Bank Accounts table screen
    Then Only Group Of Bank Account with this '<filter>' number of Bank Accounts should displayed in the list

    Examples:
      | filter |
      | 1      |
      | 2      |

  Scenario Outline: Filter by Status
    When Filters by '<filter>' in the Status field of the Groups Of Bank Accounts table screen
    Then Only Groups Of Bank Accounts with this '<filter>' should displayed in the list

    Examples:
      | filter   |
      | Active   |