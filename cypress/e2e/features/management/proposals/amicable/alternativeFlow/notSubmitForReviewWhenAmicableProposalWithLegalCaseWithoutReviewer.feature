Feature: Amicable Proposal - Dont send to submit to review an amicable proposal when it dont have reviewer associeted
    As Manager
    I cant send submit to review an amicable proposal
    whe the proposal doesnt have legal case associated
    and any reviewer associated

    Scenario Outline: Dont send to submit to review an amicable proposal when it dont have reviewer associeted with <strategyName> strategy
        #Draft to Waiting Review
        Given Create an Amicable proposal with id "<strategyId>" "<strategyName>" strategy without reviewer associeted
        # //for execution in parallel
        And Set '2195' testUserId on Local storage 
        And Verify default user
        Then The 'Send to Review' button from current status line should be not visible

        Examples:
            | strategyId | strategyName                             |
            # | 53         | Unsecured - Payoff (Auto-Approve)        |
            # | 54         | Outsourcing - Discount Payoff            |
            # | 55         | Outsourcing - Payoff                     |
            | 56         | Outsourcing - Payment Agreement          |
            # | 57         | Outsourcing BPI - Payoff                 |
            | 58         | Outsourcing BPI - Payment Agreement      |
            | 49         | Unsecured - Campaign                     |
            | 50         | Unsecured - Payment Agreement            |
            # | 51         | Unsecured - Discount Payoff              |
            | 52         | Unsecured - Discount Payoff + PA         |
            # | 70         | Unsecured - Discount Payoff (Judicial)   |
            | 72         | Unsecured - Payment Agreement (Judicial) |
            # | 73         | Unsecured - Payoff (Judicial)            |
