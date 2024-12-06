# Feature: Payment Request - Actions on Payment Request Detail screen

#     This Feature is a automated test to Action bar on Payment Request screen

#     Background: Navigate to the Payment Request screen
#         Given As a user logged in 'requesttaskpayments' screen
#         And 'In Draft' table is loaded
#         And Set '2197' testUserId on Local storage
#         And Wait for the Payment Request table loaded


#     Scenario: Preview Payment Request screen
#         When Selects first Payment Request from datatable
#         Then Payment Request details is open


#     Scenario: Edit Payment Request in Payment Request preview screen
#         And Selects All columns option in dropdown columns
#         And 'Unselects' the 'Payment Date' column in Columns menu
#         And 'Unselects' the 'Payment Reference' column in Columns menu
#         And Clicks on Global Filter button of the table
#         And Filters by 'New' in the Status field of the Payment Request table screen
#         And Clicks on 'Payment Id' to filter by descending Payment Request datatable
#         When Selects first Payment Request from datatable
#         Then Payment Request details is open
#         When Clicks on 'Edit' button in Payment Request details
#         And Types 'comment test' in comment field on Payment Request edition
#         And Clicks on 'Save' button
#         Then The 'Update Payment Request' sidebar should be closed
 

#     Scenario: Add Tax Document in Payment Request preview screen
#         And Selects All columns option in dropdown columns
#         And 'Unselects' the 'Payment Date' column in Columns menu
#         And 'Unselects' the 'Payment Reference' column in Columns menu
#         And Clicks on Global Filter button of the table
#         And Filters by 'New' in the Status field of the Payment Request table screen
#         And Clicks on 'Payment Id' to filter by descending Payment Request datatable
#         When Selects first Payment Request from datatable
#         Then Payment Request details is open
#         When Clicks on plus button by topbar
#         And Clicks on 'Add Document' button by topbar
#         And Inserts the document 'CustasParte' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
#         And Clicks on Save button on Documents sidebar
#         Then The 'Add Tax Document' sidebar should be closed
#         And The document is displayed in the list of Tax Documents

#         #remove tax document 
#         When Selects the first item from the table
#         And Clicks on 'Remove' button in Tax Documents
#         And Click on the 'Yes' button confirming the remove
#         Then The 'Remove Tax Document' sidebar should be closed


#     Scenario: Edit Tax Document in Payment Request preview screen
#         And Selects All columns option in dropdown columns
#         And 'Unselects' the 'Payment Date' column in Columns menu
#         And 'Unselects' the 'Payment Reference' column in Columns menu
#         And Clicks on Global Filter button of the table
#         And Filters by 'New' in the Status field of the Payment Request table screen
#         And Clicks on 'Payment Id' to filter by descending Payment Request datatable
#         When Selects first Payment Request from datatable
#         Then Payment Request details is open
#         When Clicks on plus button by topbar
#         And Clicks on 'Add Document' button by topbar
#         And Inserts the document 'CustasParte' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
#         And Clicks on Save button on Documents sidebar
#         Then The 'Add Tax Document' sidebar should be closed
#         And The document is displayed in the list of Tax Documents

#         When Selects the first item from the table
#         And Clicks on 'Edit' button in Tax Documents
#         Then The 'Edit Tax Document' sidebar should be opened
#         And Clicks on 'Save' button
#         Then The 'Edit Tax Document' sidebar should be closed


#     Scenario: Remove Tax Document in Payment Request preview screen
#         And Selects All columns option in dropdown columns
#         And 'Unselects' the 'Payment Date' column in Columns menu
#         And 'Unselects' the 'Payment Reference' column in Columns menu
#         And Clicks on Global Filter button of the table
#         And Filters by 'New' in the Status field of the Payment Request table screen
#         And Clicks on 'Payment Id' to filter by descending Payment Request datatable
#         When Selects first Payment Request from datatable
#         Then Payment Request details is open
#         When Clicks on plus button by topbar
#         And Clicks on 'Add Document' button by topbar
#         And Inserts the document 'CustasParte' of type 'Comprovativo de Pagamento' and fills out the form in the sidebar to add it to the Payment Request
#         And Clicks on Save button on Documents sidebar
#         Then The 'Add Tax Document' sidebar should be closed
#         And The document is displayed in the list of Tax Documents

#         When Selects the first item from the table
#         And Clicks on 'Remove' button in Tax Documents
#         And Click on the 'Yes' button confirming the remove
#         Then The 'Remove Tax Document' sidebar should be closed
        