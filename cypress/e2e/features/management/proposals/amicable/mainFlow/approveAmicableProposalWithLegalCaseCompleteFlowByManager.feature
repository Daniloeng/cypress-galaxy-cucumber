Feature: Amicable Proposal - Complete flow for approval of Amicable Proposals by Manager
    As Manager
    I want to make a complete flow of an Amicable proposal
    and its associated strategies
    since this proposal has an associated legal case

    Scenario Outline: Complete flow for approval of Amicable Proposals with <strategyName> strategy

        #Draft to Waiting Review
        Given Create an Amicable proposal with id "<strategyId>" "<strategyName>" strategy to do a complete flow
        # //for execution in parallel
        And Set '2195' testUserId on Local storage
        And Verify default user
        When Clicks on 'Send to Review' button in Current Status view
        And Types a comment 'Send to review' on Recommendation field from proposal modal
        And Clicks on Save button from proposal modal
        Then The proposal should be change the atention status to 'Waiting Review'
        And Should be visible a text Send to review in current timeline

        #Waiting Review to Waiting Review Acknowledge
        When Delegate the season to the 'testreview1' user
        And Clicks on 'Complete Review' button in Current Status view
        And Types a review comment 'Reviewed' on Comments and 'All Good' Conclusion fields
        And Clicks on Save button from proposal modal
        Then The proposal should be change the atention status to 'Waiting Review Acknowledge'

        And 'Stop session' delegated to default user
        Then The logged user is activate again

        #Waiting Review Acknowledge to Active
        When Clicks on 'Activate' button in Current Status view
        Then The proposal should be change the to 'Active' in Current Status
        And Should be visible a text 'Proposal activated by Manager' alert in current timeline

        Examples:
            | strategyId | strategyName                        |
            | 53         | Unsecured - Payoff (Auto-Approve)   |
            | 54         | Outsourcing - Discount Payoff       |
            | 55         | Outsourcing - Payoff                |
            | 56         | Outsourcing - Payment Agreement     |
            | 57         | Outsourcing BPI - Payoff            |
            | 58         | Outsourcing BPI - Payment Agreement |

