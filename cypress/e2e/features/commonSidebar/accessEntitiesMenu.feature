Feature: Entities Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Entities tab

    Background: Navigate to the Sidebar
        Given As a head logged in

    Scenario Outline: "<submenu>" page should be visible
        When Clicks on "<submenu>" tab on "entities" menu
        Then On "<page>" different page should be open

        Examples:
            | submenu                | page                   |
            | All                    | Entities               |
            | Persons                | Persons                |
            | Organizations          | Organizations          |
            | Financial Institutions | Financial Institutions |
            | Public Services        | Public Services        |
