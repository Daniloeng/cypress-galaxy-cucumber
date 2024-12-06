# Feature: Documents - ALL - Filters

#     This Feature is a automated test to CRUD and VIEWS Operations in Documents
#     As a head user

#     Background: Navigate to Documents All tab
        # Given Navigate to Documents 'All' tab in the '' url
#         When Clicks on Filter icon


#     Scenario Outline: Filter Documents by the Name column with the filter '<filterType>'
#         And Clicks on filtering option under the 'title' Name column
#         And Selects the '<filterType>' option in the dropdown-menu
#         And Writes '<dataToSearch>' to be searched for 'title' Name column
#         Then The datatable should show the '<dataToSearch>' items according to the filter '<filterType>' option on 'title' column

#         Examples:
#             | filterType     | dataToSearch                 |
#             | Different from | JOAO PEDRO GODINHO MARGARIDO |
#             | Contains       | JOAO PEDRO                   |
#             | Starts with    | Col                          |
#             | Equals to      | JOAO PEDRO GODINHO MARGARIDO |
#     #         | Ends with      | IDO                          |



#     Scenario Outline: Filter Documents by the File Name column with the filter '<filterType>'
#         And Clicks on filtering option under the 'fileName' Name column
#         And Selects the '<filterType>' option in the dropdown-menu
#         And Writes '<dataToSearch>' to be searched for 'fileName' Name column
#         Then The datatable should show the '<dataToSearch>' items according to the filter '<filterType>' option on 'fileName' column

#         Examples:
#             | filterType     | dataToSearch             |
#             | Is empty       |                          |
#             | Starts with    | joaos                    |
#             | Equals to      | Payment Req - teste .pdf |
#             | Different from | Andreia Martins Paiva    |
#             | Contains       | Martins                  |
#     # | Ends with      | iva                      |


#     Scenario Outline: Filter Documents by the Barcode column with the filter '<filterType>'
#         And Clicks on filtering option under the 'barcodeId' Name column
#         And Selects the '<filterType>' option in the dropdown-menu
#         And Writes '<dataToSearch>' to be searched for 'barcodeId' Name column
#         Then The datatable should show the '<dataToSearch>' items according to the filter '<filterType>' option on Barcode column

#         Examples:
#             | filterType | dataToSearch |
#             | Is empty   |              |
#             | Equals to  | 31173909     |
#     #         | Less than or equal    | 31173909     |
#     #         | Less than             | 31173909     |
#     #         | Greater than or equal | 31173909     |
#     #         | Greater than          | 31173909     |
#     #         | Different from        | 31173909     |


#     Scenario Outline: Filter Documents by the Document Date column with the filter '<filterType>'
#         And Clicks on filtering option under the 'date' Name column
#         And Selects the '<filterType>' option in the dropdown-menu
#         And Selects the day '<dayToSelect>' to be searched for 'date' Name column
#         Then The datatable should show the filtered date items according to the filter '<filterType>' option on 'date' column

#         Examples:
#             | filterType            | dayToSelect |
#             | Less than             | 10          |
#             | Is empty              |             |
#             | Less than or equal    | 10          |
#             | Greater than or equal | 10          |
#             | Equals to             | 10          |
#             | Different from        | 10          |
#     # | Greater than          | 10          |


#     Scenario Outline: Filter Documents by the Due Date column with the filter '<filterType>'
#         And Clicks on filtering option under the 'dueDate' Name column
#         And Selects the '<filterType>' option in the dropdown-menu
#         And Selects the day '<dayToSelect>' to be searched for 'dueDate' Name column
#         Then The datatable should show the filtered date items according to the filter '<filterType>' option on 'dueDate' column

#         Examples:
#             | filterType            | dayToSelect |
#             | Equals to             | 10          |
#             | Less than or equal    | 10          |
#             | Greater than or equal | 10          |
#             | Less than             | 10          |
#             | Different from        | 10          |
#     # | Is empty              |             |
#     # | Greater than          | 10          |


#     Scenario Outline: Filter Documents by the Last Modified column with the filter '<filterType>'
#         And Clicks on filtering option under the 'modified' Name column
#         And Selects the '<filterType>' option in the dropdown-menu
#         And Selects the day '<dayToSelect>' to be searched for 'modified' Name column
#         Then The datatable should show the filtered date items according to the filter '<filterType>' option on Last Modified column.

#         Examples:
#             | filterType            | dayToSelect |
#             | Is empty              |             |
#             | Greater than          | 10          |
#             | Less than             | 10          |
#             | Equals to             | 10          |
#             | Less than or equal    | 10          |
#             | Greater than or equal | 10          |
#             | Different from        | 10          |
