Feature: Legal Proposal - Change Legal Proposals from Waiting Acknowledge to Waiting Decision Status
    As a head user
    I want to change Status a Legal Proposal from Waiting Acknowledge to Waiting Decision status

    Background: Navigate to Proposal tab

    Scenario Outline: Submit for Decision a Legal Proposal in Waiting Acknowledge Status '<strategy>' Strategy
        Given Create a Legal Proposal '<strategyId>' strategy in Waiting Acknowledge Status with Reviewer by api
        # //for execution in parallel
        And Set '2196' testUserId on Local storage
        And Verify default user
        When Clicks on 'Submit for Decision' button in Current Status view
        And Types a comment 'For Decision' on Comments field
        And Clicks on Save button from proposal modal
        Then The proposal should be change the to 'Waiting Decision' in Current Status
        And Should be visible a text 'For Decision' in current timeline

        Examples:
            | strategyId | strategy                            |
            | 2          | Loan Sale                           |
            | 17         | Discount Payoff                     |
            | 18         | Discount Payoff + Payment Agreement |
            | 20         | Payment Agreement                   |
            | 31         | Putback                             |
            | 38         | Sale + PA                           |
            | 39         | Rent Pledge                         |
            | 40         | PER                                 |
            | 44         | 3rd Party Sale                      |
            | 77         | Custas de Parte                     |
