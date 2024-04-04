Feature: Regulatory Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Regulatory tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario Outline: "<submenu>" page should be visible
        When Clicks on "<submenu>" tab on "regulatory" menu
        Then On "<page>" different page should be open
        And On "<submenu>" title page should be showed

        Examples:
            | submenu          | page     |
            | Bank of Portugal | Requests |
            | IMPIC            | All      |
