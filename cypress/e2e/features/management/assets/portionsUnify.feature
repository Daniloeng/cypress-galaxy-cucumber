# Feature: Assets - Portions - Unify

#     This Feature is a automated test to Unify a portion

#     Background: 
#       Given An user is on Assets '3478' view in 'portions' screen
#       And Select all portions to be closed
#       And '2' Portions are created by API

#     Scenario Outline: Unify Asset portion
#         When Select multiple active portions
#         And Clicks on Unify button in Assets portions
#         And Clicks on 'Save' button
#         Then Check if the Portions were unified