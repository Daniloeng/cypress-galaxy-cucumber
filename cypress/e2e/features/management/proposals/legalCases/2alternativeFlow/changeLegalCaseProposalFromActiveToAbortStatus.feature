Feature: Change Legal Proposals from Active to Aborted Status
        As a head user
        I want to change Status a Legal Proposal from Actived to Aborted

        Background: Navigate to Proposal tab

        Scenario Outline: Abort a Legal Proposal from Active Status '<strategy>' Strategy
                Given Create a Legal Proposal '<strategyId>' strategy in Waiting Decision Status with Reviewer by api
                And Verify default user
                When Clicks on 'Provide Decision' button in Current Status view
                And Selects 'Approve' button decision
                And Types a comment 'Approve Decision' on Comments field
                And Clicks on Save button from proposal modal
                Then The proposal should be change the to 'Active' in Current Status

                And Clicks on 'Abort' button in Current Status view
                And Selects 'Quit' Reason and types 'Abort Decision' on Comments fields
                Then The proposal should be change the to 'Aborted' in Current Status


                Examples:
                        | strategyId | strategy                            |
                        | 40         | PER                                 |
                        | 38         | Sale + PA                           |
                        | 20         | Payment Agreement                   |
                        | 39         | Rent Pledge                         |
                        | 18         | Discount Payoff + Payment Agreement |
                        | 17         | Discount Payoff                     |
                        | 2          | Loan Sale                           |
                        | 44         | 3rd Party Sale                      |
                        | 4          | Sale                                |
                        | 21         | Payoff                              |
                        | 41         | BK Payment Plan                     |
                        | 74         | Legal - CIC Virtual                 |
                        | 24         | Recycle Amount(litigator)           |
                        | 48         | Expected Amount (3rd Party)         |
                        | 30         | Recycle Amount(vehicle)             |
