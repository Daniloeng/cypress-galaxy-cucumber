Feature: Debts - Edit Cut-Off Ballance on the Debts view to perform Financial Scrub

    This feature is an automated test to Edit Cut-Off Ballance on the Debts view to perform Financial Scrub

    Scenario: Edit Interest Configuration on Settings tab on the Debts view
        Given As an authenticated user on the 'debts' view with URL parameters '437' '1243386252'
        And Click on the 'Cut-off' in the Balance card on debt view
        And Click on the Edit in the Balance card on debt view
        And Fill the Cut-Off fields on the sidebar
        And Clicks on 'Save' button
        Then Sidebar view should be closed
        And The values on the Balance view should be displayed


