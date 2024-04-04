Feature: Creation of a new Real Estate proposal
  As a Manager
  I want create a Real Estate proposal by Asset

  Background:
    Given An user is on the tab proposals from an asset
    And Verify default user

  Scenario Outline: A new proposal real estate is successfully created in Draft status
    When Clicks on the button Add
    And Clicks on the Manager dropdown and chooses an option
    And Fills 'Real Estate' Business Area with '<strategy>' Strategy and fill '2' on the Additional Costs fields in new Real Estate Proposal
    Then A new proposal real estate is successfully created in Draft status

    Examples:
      | strategyId | strategy                   |
      | 3          | Rent                       |
      | 4          | Sale                       |
      | 5          | Sale with CPCV             |
      | 29         | Sale w/CPCV Reinforcements |
