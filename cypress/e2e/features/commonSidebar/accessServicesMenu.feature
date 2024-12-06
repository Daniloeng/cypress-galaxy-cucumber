Feature: Access Navigation - Services Sidebar Navigation

    This Feature is a automated test to the Sidebar Navigation in Services tab

    Background: Navigate to the Sidebar
        Given As a head logged in


    Scenario: Services pages should be visible
        When Clicks on 'Suppliers' tab on 'services' menu
        Then On 'Suppliers' different page should be open
        When Clicks on 'Condominium Entities' tab on 'services' menu
        Then On 'Condominiums Entities' different page should be open
        When Clicks on 'Condominium Payments' tab on 'services' menu
        Then On 'Condominiums Payments' different page should be open
        When Clicks on 'Key Safe Storages' tab on 'services' menu
        Then On 'Key Safe Storages' different page should be open
        When Clicks on 'Key Sets' tab on 'services' menu
        Then On 'Key-sets' different page should be open


    Scenario: Insurance Policies page should be visible
        When Clicks on 'Insurances' tab on 'services' menu
        Then On 'Insurance Policies' page should be open
