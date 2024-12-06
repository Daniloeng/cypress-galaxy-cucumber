Feature: Services - Views - Insurances

  This Feature is a automated test to see the different views of Insurances page

  Background:
    Given As a user logged in 'insurances' screen
    When Selects 'Cards' in View
    
  Scenario: Select the type of view
        When Clicks on View button on insurances screen
        And Selects the 'Table' option in View menu in insurances screen
        Then The type of view 'Table' selected should be shown

        When Clicks on View button on insurances screen
        And Selects the 'Cards' option in View menu in insurances screen
        Then The type of view 'Cards' selected should be shown
