Feature: Transactions - Columns: Transactions screen

        This Feature is a automated test to Operations Columns by Transactions

        Background: Navigate to the Transactions view
                Given As a user logged in 'transactions' screen
                And 'All' table is loaded
                And Selects All columns option in dropdown columns


        Scenario: Unselects columns and verify view
                When 'Unselects' the 'Bank Account' column in Columns menu
                Then Check if the 'Bank Account' column was removed from view
                When 'Unselects' the 'Beneficiary' column in Columns menu
                Then Check if the 'Beneficiary' column was removed from view
                When 'Unselects' the 'CashFlow Id' column in Columns menu
                Then Check if the 'CashFlow Id' column was removed from view
                When 'Unselects' the 'Customer Case Number' column in Columns menu
                Then Check if the 'Customer Case Number' column was removed from view
                When 'Unselects' the 'Effective Allocation' column in Columns menu
                Then Check if the 'Effective Allocation' column was removed from view
                When 'Unselects' the 'Entry Date' column in Columns menu
                Then Check if the 'Entry Date' column was removed from view
                When 'Unselects' the 'Fee Amount' column in Columns menu
                Then Check if the 'Fee Amount' column was removed from view
                When 'Unselects' the 'Gross Amount' column in Columns menu
                Then Check if the 'Gross Amount' column was removed from view
                When 'Unselects' the 'Group' column in Columns menu
                Then Check if the 'Group' column was removed from view

                And Selects All columns option in dropdown columns

                When 'Unselects' the 'Id' column in Columns menu
                Then Check if the 'Id' column was removed from view
                When 'Unselects' the 'Identification' column in Columns menu
                Then Check if the 'Identification' column was removed from view
                When 'Unselects' the 'Inverse Transaction Id' column in Columns menu
                Then Check if the 'Inverse Transaction Id' column was removed from view
                When 'Unselects' the 'Is Interim Transaction' column in Columns menu
                Then Check if the 'Is Interim Transaction' column was removed from view
                When 'Unselects' the 'Performed By Manager' column in Columns menu
                Then Check if the 'Performed By Manager' column was removed from view
                When 'Unselects' the 'Posted By' column in Columns menu
                Then Check if the 'Posted By' column was removed from view
                When 'Unselects' the 'Posted Date' column in Columns menu
                Then Check if the 'Posted Date' column was removed from view
                When 'Unselects' the 'Type' column in Columns menu
                Then Check if the 'Type' column was removed from view
