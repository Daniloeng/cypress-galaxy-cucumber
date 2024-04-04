Feature: My Work Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in MyWork tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario Outline: "<submenu>" page should be visible
        When Clicks on "<submenu>" tab on "mywork" - "My Work" menu
        Then On "<page>" different page should be open

        Examples:
            | submenu                | page                  |
            | Requests               | All                   |
            | Queues                 | All                   |
            | Tasks                  | Tasks                 |
            | Power of Attorneys     | Power of Attorneys    |
            | Creditor Substitutions | All                   |
            | Legal Notifications    | Legal Notifications   |
            | Missing Tax Documents  | Missing Tax Documents |
            | Payment Requests       | All                   |
            | Tax Documents          | All                   |
            | Price Reviews          | All                   |
            | Key Sets to Return     | Key-sets to Return    |
            | Integrations           | All                   |
# | Injunction Package     | Injunction Package    |
