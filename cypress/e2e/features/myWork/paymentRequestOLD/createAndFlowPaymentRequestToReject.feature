Feature: Payment Request - Create and Flow Payment Request

    This Feature is a automated test to create and flow Payment Request

    Background: Navigate to the Payment Request screen
        Given As a user logged in 'requesttaskpayments' screen
        And 'All' table is loaded
        And Set '2217' testUserId on Local storage
        And Wait for the Payment Request table loaded


    Scenario: Create Payment Request with the following characteristics: Asset; '<type>'; '<item>'; '<supplier>'; Bank Transfer
        When Clicks on 'Add' button in toolbar
        And Fills in Payment Request data Asset Payment Context '<type>' Payment Types, '<item>' item and '<supplier>' supplier
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document '<document>' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
        And Clicks on Save button on Documents sidebar
        Then The document is displayed in the list of Tax Documents

        When Clicks on the 'Ask Validation' button under Current Status on the Payment Request screen
        And Types 'Send for validation' comments for Validation
        And Clicks on 'Save' button
        Then The Payment Request should be change the to 'Validation' in Current Status

        And Set '2197' testUserId on Local storage
        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Types 'Is Valid for next step' in the comment field and sets the field to 'true' is Valid in the Provide Validation
        And Clicks on 'Save' button
        Then The 'Provide Validation' sidebar should be closed
        And The Payment Request should be change the to 'Bank Launch' in Current Status

        When Clicks on the 'Submit To Bank' button under Current Status on the Payment Request screen
        And Selects 'Manual' mode and Submit to Bank
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Pay Decision' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects 'Accept' decision on Provide Decision
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Payment Proof' in Current Status

        When Clicks on the 'Submit' button under Current Status on the Payment Request screen
        And Confirm 'Submit' Payment Request
        Then The 'Accounting' sidebar should be closed
        And The Payment Request should be change the to 'Payment Accounting' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects Reject decision on Provide Decision in Payment Accounting
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        And The Payment Request should be change the to 'Reject' in Current Status
        
        Examples:
            | type             | item  | supplier                               | document   |
            | Valuations       | 80057 | A2v, Lda                               | Valuations |
            # | Broker Fee       | 98509 | Lobioncine - Mediação Imobiliária, Lda | BrokerFee  |


    Scenario: Create Payment Request with the following characteristics: Asset; Blue Prints; 59202; Camara Municipal de Sitnra; Payment Service
        When Clicks on 'Add' button in toolbar
        And Fills in Payment Request data Asset Payment Context Blue Prints Payment Types
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document 'BluePrints' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
        And Clicks on Save button on Documents sidebar
        Then The document is displayed in the list of Tax Documents

        When Clicks on the 'Ask Validation' button under Current Status on the Payment Request screen
        And Types 'Send for validation' comments for Validation
        And Clicks on 'Save' button
        Then The Payment Request should be change the to 'Validation' in Current Status

        And Set '2197' testUserId on Local storage
        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Types 'Is Valid for next step' in the comment field and sets the field to 'true' is Valid in the Provide Validation
        And Clicks on 'Save' button
        Then The 'Provide Validation' sidebar should be closed
        And The Payment Request should be change the to 'Bank Launch' in Current Status

        When Clicks on the 'Submit To Bank' button under Current Status on the Payment Request screen
        And Selects 'Manual' mode and Submit to Bank
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Pay Decision' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects 'Accept' decision on Provide Decision
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Payment Proof' in Current Status

        When Clicks on the 'Submit' button under Current Status on the Payment Request screen
        And Confirm 'Submit' Payment Request
        Then The 'Accounting' sidebar should be closed
        And The Payment Request should be change the to 'Payment Accounting' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects Reject decision on Provide Decision in Payment Accounting
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        And The Payment Request should be change the to 'Reject' in Current Status


    Scenario: Create Payment Request with the following characteristics: Legal Case Instance; Custas de Parte; 103743/23.0YIPRT; André Sequeira Costa; Bank Transfer
        When Clicks on 'Add' button in toolbar
        And Fills in Payment Request data Legal Case Instance Payment Context Custas de Parte Payment Types
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status
        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document 'CustasParte' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
        And Clicks on Save button on Documents sidebar
        Then The document is displayed in the list of Tax Documents

        When Clicks on the 'Ask Validation' button under Current Status on the Payment Request screen
        And Types 'Send for validation' comments for Validation
        And Clicks on 'Save' button
        Then The Payment Request should be change the to 'Validation' in Current Status

        And Set '2197' testUserId on Local storage
        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Types 'Is Valid for next step' in the comment field and sets the field to 'true' is Valid in the Provide Validation
        And Clicks on 'Save' button
        Then The 'Provide Validation' sidebar should be closed
        And The Payment Request should be change the to 'Bank Launch' in Current Status

        When Clicks on the 'Submit To Bank' button under Current Status on the Payment Request screen
        And Selects 'Manual' mode and Submit to Bank
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Pay Decision' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects 'Accept' decision on Provide Decision
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Payment Proof' in Current Status

        When Clicks on the 'Submit' button under Current Status on the Payment Request screen
        And Confirm 'Submit' Payment Request
        Then The 'Accounting' sidebar should be closed
        And The Payment Request should be change the to 'Payment Accounting' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects Reject decision on Provide Decision in Payment Accounting
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        And The Payment Request should be change the to 'Reject' in Current Status
    

    Scenario: Create Payment Request with the following characteristics: Legal Case Instance; Custas de Parte; 103743/23.0YIPRT; André Sequeira Costa; Bank Transfer
        When Clicks on 'Add' button in toolbar
        And Fills in Payment Request data Legal Case Instance Payment Context Custas de Parte Payment Types
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status
        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document 'CustasParte' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
        And Clicks on Save button on Documents sidebar
        Then The document is displayed in the list of Tax Documents

        When Clicks on the 'Ask Validation' button under Current Status on the Payment Request screen
        And Types 'Send for validation' comments for Validation
        And Clicks on 'Save' button
        Then The Payment Request should be change the to 'Validation' in Current Status

        And Set '2197' testUserId on Local storage
        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Types 'Is Valid for next step' in the comment field and sets the field to 'true' is Valid in the Provide Validation
        And Clicks on 'Save' button
        Then The 'Provide Validation' sidebar should be closed
        And The Payment Request should be change the to 'Bank Launch' in Current Status

        When Clicks on the 'Submit To Bank' button under Current Status on the Payment Request screen
        And Selects 'Manual' mode and Submit to Bank
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Pay Decision' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects 'Accept' decision on Provide Decision
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Payment Proof' in Current Status

        When Clicks on the 'Submit' button under Current Status on the Payment Request screen
        And Confirm 'Submit' Payment Request
        Then The 'Accounting' sidebar should be closed
        And The Payment Request should be change the to 'Payment Accounting' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects 'Archive' decision on Provide Decision in Payment Accounting
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        And The Payment Request should be change the to 'Archived' in Current Status


    Scenario: Create Payment Request with the following characteristics: Legal Case Instance; Custas Judiciais - Taxa de Justiça - Injunção; 28181/24.0YIPRT; Balcão Nacional de Injunções; Payment Service
        When Clicks on 'Add' button in toolbar
        And Fills in Payment Request data Legal Case Instance Payment Context Custas Judiciais - Taxa de Justiça - Injunção Payment Types
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document 'CustasJudiciais' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
        And Clicks on Save button on Documents sidebar
        
        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document 'CustasJudiciais' of type 'Nota de Crédito' and fills out the form in the sidebar to add it to the Payment Request
        And Clicks on Save button on Documents sidebar        
        
        Then The document is displayed in the list of Tax Documents
        # When Clicks and Edits the first Tax Details associated with Payment Request on Document screen

        When Clicks on the 'Ask Validation' button under Current Status on the Payment Request screen
        And Types 'Send for validation' comments for Validation
        And Clicks on 'Save' button
        Then The Payment Request should be change the to 'Validation' in Current Status

        And Set '2197' testUserId on Local storage
        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Types 'Is Valid for next step' in the comment field and sets the field to 'true' is Valid in the Provide Validation
        And Clicks on 'Save' button
        Then The 'Provide Validation' sidebar should be closed
        And The Payment Request should be change the to 'Bank Launch' in Current Status

        When Clicks on the 'Submit To Bank' button under Current Status on the Payment Request screen
        And Selects 'Manual' mode and Submit to Bank
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Pay Decision' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects 'Accept' decision on Provide Decision
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Payment Proof' in Current Status

        When Clicks on the 'Submit' button under Current Status on the Payment Request screen
        And Confirm 'Submit' Payment Request
        Then The 'Accounting' sidebar should be closed
        And The Payment Request should be change the to 'Payment Accounting' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects Reject decision on Provide Decision in Payment Accounting
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        And The Payment Request should be change the to 'Reject' in Current Status

        
@focus 
    Scenario: Create Payment Request with the following characteristics: Legal Case Instance; Tax - Property Transfer; 60160/23.0YIPRT; Balcão Nacional de Injunções; Payment Service
        When Clicks on 'Add' button in toolbar
        And Fills in Payment Request data Legal Case Instance Payment Context Tax - Property Transfer Payment Types
        And Clicks on 'Save' button
        Then The 'New Payment Request' sidebar should be closed
        And  Payment Request details is open
        And The Payment Request should be change the to 'New' in Current Status

        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document 'PropertyTransfer' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
        And Clicks on Save button on Documents sidebar

        When Clicks on plus button by topbar
        And Clicks on 'Add Document' button by topbar
        And Inserts the document 'PropertyTransfer' of type 'Nota de Crédito' and fills out the form in the sidebar to add it to the Payment Request
        And Clicks on Save button on Documents sidebar
        
        Then The document is displayed in the list of Tax Documents
        # When Clicks and Edits the first Tax Details associated with Payment Request on Document screen

        When Clicks on the 'Ask Validation' button under Current Status on the Payment Request screen
        And Types 'Send for validation' comments for Validation
        And Clicks on 'Save' button
        Then The Payment Request should be change the to 'Validation' in Current Status

        And Set '2197' testUserId on Local storage
        When Clicks on the 'Provide Validation' button under Current Status on the Payment Request screen
        And Types 'Is Valid for next step' in the comment field and sets the field to 'true' is Valid in the Provide Validation
        And Clicks on 'Save' button
        Then The 'Provide Validation' sidebar should be closed
        And The Payment Request should be change the to 'Bank Launch' in Current Status

        When Clicks on the 'Submit To Bank' button under Current Status on the Payment Request screen
        And Selects 'Manual' mode and Submit to Bank
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Pay Decision' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects 'Accept' decision on Provide Decision
        And Clicks on 'Save' button
        Then The 'Submit to Bank' sidebar should be closed
        And The Payment Request should be change the to 'Payment Proof' in Current Status

        When Clicks on the 'Submit' button under Current Status on the Payment Request screen
        And Confirm 'Submit' Payment Request
        Then The 'Accounting' sidebar should be closed
        And The Payment Request should be change the to 'Payment Accounting' in Current Status

        When Clicks on the 'Provide Decision' button under Current Status on the Payment Request screen
        And Selects Reject decision on Provide Decision in Payment Accounting
        And Clicks on 'Save' button
        Then The 'Provide Decision' sidebar should be closed
        And The Payment Request should be change the to 'Reject' in Current Status
