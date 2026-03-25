Feature: Add
    Scenario: Add two numbers
        Given I have opened the calculator
        When I press '2'
        And I press '+'
        And I press '3'
        And I press '='
        Then I should see '5'
    
    Scenario: Add three numbers
        Given I have opened the calculator
        When I type '13+4+23='
        Then I should see '40'