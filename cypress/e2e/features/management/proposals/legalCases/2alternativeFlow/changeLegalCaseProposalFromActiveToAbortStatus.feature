Feature: Legal Proposal - Change Legal Proposals from Active to Aborted Status
        As a head user
        I want to change Status a Legal Proposal from Actived to Aborted

        Background: Navigate to Proposal tab

        Scenario Outline: Abort a Legal Proposal from Active Status '<strategy>' Strategy
                Given Create a Legal Proposal '<strategyId>' strategy in Waiting Decision Status with Reviewer by api
                # //for execution in parallel
                And Set '2196' testUserId on Local storage 
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
                        | 2          | Loan Sale                           |
                        | 4          | Sale                                |
                        | 7          | Other Pledges                       |
                        # | 8          | Salary Pledge                       |
                        | 17         | Discount Payoff                     |
                        | 18         | Discount Payoff + Payment Agreement |
                        | 20         | Payment Agreement                   |
                        | 21         | Payoff                              |
                        # | 23         | Pledge                              |
                        | 24         | Recycle Amount(litigator)           |
                        | 30         | Recycle Amount(vehicle)             |
                        | 31         | Putback                             |
                        | 38         | Sale + PA                           |
                        | 39         | Rent Pledge                         |
                        | 41         | BK Payment Plan                     |
                        | 40         | PER                                 |
                        | 44         | 3rd Party Sale                      |
                        # | 48         | Expected Amount (3rd Party)         |
                        | 74         | Legal - CIC Virtual                 |
                        # | 75         | PER - Unsecured                     |
                        # | 77         | Custas de Parte                     |
                        | 78         | Rateio                              |
