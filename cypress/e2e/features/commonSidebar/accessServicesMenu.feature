Feature: Services Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Services tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario Outline: "<submenu>" page should be visible
        When Clicks on "<submenu>" tab on "services" menu
        Then On "<page>" different page should be open

        Examples:
            | submenu              | page                  |
            | Suppliers            | Suppliers             |
            | Condominium Entities | Condominiums Entities |
            | Condominium Payments | Condominiums Payments |
            | Key Safe Storages    | Key Safe Storages     |
            | Key Sets             | Key-sets              |

    Scenario: Insurance Policies page should be visible
        When Clicks on "Insurances" tab on "services" menu
        Then On "Insurance Policies" page should be open
