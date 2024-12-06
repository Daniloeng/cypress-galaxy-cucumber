Feature: Documents - Unidentified - Filters

    This feature is an automated test of filter action on unidentified documents
    As a head user

    Background: Navigate to Documents Unidentified tab
        Given Navigate to Documents 'Unidentified' tab in the 'docsunidentified' url
        When Selects 'Table' in View
        And 'Unidentified' table is loaded
        And Selects All columns option in dropdown columns
        And Clicks on Global Filter button of the table
        And Wait for filter in the Documents table

    Scenario Outline: Filter Unidentified Documents by the Name column with the filter '<filterType>'
        When Clicks on the filter option in the 'title' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'title' Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'title' column applied

        Examples:
            | filterType     | dataToSearch                         |
            # | Equals to      | Acórdão TRGuimarães                  | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            # | Different from | Acórdão                              | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            | Contains       | Acórdão                              |
            # | Is empty       |                                      | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            # | Starts with    | 200175_Trib                          | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            # | Ends with      | 107093677                            | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032

    Scenario Outline: Filter Unidentified Documents by the File Name column with the filter '<filterType>'
        When Clicks on the filter option in the 'fileName' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'fileName' Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'fileName' column applied

        Examples:
            | filterType | dataToSearch |
            # | Equals to      | 90d8b648-0cd9-4b5c-9f32-7a4ccee1221b.pdf | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            # | Different from | 90d8b648-0cd9-4b5c-9f32-7a4ccee1221b.pdf | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            # | Starts with    | 90d8b648                                 | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            | Contains       | 4b5c                                     |
            # | Is empty       |                                          | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            # | Ends with      | 221b.pdf                                 | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032

    Scenario Outline: Filter Unidentified by the '<filter>' Type field

        When Filters by '<filter>' in the Type field of the Unidentified table screen
        And Wait for filter applied in the Documents table
        Then Only Unidefined with this '<filter>' Type should displayed in the list

        Examples:
            | filter                      |
            | Carta Devolvida             |
            | Acordão da Relação          |
            | Verba de Contrato de Cessão |

    Scenario Outline: Filter Unidentified Documents by the '<filter>' Status field

        When Filters by '<filter>' in the Status field of the Unidentified table screen
        And Wait for filter applied in the Documents table
        Then Only Unidefined with this '<filter>' Status should displayed in the list

        Examples:
            | filter                |
            | Archived              |
            | Staging - Not Scanned |

    Scenario Outline: Filter Unidentified Documents by the '<filter>' Direction field

        When Filters by '<filter>' in the Direction field of the Unidentified table screen
        And Wait for filter applied in the Documents table
        Then Only Unidefined with this '<filter>' Direction should displayed in the list

        Examples:
            | filter          |
            | Arquivo Externo |
            | Received        |
            | Sent            |

    Scenario Outline: Filter Unidentified Documents by the Date column with the filter '<filterType>'
        When Clicks on the filter option in the 'date' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'date' Date Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'date' column applied

        Examples:
            | filterType            | dataToSearch |
            | Is empty              |              |
            | Greater than          | 2023-03-27   |
            | Less than             | 2023-02-23   |
            | Less than or equal    | 2023-02-23   |
            | Greater than or equal | 2023-02-23   |
            | Different from        | 2023-02-23   |
            | Equals to             | 2023-02-23   |

    Scenario Outline: Filter Unidentified Documents by the Due Date column with the filter '<filterType>'
        When Clicks on the filter option in the 'dueDate' Date column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'dueDate' Date Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the date items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'dueDate' column applied

        Examples:
            | filterType         | dataToSearch |
            # | Is empty              |              |  https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            | Equals to             | 2023-03-27   |
            | Different from        | 2023-03-27   |                
            | Less than             | 2023-03-21   |
            | Less than or equal    | 2024-01-18   |
            | Greater than          | 2023-03-27   |
            | Greater than or equal | 2023-10-26   |

    Scenario Outline: Filter Unidentified Documents by the Barcode column with the filter '<filterType>'
        When Clicks on the filter option in the 'barcodeId' column
        And Selects the '<filterType>' option in the dropdown-menu
        And Writes '<dataToSearch>' to be searched in the 'barcodeId' Name column filter
        And Wait for filter applied in the Documents table
        Then The datatable should show the string items according to the filter '<filterType>' option and '<dataToSearch>' data in the 'barcodeId' column applied

        Examples:
            | filterType | dataToSearch |
            # | Is empty              |              |  https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            | Equals to             | 23401624     |
            # | Different from        | 23401624     | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032
            | Less than             | 31678540     |
            | Less than or equal    | 31678540     |
            | Greater than          | 23401615     |
            | Greater than or equal | 23401615     |

    Scenario Outline: Filter Unidentified Documents by the '<filter>' Is Confidential field
        When Filters by '<filter>' in the Is Confidential Unidentified field of the Documents table screen
        And Wait for filter applied in the Documents table
        Then Only Unidefined with this '<filter>' Is Confidential Unidefined should displayed in the list

        Examples:
            | filter |
            | Yes    |
            | No     |

    Scenario Outline: Filter Unidentified Documents by the Last Modified column with the filter '<filterType>'
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
            # | Is empty              |             | https://dev.azure.com/Whitestar-AssetSolutions/GALAXY/_sprints/backlog/Concordia/GALAXY/MVP/Sprint%20119?workitem=136032