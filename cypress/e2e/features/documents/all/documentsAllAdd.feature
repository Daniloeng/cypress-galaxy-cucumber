Feature: Documents - ALL - Add

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents All tab
        Given Navigate to Documents 'All' tab in the '' url


    Scenario: Create document with success
        When Clicks on Add button
        And Fills the sidebar form for creating porpuses on tab 'All'
        And Clicks on Save button on Documents sidebar
        Then The document should be created in 'All' tab


    Scenario: Cancel the creation of a document
        When Clicks on Add button
        And Fills the sidebar form for creating porpuses on tab 'All'
        And Clicks on Cancel button
        Then The document should be cancel and sidebar closes


    Scenario: Create document without a file
        When Clicks on Add button
        And Fills the sidebar form for creating porpuses on tab 'All'
        And Cancels the uploaded file
        And Clicks on Save button on Documents sidebar
        Then The document saving should prompt an error message for Create


    Scenario: Create document without the mandatory fields filled
        When Clicks on Add button
        And Uploads the file and leaves mandatory fields empty
        And Clicks on Save button on Documents sidebar
        Then The document saving should prompt an error message for the missing fields