Feature: Access Navigation - Regulatory Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Regulatory tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario: Regulatory pages should be visible
        When Clicks on 'Bank of Portugal' tab on 'regulatory' menu
        Then On 'Requests' different page should be open
        And On 'Bank of Portugal' title page should be showed
        When Clicks on 'IMPIC' tab on 'regulatory' menu
        Then On 'All' different page should be open
        And On 'IMPIC' title page should be showed
