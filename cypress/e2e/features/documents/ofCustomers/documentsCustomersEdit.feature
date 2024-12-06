Feature: Documents - Customers tab - Edit action

This Feature is a Edit action automated test in Customers Documents
As a head User

# Background: Navigate to Documents Customers tab
#     Given Navigate to Documents 'Of Customers' tab in the 'docsofcustomers' url
#     And Created document by API for Edit porpuses in Customers tab
#     And Writes the document name on the search bar
#     And Selects the searched item from datatable

# BUG.https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036

# Scenario: Edit an item without the mandatory fields filled
#     And Clicks on Edit button in Documents
#     And Leaves mandatory fields empty
#     And Clicks on Save button on Documents sidebar
#     Then The document saving should prompt an error message for the missing fields

# Scenario: Edit an item  without a file
#     And Clicks on Edit button in Documents
#     And Edit the document
#     And Click on button to delete the file
#     And Clicks on Save button on Documents sidebar
#     Then The document saving should prompt an error message for Edit

# Scenario: Cancel the edition of an item
#     And Clicks on Edit button in Documents
#     And Clicks on Cancel button
#     Then The document should be cancel and sidebar closes

# Scenario: Edit an item in with success
#     And Clicks on Edit button in Documents
#     And Edit the document
#     And Clicks on Save button on Documents sidebar
#     Then The datatable should show the edited 'Customers' document item

#     And Clicks on 'Edit' button in Documents
#     And Removes Debt Documents 'docsofcustomers' from the All tab
