Feature: System Configurations Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in System Configuration tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario: Templates page should be visible
        When Clicks on "Templates" tab on "system" menu
        Then On "Messages" page should be open


    Scenario Outline: "<submenu>" page should be visible
        When Clicks on "<submenu>" tab on "system" menu
        Then On "<page>" different page should be open

        Examples:
            | submenu       | page          |
            | Lookup Tables | Activity Type |
            | Security      | Users         |
