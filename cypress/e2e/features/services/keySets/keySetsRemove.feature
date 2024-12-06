Feature: Services - Remove - Key-Sets

    This Feature is a automated test to CRUD and VIEWS Operations in Key Sets
    As a head User

    Background: Navigate to Key Sets tab in Services
        Given As a user logged in 'keysets' screen        
        And Created a Key Set from API
        And Clicks on Global Filter button of the table
 
    Scenario: Remove a Key-Set
        And Filters by '76501' in the AssetId field of the Key-Sets table screen
        When Aligns the table descending by the 'Id' column
        And Selects the first item from the table
        And Clicks on Remove button in Key Sets tab
        And Clicks on Yes button in sidebar
        Then The Key-Set should be deleted
        