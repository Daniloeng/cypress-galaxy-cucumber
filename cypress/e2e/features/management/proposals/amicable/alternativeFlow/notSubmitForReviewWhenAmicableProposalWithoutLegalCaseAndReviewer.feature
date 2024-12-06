Feature: Amicable Proposal - Dont send to submit to review an amicable proposal when it dont have reviewer associeted
    As Manager
    I cant send submit to review an amicable proposal
    whe the proposal doesnt have legal case associated
    and any reviewer associated

    Scenario Outline: Dont send to submit to review an amicable proposal when it dont have reviewer associeted with <strategyName> strategy
        #Draft to Waiting Review
        Given Create an Amicable proposal with id "<strategyId>" "<strategyName>" strategy without legal case and reviewer associated
        # //for execution in parallel
        And Set '2195' testUserId on Local storage
        And Verify default user
        Then The 'Send to Review' button from current status line should be not visible

        Examples:
            | strategyId | strategyName                                     |
            | 2          | Loan Sale                                        |
            | 4          | Sale                                             |
            | 13         | Deed in Lieu                                     |
            | 15         | Deed in Lieu + Payment Agreement                 |
            | 20         | Payment Agreement                                |
            | 17         | Discount Payoff                                  |
            | 18         | Discount Payoff + Payment Agreement              |
            | 21         | Payoff                                           |
            | 38         | Sale + PA                                        |
            | 45         | Campaign                                         |
            | 46         | Sale by Real Estate (ASRED)                      |
            | 47         | Sale by Real Estate (ASRED) + PA                 |
            | 59         | Performing Secured - Sale                        |
            | 60         | Performing Secured - Sale by Real Estate (ASRED) |
            | 61         | Performing Secured - Sale + PA                   |
            | 62         | Performing Secured - Payment Agreement           |