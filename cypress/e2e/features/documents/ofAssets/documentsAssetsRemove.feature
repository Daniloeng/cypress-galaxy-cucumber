Feature: Documents - Assets tab - Remove action

    This Feature is a Remove action automated test in Assets Documents
    As a head User

    Background:  Navigate to Documents Assets tab
        Given Navigate to Documents 'Assets' tab in the 'docsofassets' url
        And Created document by API for Assets tab
        When Writes the document name on the search bar
        And Selects the searched item from datatable

    Scenario: Remove an document with success
        When Clicks on 'Edit' button in Documents
        And Removes related entities
        And Switches to All tab and find the document
        Then Verifies that the document has been removed