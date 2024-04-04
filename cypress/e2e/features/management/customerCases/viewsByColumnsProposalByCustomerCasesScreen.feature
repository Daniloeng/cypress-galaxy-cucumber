Feature: Columns: Proposals by Customer Cases screen

        This Feature is a automated test to Operations in Proposals Columns by Customer Cases

        Background: Navigate to the Customer Cases view
                Given As a user logged in 'customercases' screen
                When Selects the first 'id' item from the table
                And Clicks on the 'Proposals' tab
                And Selects All columns option on dropdown columns


        Scenario: Unselects '<option>' column and verify view
                When 'Unselects' the '<option>' column on Columns menu
                Then Check if the '<option>' column was removed from view

                Examples:
                        | option               |
                        | Id                   |
                        | Manager              |
                        | Status               |
                        | Status Date          |
                        | Type                 |
                        | Strategy             |
                        | Has Phone            |
                        | Has Email            |
                        | Has Address          |
                        | Manager Last Contact |
                        | Next Contact         |
                        | Last Collection Date |
                        | InDefault Status     |
                        | Created on           |
