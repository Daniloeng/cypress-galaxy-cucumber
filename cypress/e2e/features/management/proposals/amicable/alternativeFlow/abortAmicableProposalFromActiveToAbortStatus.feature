Feature: Galaxy - Management - Proposals
        As a head user
        I want to abort an amicalbe proposal with their strategys

        Scenario Outline: Reject an Amicable Proposal in Waiting Decision status with <strategyName> strategy
                Given Create an Amicable proposal with id "<strategyId>" "<strategyName>" strategy to change to abort status
                And Verify default user
                When Click on Abort button from Current Status time line from proposal screen
                And Types a comment 'Amicable proposal aborted' on Comments field
                And Selects 'Did not obtain funding' option from Reason dropbox in Abort Proposal modal from proposal screen
                And Clicks on Save button from proposal modal
                Then The proposal should be change to 'Aborted' 'inactive' status
                And Should be visible a text 'Amicable proposal aborted' negative in current timeline

                Examples:
                        | strategyId | strategyName                                     |
                        | 4          | Sale                                             |
                        | 13         | Deed in Lieu                                     |
                        | 15         | Deed in Lieu + Payment Agreement                 |
                        | 17         | Discount Payoff                                  |
                        | 18         | Discount Payoff + Payment Agreement              |
                        | 21         | Payoff                                           |
                        | 38         | Sale + PA                                        |
                        | 46         | Sale by Real Estate (ASRED)                      |
                        | 47         | Sale by Real Estate (ASRED) + PA                 |
                        | 59         | Performing Secured - Sale                        |
                        | 60         | Performing Secured - Sale by Real Estate (ASRED) |
                        | 61         | Performing Secured - Sale + PA                   |
                        | 62         | Performing Secured - Payment Agreement           |
                        | 63         | Performing Secured - Deed in Lieu                |
                        | 64         | Performing Secured - Deed in Lieu + PA           |
                        | 65         | Performing Secured - Discount Payoff             |
                        | 66         | Performing Secured - Discount Payoff + PA        |
                        | 67         | Performing Secured - Payoff                      |
                        | 69         | Performing Secured - ASRED + PA                  |
                        | 70         | Unsecured - Discount Payoff (Judicial)           |
                        | 71         | Unsecured - Discount Payoff + PA (Judicial)      |
                        | 72         | Unsecured - Payment Agreement (Judicial)         |
                        | 73         | Unsecured - Payoff (Judicial)                    |
