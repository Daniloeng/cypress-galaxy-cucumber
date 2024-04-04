Feature: Columns Proposals Management

        This Feature is a automated test to Operations in Proposals Columns

        Background: Navigate to the Proposals view
                Given As a head logged in
                When Clicks on 'Proposals' tab on 'management' menu
                And 'Proposal' table is loaded
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
