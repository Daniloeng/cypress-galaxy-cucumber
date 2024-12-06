Feature: Documents - Customers - Filters

    This feature is an automated test of filter action on Customers documents
    As a head user

    Background: Navigate to Documents Of Customers tab
        Given Navigate to Documents 'Of Customers' tab in the 'docsofcustomers' url
        When Selects 'Table' in View
        And 'Of Customers' table is loaded
        And Selects All columns option in dropdown columns
        And Clicks on Global Filter button of the table
        And Wait for filter in the Documents table


    Scenario Outline: Filter Of Customers Documents by the Name column with the filter '<filterType>'
        When Clicks on the filter option in the 'title' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'title' Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'title' column applied

        Examples:
            | filterType | dataToSearch |
            #  | Is empty       |                                      |  https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036
            # | Equals to  | Collateral Documentation_CRPs_C206 (2-2) | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036
            # | Different from | Collateral Documentation_CRPs_C206 (2-2) | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036
            # | Starts with    | Collateral                         | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036
            | Contains   | CPUs         |
            # | Ends with      | 252                            | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036

    Scenario Outline: Filter Of Customers by the '<filter>' Type field
        When Filters by '<filter>' in the Type field of the Unidentified table screen
        And Wait for filter applied in the Documents table
        Then Only Unidefined with this '<filter>' Type should displayed in the list

        Examples:
            | filter                      |
            | Carta Devolvida             |
            | Acórdão                     |
            | Verba de Contrato de Cessão |

    Scenario Outline: Filter Customers Documents by the '<filter>' Status field
        When Filters by '<filter>' in the Status field of the Unidentified table screen
        And Wait for filter applied in the Documents table
        Then Only Unidefined with this '<filter>' Status should displayed in the list

        Examples:
            | filter                |
            | Archived              |
            | Staging - Not Scanned |

    Scenario Outline: Filter Customers Documents by the '<filter>' Direction field
        When Filters by '<filter>' in the Direction field of the Unidentified table screen
        And Wait for filter applied in the Documents table
        Then Only Unidefined with this '<filter>' Direction should displayed in the list

        Examples:
            | filter          |
            | Arquivo Externo |
            | Received        |
            | Sent            |

    Scenario Outline: Filter Customers Documents by the Date column with the filter '<filterType>'
        When Clicks on the filter option in the 'date' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'date' Date Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'date' column applied

        Examples:
            | filterType            | dataToSearch |
            | Is empty              |              |
            | Greater than          | 2011-05-05   |
            | Less than             | 2011-05-05   |
            | Less than or equal    | 2011-05-05   |
            | Greater than or equal | 2011-05-05   |
            | Different from        | 2011-05-05   |
            | Equals to             | 2011-05-05   |

    Scenario Outline: Filter Customers Documents by the Due Date column with the filter '<filterType>'
        When Clicks on the filter option in the 'dueDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'dueDate' Date Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'dueDate' column applied

        Examples:
            | filterType | dataToSearch |
    # | Is empty              |              | Não há dados. Lançar em base de produção
    # | Equals to             | 2023-03-27   | Não há dados. Lançar em base de produção
    # | Different from        | 2023-03-27   | Não há dados. Lançar em base de produção
    # | Less than             | 2023-03-21   | Não há dados. Lançar em base de produção
    # | Less than or equal    | 2024-01-18   | Não há dados. Lançar em base de produção
    # | Greater than          | 2023-03-27   | Não há dados. Lançar em base de produção
    # | Greater than or equal | 2023-10-26   | Não há dados. Lançar em base de produção

    Scenario Outline: Filter Customers Documents by the Barcode column with the filter '<filterType>'
        When Clicks on the filter option in the 'barcodeId' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'barcodeId' Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'barcodeId' column applied

        Examples:
            | filterType            | dataToSearch |
            # | Is empty              |             | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036
            | Equals to             | 1908083      |
            # | Different from        | 1908083     | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036
            | Less than             | 1908083      |
            | Less than or equal    | 1908083      |
            | Greater than          | 1908083      |
            | Greater than or equal | 1908083      |

    Scenario Outline: Filter Customers Documents by the '<filter>' Is Confidential field
        When Filters by '<filter>' in the Is Confidential Unidentified field of the Documents table screen
        And Wait for filter applied in the Documents table
        Then Only Unidefined with this '<filter>' Is Confidential Unidefined should displayed in the list

        Examples:
            | filter |
            | Yes    |
            | No     |

    Scenario Outline: Filter Customers Documents by the Last Modified column with the filter '<filterType>'
        When Clicks on the filter option in the 'modified' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dayToSelect>' to be searched in the 'modified' Date Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dayToSelect>' data in the 'modified' column applied

        Examples:
            | filterType            | dayToSelect |
            | Greater than          | 2023-02-23  |
            | Less than             | 2023-02-23  |
            | Less than or equal    | 2023-02-23  |
            | Greater than or equal | 2023-02-23  |
            | Different from        | 2023-02-23  |
            | Equals to             | 2023-02-23  |
            # | Is empty              |             | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136036
