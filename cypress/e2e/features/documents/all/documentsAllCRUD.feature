Feature: CRUD - Documents - ALL

    This Feature is a automated test to CRUD and VIEWS Operations in Documents
    As a head User

    Background: Navigate to Documents/All tab
        Given Navigate to Documents-All tab


    Scenario: Remove an document with success
        When Created document by API
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on remove button
        And Clicks on Yes button in sidebar
        Then The item should be removed from datatable


    Scenario: Cancel the removal using No button
        When Created document by API
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on remove button
        And Clicks on No button in sidebar
        Then The sidebar should be closed

    Scenario: Cancel the removal using X button
        When Created document by API
        And Writes the document name on the search bar
        And Selects the searched item from datatable
        And Clicks on remove button
        And Clicks on X button in sidebar
        Then The sidebar should be closed


    Scenario: Create document with success
        When Clicks on Add button
        And Fills the sidebar form for creating porpuses
        And Clicks on Save button from proposal modal
        Then The document should be created


    Scenario: Cancel the creation of a document
        When Clicks on Add button
        And Fills the sidebar form for creating porpuses
        And Clicks on Cancel button
        Then The document should be cancel and sidebar closes


    Scenario: Create document without a file
        When Clicks on Add button
        And Fills the sidebar form for creating porpuses
        And Cancels the uploaded file
        And Clicks on Save button from proposal modal
        Then The document saving should prompt an error message for Create


    Scenario: Create document without the mandatory fields filled
        When Clicks on Add button
        And Uploads the file and leaves mandatory fields empty
        Then The document saving should prompt an error message for the missing fields

    Scenario: Edit an item without the mandatory fields filled
        When Selects first item from datatable
        And Clicks on Edit button
        And Leaves mandatory fields empty
        Then The document saving should prompt an error message for the missing fields


    Scenario: Edit an item  without a file
        When Selects first item from datatable
        And Clicks on Edit button
        And Click on button to delete de file
        And Clicks on Save button from proposal modal
        Then The document saving should prompt an error message for Edit


    Scenario: Cancel the edition of an item
        When Selects first item from datatable
        And Clicks on Edit button
        And Clicks on Cancel button
        Then The document should be cancel and sidebar closes


    Scenario: Edit an item in with success
        When Selects first item from datatable
        And Clicks on Edit button
        And Edit the item
        And Clicks on Save button from proposal modal
        Then The datatable should show the edited item


    Scenario: Split an item without the mandatory fields
        When Selects first item from datatable
        And Clicks on Edit button
        And Edit the item for splitting porpuses
        And Clicks on Split button
        And Edit the item with mandatory fields empty in splitting screen
        And Clicks on Save button from proposal modal
        Then The document saving should prompt an error message for Split


    Scenario: Cancelation of splitting item
        When Selects first item from datatable
        And Clicks on Edit button
        And Edit the item for splitting porpuses
        And Clicks on Split button
        And Clicks on Cancel button
        Then The document should be cancel and sidebar closes


    Scenario: Split an item with the mandatory fields filled
        When Selects first item from datatable
        And Clicks on Edit button
        And Edit the item for splitting porpuses
        And Clicks on Split button
        And Edit the item with mandatory fields filled in splitting screen
        And Clicks on Save button from proposal modal
        Then The datatable should show the splitted item


    Scenario: Split an item with the original quantity of pages
        When Selects first item from datatable
        And Clicks on Split button
        And Clicks on Save button from proposal modal
        Then The sidebar should show the error message for Split


    Scenario: Print Stamp an item without mandatory fields
        When Clicks on Print Stamp button
        And Clicks on Save button from proposal modal
        Then The sidebar should show the error message for Print Stamp


    Scenario: Print Stamp an item with number of stamps 0
        When Clicks on Print Stamp button
        And Fills the sidebar form with number of stamps '0'
        And Clicks on Save button from proposal modal
        Then The document saving should prompt an error message for Print Stamp with the number of stamps 0


    Scenario: Print Stamp an item only selecting the Selected Document field
        When Clicks on Print Stamp button
        And Select Selected Documents filed in sidebar
        Then The Number of Stamps Field should be disabled


    Scenario: Print Stamp an item with New Document successs
        When Clicks on Print Stamp button
        And Fills the sidebar form with number of stamps '2'
        And Clicks on Save button from proposal modal
        Then The Print Stamp should be saved


    Scenario: Cancelation of a Print Stamp item using No button
        When Selects first item from datatable
        And Clicks on Print Stamp button
        And Clicks on No button in sidebar
        Then The sidebar should be closed


    Scenario: Cancelation of a Print Stamp item using X button
        When Selects first item from datatable
        And Clicks on Print Stamp button
        And Clicks on X button in sidebar
        Then The sidebar should be closed


    Scenario: Cancelation of a Print Stamp item using X button
        When Selecting 2 items from datatable
        And Clicks on Print Stamp button
        And Fills the form for stamping porpuses
        And Clicks on Save button from proposal modal
        Then The multiple selection of Print Stamp should be saved