Feature: Access Navigation - Documents Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Documents tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario: All Documents pages should be visible
        When Clicks on 'All' tab on 'document' menu
        Then On 'All' page should be open
        When Clicks on 'Recent' tab on 'document' menu
        Then On 'Recent' page should be open
        When Clicks on 'Unidentified' tab on 'document' menu
        Then On 'Unidentified' page should be open
        When Clicks on 'Of Customers' tab on 'document' menu
        Then On 'Of Customers' page should be open
        When Clicks on 'Of Debts' tab on 'document' menu
        Then On 'Of Debts' page should be open
        When Clicks on 'Of Assets' tab on 'document' menu
        Then On 'Of Assets' page should be open
        When Clicks on 'Of Legal Cases' tab on 'document' menu
        Then On 'Of Legal Cases' page should be open
        When Clicks on 'Of Cashflow' tab on 'document' menu
        Then On 'Of Cashflow' page should be open
        When Clicks on 'Received' tab on 'document' menu
        Then On 'Received' page should be open
        When Clicks on 'Sent' tab on 'document' menu
        Then On 'Sent' page should be open


    Scenario: Document Storages page should be visible
        When Clicks on 'Storage' tab on 'document' menu
        Then On 'Document Storages' different page should be open
