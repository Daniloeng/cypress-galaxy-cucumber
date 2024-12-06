Feature: Assets - Advanced filter View

    This feature is an automated test to filter a Asset in the Advanced Filter

    Background: Navigate to the Asset view
        Given As a user logged in 'assets' screen

    Scenario: Performe Advanced Asset filter
        When Clicks on the Advanced Filter button of the Asset View
        And Fill Advanced filter from Asset view
        And Click on Advanced Search filter button
        Then Shoud be visble the Asset searched on Asset datatable