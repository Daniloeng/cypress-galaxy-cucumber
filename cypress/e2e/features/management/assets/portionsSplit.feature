# Feature: Assets - Portions - Split

#     This Feature is a automated test to Split a portion

#     Background: 
#       Given An user is on Assets '3478' view in 'portions' screen
#       And Select all portions to be closed
#       And '2' Portions are created by API

#     Scenario Outline: Split Asset portion
#         When Select a active portion
#         And Clicks on Split button in Assets portions
#         And Clicks on 'Save' button
#         Then Check if the Portions were splited