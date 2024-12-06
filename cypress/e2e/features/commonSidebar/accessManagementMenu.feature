Feature: Access Navigation - Management Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Management tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario Outline: All Management pages should be visible
        When Clicks on 'Debts' tab on 'management' menu
        Then On 'Debts' different page should be open
        When Clicks on 'Groups of Portfolios' tab on 'management' menu
        Then On 'Groups' different page should be open
        When Clicks on 'Portfolios' tab on 'management' menu
        Then On 'Portfolios' different page should be open
        When Clicks on 'Securitizations' tab on 'management' menu
        Then On 'Securitizations' different page should be open
        When Clicks on 'Customer Cases' tab on 'management' menu
        Then On 'Customer Cases' different page should be open
        When Clicks on 'Proposals' tab on 'management' menu
        Then On 'Proposals' different page should be open
        When Clicks on 'Groups of Bank Accounts' tab on 'management' menu
        Then On 'Bank Account Groups' different page should be open
        When Clicks on 'Bank Accounts' tab on 'management' menu
        Then On 'Bank Accounts' different page should be open
        When Clicks on 'CashFlows' tab on 'management' menu
        Then On 'Cash Flows' different page should be open
        When Clicks on 'Cashflow Identifications' tab on 'management' menu
        Then On 'Identifications' different page should be open
        When Clicks on 'Transactions' tab on 'management' menu
        Then On 'All' different page should be open
        When Clicks on 'Bulk Operations' tab on 'management' menu
        Then On 'Items' different page should be open


    Scenario: Others Management pages should be visible
        When Clicks on 'Assets' tab on 'management' menu
        Then On 'Assets' page should be open
        When Clicks on 'Legal Cases' tab on 'management' menu
        Then On 'Legal Cases' page should be open
