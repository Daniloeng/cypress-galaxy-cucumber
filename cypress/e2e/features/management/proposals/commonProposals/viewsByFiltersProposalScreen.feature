Feature: Proposals - Filters Proposals Management

    This Feature is a automated test to Operations in Proposals

    Background: Navigate to the Proposals tab
        Given As a user logged in 'proposals' screen
        And Selects All columns option in dropdown columns
        And Clicks on Global Filter button of the table

    Scenario Outline: Filter Proposals by the '<filter>' Id field
        When Filters by '<filter>' in the Id field of the Proposal table screen
        Then Only Proposal with this '<filter>' Id should displayed in the list

        Examples:
            | filter |
            | 502341 |
            | 502349 |
            | 502345 |

    Scenario Outline: Filter Proposals by the '<filter>' Type field
        When Filters by '<filter>' in the Type field of the Proposal table screen
        Then Only Proposals with this '<filter>' type should displayed in the list

        Examples:
            | filter      |
            | Amicable    |
            | Legal       |
            | Real Estate |


    Scenario Outline: Filter Proposals by the '<filter>' Status field
        When Filters by '<filter>' in the Status field of the Proposal table screen
        Then Only Proposals with this '<filter>' status should displayed in the list

        Examples:
            | filter                     |
            | Aborted                    |
            | Active                     |
            | Canceled                   |
            | Closed                     |
            | Draft                      |
            | Waiting Decision           |
            | Waiting Review Acknowledge |


    Scenario Outline: Filter Proposals by the '<filter>' Strategy field
        When Filters by '<filter>' in the Strategy field of the Proposal table screen
        Then Only Proposals with this '<filter>' strategy should displayed in the list

        Examples:
            | filter            |
            | Rent              |
            | Sale              |
            | Sale with CPCV    |
            | Payoff            |
            | Deed in Lieu      |
            | Payment Agreement |
            | Discount Payoff   |
            | PER               |


    Scenario Outline: Filter Proposals by the '<filter>' InDefault Status field
        When Filters by '<filter>' in the InDefault Status field of the Proposal table screen
        Then Only Proposals with this '<filter>' InDefault Status should displayed in the list

        Examples:
            | filter         |
            | In Default     |
            | Not In Default |
