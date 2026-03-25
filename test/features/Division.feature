Feature: Division
    Scenario: Divide two numbers
        Given I have opened the calculator
        When I type '6/2='
        Then I should see '3'

    Scenario: Divide with zero
        Given I have opened the calculator
        When I press '6'
        And I press '/'
        And I press '0'
        And I press '='
        Then I should see 'Error'