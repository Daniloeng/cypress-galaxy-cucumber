Feature: Documents Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Documents tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario Outline: "<submenu>" page should be visible
        When Clicks on "<submenu>" tab on "document" menu
        Then On "<page>" page should be open

        Examples:
            | submenu | page |
            | All     | All  |
    # | Recent         | Recent         |
    # | Unidentified   | Unidentified   |
    # | Of Customers   | Of Customers   |
    # | Of Debts       | Of Debts       |
    # | Of Assets      | Of Assets      |
    # | Of Legal Cases | Of Legal Cases |
    # | Of Cashflow    | Of Cashflow    |
    # | Received       | Received       |
    # | Sent           | Sent           |

    Scenario: Document Storages page should be visible
        When Clicks on "Storage" tab on "document" menu
        Then On "Document Storages" different page should be open
