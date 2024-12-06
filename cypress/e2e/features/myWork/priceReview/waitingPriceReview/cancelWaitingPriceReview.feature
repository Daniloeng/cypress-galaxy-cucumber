Feature: MyWork - Cancel - Price Review/WaitingPriceReview

  This Feature is a automated test for Screen Links in Price Review/WaitingPriceReview

  Background:
    Given As a user logged in 'pricereview/waitingpricereview' screen


  Scenario Outline: Cancel Individual Price Review
    When Selects the first item from the table
    And Clicks on 'Cancel' button in toolbar
    And Clicks on 'Save' button in Price Review screen
    Then Price Review item should be canceled

  Scenario Outline: Cancel Mass Price Review
    When Selects multiple items from the table
    And Clicks on 'Cancel' button in toolbar
    And Clicks on 'Save' button in Price Review screen
    Then Price Review item should be canceled