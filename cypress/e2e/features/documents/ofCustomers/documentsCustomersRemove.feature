Feature: Documents - Customers tab - Remove action

    This Feature is a Remove action automated test in Of Debts Documents
    As a head User

    Background:  Navigate to Documents Of Debts tab
        Given Navigate to Documents 'Of Customers' tab in the 'docsofcustomers' url
        And Created document by API for tab Debts
        When Writes the document name on the search bar
        And Selects the searched item from datatable

# https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136039

# Scenario: Cancel the removal using No button
#     When Clicks on remove button
#     And Clicks on No button in sidebar
#     Then The sidebar should be closed
#     And Delete the created item

# Scenario: Cancel the removal using X button
#     When Clicks on remove button
#     And Clicks on X button in sidebar
#     Then The sidebar should be closed
#     And Delete the created item

# Scenario: Remove an document with success
#     When Clicks on 'Edit' button in Documents
#     And Removes related entities
#     And Switches to All tab and find the document
#     Then Verifies that the document has been removed