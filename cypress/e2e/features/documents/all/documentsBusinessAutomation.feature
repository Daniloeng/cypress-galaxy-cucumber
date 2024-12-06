Feature: Documents - Business Tests

    This Feature is a automated real business tests
    As a head User

    Background: Navigate to Documents All tab
        Given Navigate to Documents 'All' tab in the '' url

    Scenario: Create Activity in a document
        When Clicks the first item from the table
        And Clicks on Activity button
        And Clicks on Add Comment button
        And Add comment in sidebar
        And Clicks on Save button on Activity sidebar
        Then The comment should be visible

    Scenario: Check the history in a document
        When Clicks on Add button
        And Fills the sidebar form for history porpuses
        And Clicks on Save button on Documents sidebar
        And Searches the created document in the search bar
        And Clicks on the document
        And Clicks on History button
        Then The document history should have history

    Scenario: Advanced Search - Catalogação Categoria e Tipificação
        When Clicks on Add button
        And Fills the sidebar form for Advanced Search porpuses
        And Clicks on customer filter button in sidebar
        And Chooses one of the customers debts
        And Clicks on Save button on Documents sidebar
        Then The document should exist in the costumer file

    Scenario: Create a document as original
        When Clicks on Add button
        And Fills the sidebar form for with original document
        And Clicks on Save button on Documents sidebar
        And Searches the created document in the search bar
        And Clicks on the document
        Then Check if the document is Original
        
    