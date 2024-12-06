Feature: Amicable Proposal - Change an Amicable proposal in Waiting Review to Draft
    As an Asset Manager
    I want to change an Amicable proposal from Waiting Review to Draft status

    Scenario Outline: Change an Amicable proposal in Waiting Review to Draft status using <strategyName> strategy
        Given Create an Amicable proposal with id "<strategyId>" "<strategyName>" strategy to change from waiting review to draft status
        # //for execution in parallel
        And Set '2195' testUserId on Local storage 
        And Verify default user
        When Clicks on 'Send to Draft' button in Current Status view
        Then The current Status must be visible 'Draft'
        And The information status on top page should be 'Draft'

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