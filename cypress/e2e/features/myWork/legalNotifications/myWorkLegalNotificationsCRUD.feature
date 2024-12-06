Feature: LegalNotifications - CRUD

    This Feature is a automated test to the Sidebar Navigation in Analytics tab
    Background: Navigate to Legal Notifications
        Given Navigate to Legal Notifications and Click on Show dropdown menu


    # Scenario Outline: Changing Status '<currentStatus>' to '<newStatus>'
    #     When Dropdown Menu is open click on 'Team' '<statusId>'
    #     And  Legal Notifications are shown, click in one that have status: '<currentStatus>'
    #     When Click on Edit button
    #     And  Change status to '<newStatus>'
    #     Then Check if the status was changed successfully

    #     Examples:
    #         | currentStatus               | newStatus                   | statusId |
    #         | New                         | Analyzed                    | 1        |
    #         | New                         | Pendent                     | 1        |
    #         | New                         | Solicitor                   | 1        |
    #         | New                         | Invoice Waiting for Payment | 1        |
    #         | Analyzed                    | Solicitor                   | 13       |
    #         | Analyzed                    | New                         | 13       |
    #         | Analyzed                    | Invoice Waiting for Payment | 13       |
    #         | Analyzed                    | Pendent                     | 13       |
    #         | Analyzed                    | Forward                     | 13       |
    #         | Invoice Waiting for Payment | New                         | 19       |
    #         | Invoice Waiting for Payment | Analyzed                    | 19       |
    #         | Invoice Waiting for Payment | Pendent                     | 19       |
    #         | Invoice Waiting for Payment | Solicitor                   | 19       |
    #         | Pendent                     | New                         | 2        |
    #         | Pendent                     | Invoice Waiting for Payment | 2        |
    #         | Pendent                     | Analyzed                    | 2        |
    #         | Pendent                     | Solicitor                   | 2        |
    #         | Solicitor                   | Pendent                     | 10       |
    #         | Solicitor                   | Analyzed                    | 10       |
    #         | Solicitor                   | Invoice Waiting for Payment | 10       |


    # Scenario Outline: Check if '<roleTypeView>'/All has data
    #     When Dropdown Menu is open click on '<roleTypeView>'.1
    #     And  Open Dropdown menu again and click on 'All'
    #     Then Check if there's any data

    #     Examples:
    #         | roleTypeView |
    #         | Leader       |
    #         | Manager      |


    # Scenario Outline: Check if '<roleTypeView>'/Opened has only status of INITIAL + INTERMEDIATE
    #     When Dropdown Menu is open click on '<roleTypeView>'.1
    #     And  Open Dropdown menu again and click on 'Opened'
    #     Then Check if the data doesn't have the finals statuses

    #     Examples:
    #         | roleTypeView |
    #         | Leader       |
    #         | Manager      |


    Scenario Outline: Remove '<columnName>' column from Manager view
        When Dropdown Menu is open click on "Manager"
        And 'Unselects' the '<columnName>' column in Columns menu
        Then Check if the '<columnName>' column was removed from view

        Examples:
            | columnName           |
            | Assets Claim Number  |
            | Comment              |
            | Status               |
            | Document Category    |
            | Document Type        |
            | Legal Case Number    |
            | Legal Case Type      |
            | Notification Manager |
            | Portfolio Group      |
            | Priority             |
            | Ranking              |
            | Recommended Due Date |
            | Request Date         |


    Scenario Outline: Group Legal Notifications by "<option>"
        When Dropdown Menu is open click on "Team"
        And  Open Dropdown menu again and click on "Opened"
        And  Open Group By menu and click on "<option>"
        Then Check if the Legal Notifications are grouped by "<option>" "<symbol>"

        Examples:
            | option            | symbol |
            # | Document          | -      |
            | Legal Case Number | -      |
