Feature: Access Navigation - Analytics Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Analytics tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario: Queries page should be visible
        When Clicks on 'queries' tab on 'analytics' menu
        Then On 'Queries' different page should be open
