Feature: CRUD - Management - Securitizations

    This Feature is a automated test to CRUD Operations in Securitization
    Background: Navigate to the Securitizations tab
        Given Navigate to a '6' specific Securitizations

    Scenario: Remove debt on tab debts
        And Clicks on the 'Debts' tab
        And I select the 1st debt from the list
        And I remove it using remove button
        Then 2-The debt should no longer exist in the Securitization

    Scenario: Click no when removing debt on tab overview
        And I select the 1st debt from the list
        And I Click Remove in list
        When The sidebar opens, I Click No
        Then The debt is not removed from the list and confirmation sidebar is closed

    Scenario: Click no when removing debt on tab Debts
        And Clicks on the 'Debts' tab
        And I select the 1st debt from the list
        And I Click Remove
        When The sidebar opens, I Click No
        Then The debt is not removed from the list and confirmation sidebar is closed

    Scenario: Close confirmation sidebar when removing debt on tab overview
        And I select the 1st debt from the list
        And I Click Remove in list
        When The sidebar opens, I Click X Button
        Then The debt is not removed from the list and confirmation sidebar is closed

    Scenario: Remove debt button is disabled when multiselecting on tab overview
        When I select 2 debts from the list
        Then 6-The remove debt button should remain disabled

    Scenario: Remove debt button is disabled when multiselecting on tab Debts
        And Clicks on the 'Debts' tab
        When I select 2 debts from the list
        Then 7-The remove debt button should remain disabled

    Scenario: Id of debt shown on confirmation sidebar on tab overview
        And I select the 1st debt from the list
        And I Click Remove in list
        Then The selected Debt Id should appear on the tittle of the Sidebar

    Scenario: Close confirmation sidebar when removing debt on tab Debts
        And Clicks on the 'Debts' tab
        And I select the 1st debt from the list
        And I Click Remove
        When The sidebar opens, I Click X Button
        Then The debt is not removed from the list and confirmation sidebar is closed

    Scenario: Id of debt shown on confirmation sidebar on tab Debts
        And Clicks on the 'Debts' tab
        And I select the 1st debt from the list
        And I Click Remove
        Then The selected Debt Id should appear on the title of the Sidebar

    Scenario: Remove debt on tab overview (quick way)
        And I select the 1st debt from the list
        And 11-I remove it using remove button
        Then 11-The debt should no longer exist in the Securitization
