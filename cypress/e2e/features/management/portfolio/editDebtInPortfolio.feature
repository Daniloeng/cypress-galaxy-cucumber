Feature: Management - Edit - Portfolio


    This Feature is a automated test to edit a debt in a Portfolio

    Background: 
      Given An user is on Portfolio '173' view in 'debts' screen

    Scenario Outline: Edit debt in Portfolio
        When Selects the first item from the table
        And Clicks on 'Edit' button in toolbar
        And Fill debt sidebar for editing porpuses
        And Clicks on 'Save' button
        Then Check if the Debt was edited