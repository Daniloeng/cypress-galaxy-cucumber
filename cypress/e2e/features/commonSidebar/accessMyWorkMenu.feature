Feature: Access Navigation - My Work Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in MyWork tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario Outline: All My Work pages should be visible
        When Clicks on 'Requests' tab on 'mywork' - 'My Work' menu
        Then On 'All' different page should be open
        When Clicks on 'Queues' tab on 'mywork' - 'My Work' menu
        Then On 'All' different page should be open
        When Clicks on 'Tasks' tab on 'mywork' - 'My Work' menu
        Then On 'Tasks' different page should be open
        When Clicks on 'Power of Attorneys' tab on 'mywork' - 'My Work' menu
        Then On 'Power of Attorneys' different page should be open
        When Clicks on 'Creditor Substitutions' tab on 'mywork' - 'My Work' menu
        Then On 'All' different page should be open
        When Clicks on 'Legal Notifications' tab on 'mywork' - 'My Work' menu
        Then On 'Legal Notifications' different page should be open
        When Clicks on 'Missing Tax Documents' tab on 'mywork' - 'My Work' menu
        Then On 'Missing Tax Documents' different page should be open
        When Clicks on 'Payment Requests' tab on 'mywork' - 'My Work' menu
        Then On 'In Draft' different page should be open
        When Clicks on 'Tax Documents' tab on 'mywork' - 'My Work' menu
        Then On 'To Be Cataloged' different page should be open
        When Clicks on 'Price Reviews' tab on 'mywork' - 'My Work' menu
        Then On 'All' different page should be open
        When Clicks on 'Key Sets to Return' tab on 'mywork' - 'My Work' menu
        Then On 'Key-sets to Return' different page should be open
        When Clicks on 'Integrations' tab on 'mywork' - 'My Work' menu
        Then On 'All' different page should be open
