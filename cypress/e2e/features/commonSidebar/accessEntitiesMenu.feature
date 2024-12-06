Feature: Access Navigation - Entities Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Entities tab

    Background: Navigate to the Sidebar
        Given As a head logged in

    Scenario: All Entities pages should be visible
        When Clicks on 'All' tab on 'entities' menu
        Then On 'Entities' different page should be open
        When Clicks on 'Persons' tab on 'entities' menu
        Then On 'Persons' different page should be open
        When Clicks on 'Organizations' tab on 'entities' menu
        Then On 'Organizations' different page should be open
        When Clicks on 'Financial Institutions' tab on 'entities' menu
        Then On 'Financial Institutions' different page should be open
        When Clicks on 'Public Services' tab on 'entities' menu
        Then On 'Public Services' different page should be open
