Feature: Documents - Customers tab - Add action

    This Feature is a Add action automated test in Customers Documents
    As a head User

    Background: Navigate to Documents/Customers tab
        Given Navigate to Documents 'Of Customers' tab in the 'docsofcustomers' url
        When Clicks on Add button

    #Bug Falso Positivo - https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036
    Scenario: Cancel the creation of a document
        And Fills the sidebar form for creating porpuses on tab Cashflow
        And Clicks on Cancel button
        Then The document should be cancel and sidebar closes

    Scenario: Create document without a file
        And Fills the sidebar form for creating porpuses on tab Cashflow
        And Cancels the uploaded file
        And Clicks on Save button on Documents sidebar
        Then The document saving should prompt an error message for Create

# https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036
# Scenario: Create document without the mandatory fields filled
#     And Uploads the file and leaves mandatory fields empty
#     And Clicks on Save button on Documents sidebar
#     Then The document saving should prompt an error message for the missing fields

# https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036
#     When Fills the sidebar form for creating porpuses on tab Cashflow
#     And Clicks on Save button on Documents sidebar
#     Then The datatable should show the created 'Cashflow' document item
#     And Clicks on 'Edit' button in Documents
#     And Removes Debt Documents 'TestAutomationSuccessCashflow' from the All tab
