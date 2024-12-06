Feature: Securitizations - CRUD - Securitizations

    This Feature is a automated test to CRUD Operations in Securitization
    Background: Navigate to the Securitizations tab
        Given Navigate to a '6' specific Securitizations

    Scenario: Remove debt on tab debts
        And Clicks on the 'Debts' tab
        And Selects the 1st debt from the list
        And Removes it using remove button
        Then The debt should no longer exist in the Securitization

    Scenario: Click no when removing debt on tab overview
        And Selects the 1st debt from the list
        And Clicks Remove in Debt list on Securitization screen
        When The sidebar opens, I Click No
        Then The debt is not removed from the list and confirmation sidebar is closed

    Scenario: Click no when removing debt on tab Debts
        And Clicks on the 'Debts' tab
        And Selects the 1st debt from the list
        And Clicks on 'Remove' button in toolbar
        When The sidebar opens, I Click No
        Then The debt is not removed from the list and confirmation sidebar is closed

    Scenario: Close confirmation sidebar when removing debt on tab overview
        And Selects the 1st debt from the list
        And Clicks Remove in Debt list on Securitization screen
        When The sidebar opens, clicks on X Button
        Then The debt is not removed from the list and confirmation sidebar is closed

    Scenario: Remove debt button is disabled when multiselecting on tab overview
        When Selects 2 Debts from the list
        Then The remove debt button should remain disabled

    Scenario: Remove debt button is disabled when multiselecting on tab Debts
        And Clicks on the 'Debts' tab
        When Selects 2 Debts from the list
        Then The remove debt button should remain disabled

    Scenario: Id of debt shown on confirmation sidebar on tab overview
        And Selects the 1st debt from the list
        And Clicks Remove in Debt list on Securitization screen
        Then The selected Debt Id should appear on the tittle of the Sidebar

    Scenario: Close confirmation sidebar when removing debt on tab Debts
        And Clicks on the 'Debts' tab
        And Selects the 1st debt from the list
        And Clicks on 'Remove' button in toolbar
        When The sidebar opens, clicks on X Button
        Then The debt is not removed from the list and confirmation sidebar is closed

    Scenario: Id of debt shown on confirmation sidebar on tab Debts
        And Clicks on the 'Debts' tab
        And Selects the 1st debt from the list
        And Clicks on 'Remove' button in toolbar
        Then The selected Debt Id should appear on the title of the Sidebar

    Scenario: Remove debt on tab overview (quick way)
        And Selects the 1st debt from the list
        And Removes it using remove button
        Then The debt quick way - should no longer exist in the Securitization
