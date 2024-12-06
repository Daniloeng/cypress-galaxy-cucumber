Feature: Amicable Proposal - Complete flow for approval of Amicable Proposals by Head
    As Head
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

        #Waiting Review Acknowledge to Waiting Decision
        When Clicks on 'Submit for Decision' button in Current Status view
        And Types a comment 'For Decision' on Comments field
        And Clicks on Save button from proposal modal
        Then The proposal should be change the to 'Waiting Decision' in Current Status
        And Should be visible a text 'For Decision' alert in current timeline

        When Delegate the season to the 'testhead1' user

        #Waiting Decision to Active
        When Clicks on 'Provide Decision' button in Current Status view
        And Selects 'Approve' button decision
        And Types a comment 'Approve Decision of an amicalbe type and <strategyName> strategy' on Comments field
        And Clicks on Save button from proposal modal
        Then The proposal should be change to 'Active' 'positive' status
        And Should be visible a text 'Approve Decision' in current timeline

        #Back to the galaxy user
        And 'Stop session' delegated to default user
        Then The logged user is activate again

        Examples:
            | strategyId | strategyName         |
            | 49         | Unsecured - Campaign |
            | 50         | Unsecured - Payment Agreement            |
            | 51         | Unsecured - Discount Payoff              |
            | 52         | Unsecured - Discount Payoff + PA         |
            | 70         | Unsecured - Discount Payoff (Judicial)   |
            | 72         | Unsecured - Payment Agreement (Judicial) |
            | 73         | Unsecured - Payoff (Judicial)            |