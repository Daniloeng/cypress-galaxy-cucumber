Feature: Documents - Legal Cases tab - Remove action

    This Feature is a Remove action automated test in Legal Cases Documents
    As a head User

    Background:  Navigate to Documents Legal Cases tab
        Given Navigate to Documents 'Legal Cases' tab in the 'docsoflegalcases' url
        And Created document by API for Legal Cases tab
        When Writes the document name on the search bar
        And Selects the searched item from datatable

    Scenario: Remove an document with success
        When Clicks on 'Edit' button in Documents
        And Removes related entities
        And Switches to All tab and find the document
        Then Verifies that the document has been removed