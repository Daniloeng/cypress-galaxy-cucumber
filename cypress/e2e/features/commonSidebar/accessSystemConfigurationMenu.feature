Feature: Access Navigation - System Configurations Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in System Configuration tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario: Templates page should be visible
        When Clicks on 'Templates' tab on 'system' menu
        Then On 'Messages' page should be open


    Scenario: System pages should be visible
        When Clicks on 'Lookup Tables' tab on 'system' menu
        Then On 'Activity Type' different page should be open
        When Clicks on 'Security' tab on 'system' menu
        Then On 'Users' different page should be open
