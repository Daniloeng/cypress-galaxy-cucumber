Feature: Customer Cases - Filters: Proposals by Customer Cases screen

    This Feature is a automated test to Operations in Proposals by Customer Cases screen

    Background: Navigate to the by Customer Cases tab
        Given As a user logged in 'customercases' screen
        When Selects the first 'id' item from the table
        And Clicks on the 'Proposals' tab
        And Selects All columns option in dropdown columns
        And 'Unselects' the 'Has Address' column in Columns menu
        And 'Unselects' the 'Has Email' column in Columns menu
        And 'Unselects' the 'Has Phone' column in Columns menu
        And 'Unselects' the 'Last Collection Date' column in Columns menu
        And 'Unselects' the 'Manager Last Contact' column in Columns menu
        And 'Unselects' the 'Next Contact' column in Columns menu
        And Clicks on Global Filter button of the table
 
    Scenario: Filter Proposals by the '<filter>' Id field
        When Find an element in the 'id' column of the table
        And Filter by value found in the 'id' column of the Proposal table screen
        Then Only the proposal matching the 'id' column filter should be visible in the list


    Scenario Outline: Filter Proposals by the '<filter>' Type field
        And Wait for proposal filter is applied
        When Filters by '<filter>' in the Type field of the Proposal table screen
        Then Only Proposals with this '<filter>' type should displayed in the list

        Examples:
            | filter   |
            | Amicable |
            | Legal    |


    Scenario Outline: Filter Proposals by the '<filter>' Status field
        When Filters by '<filter>' in the Status field of the Proposal table screen
        Then Only Proposals with this '<filter>' status should displayed in the list

        Examples:
            | filter         |
            | Draft          |
            | Active         |
            | Canceled       |
            | Waiting Review |


    Scenario Outline: Filter Proposals by the '<filter>' Strategy field
        When Filters by '<filter>' in the Strategy field of the Proposal table screen
        Then Only Proposals with this '<filter>' strategy should displayed in the list

        Examples:
            | filter                                   |
            | Pledge                                   |
            | Hello Letter                             |
            | Discount Payoff                          |
            | Recycle Amount(vehicle)                  |
            | Unsecured - Payment Agreement (Judicial) |
            | Unsecured - Payoff (Judicial)            |
            | Loan Sale                                |


    Scenario Outline: Filter Proposals by the '<filter>' InDefault Status field
        When Filters by '<filter>' in the InDefault Status field of the Proposal table screen
        Then Only Proposals with this '<filter>' InDefault Status should displayed in the list

        Examples:
            | filter         |
            | In Default     |
            | Not In Default |
