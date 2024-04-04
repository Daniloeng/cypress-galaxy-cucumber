Feature: Galaxy - Management - Proposals
    As Head
    I want to make a complete flow of an Amicable proposal
    and its associated strategies
    since this proposal has not an associated legal case

    Scenario Outline: Approve an Amicable Proposal doing the complete flow with <strategyName> strategy
        #Draft to Waiting Review
        Given Create an Amicable proposal with id "<strategyId>" "<strategyName>" strategy without legal case associated
        And Verify default user
        When Selects on Assets from Assets view
        And Clicks on 'Send to Review' button in Current Status view
        And Types a comment 'Send to review' on Recommendation field from proposal modal
        And Clicks on Save button from proposal modal
        Then The proposal should be change the atention status to 'Waiting Review'
        And Should be visible a text Send to review in current timeline

        #Waiting Review to Waiting Review Acknowledge
        When Delegate the season to the 'testautomationreview' user
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

        When Delegate the season to the 'testautomationhead' user

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
