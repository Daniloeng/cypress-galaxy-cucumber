Feature: Change Legal Proposals from Draft to Waiting Decision Status
    As a head user
    I want to change the Status of a Legal Proposal from Draft to Waiting Decision status

    Background: Navigate to Proposal tab

    Scenario Outline: Submit for Decision a Legal Proposal from Draft Status '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Draft Status by api
        And Verify default user
        When Clicks on 'Submit for Decision' button in Current Status view
        And Types a comment 'For Decision' on Comments field
        And Clicks on Save button from proposal modal
        Then The proposal should be change the to 'Waiting Decision' in Current Status
        And Should be visible a text 'For Decision' in current timeline


        Examples:
            | strategyId | strategy                            |
            | 40         | PER                                 |
            | 38         | Sale + PA                           |
            | 39         | Rent Pledge                         |
            | 20         | Payment Agreement                   |
            | 18         | Discount Payoff + Payment Agreement |
            | 17         | Discount Payoff                     |
            | 2          | Loan Sale                           |
            | 44         | 3rd Party Sale                      |
