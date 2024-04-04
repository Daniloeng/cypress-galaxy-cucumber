Feature: Management Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Management tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario Outline: "<submenu>" page should be visible
        When Clicks on "<submenu>" tab on "management" menu
        Then On "<page>" different page should be open

        Examples:
            | submenu                  | page                |
            | Debts                    | Debts               |
            | Groups of Portfolios     | Groups              |
            | Portfolios               | Portfolios          |
            | Securitizations          | Securitizations     |
            | Customer Cases           | Customer Cases      |
            | Proposals                | Proposals           |
            | Groups of Bank Accounts  | Bank Account Groups |
            | Bank Accounts            | Bank Accounts       |
            | CashFlows                | Cash Flows          |
            | Cashflow Identifications | Identifications     |
            | Transactions             | All                 |
            | Bulk Operations          | Items               |


    Scenario Outline: "<submenu>" page should be visible
        When Clicks on "<submenu>" tab on "management" menu
        Then On "<page>" page should be open

        Examples:
            | submenu     | page        |
            | Assets      | Assets      |
            | Legal Cases | Legal Cases |
