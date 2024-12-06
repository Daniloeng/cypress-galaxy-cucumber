Feature: Documents - All tab - Merge action

     This Feature is a Merge action automated test in All Documents
     As a head User

    Background: Navigate to Documents All tab
        Given Navigate to Documents 'All' tab in the '' url


    Scenario: Merge an item without the mandatory fields
        And Clicks on Merge button
        And Leaves mandatory fields empty for merging porpuses
        And Clicks on Save button on Documents sidebar
        Then The document saving should prompt an error message for Merge


    Scenario: Cancelation of Merge item
        And Clicks on Merge button
        And Clicks on Cancel button
        Then The sidebar should be closed


    Scenario: Merge an item with success
        And Created document by API for merging porpuses in All tab
        And Clicks on Merge button
        And Fills the sidebar form for merging porpuses
        And Clicks on Save button on Documents sidebar
        Then The datatable should show the merged document item
