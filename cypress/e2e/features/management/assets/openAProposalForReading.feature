Feature: Open the page of an asset for reading

    This Feature is a automated test to open the page of an asset for reading

    Background: 
      Given An user is on Assets
    
    Scenario Outline: The page of a proposal is open
       When The user clicks on the id of an asset
        And The user clicks on the tab proposals
        And The user clicks on the id of a proposal
       Then The page of the proposal shold be showed       