Feature: Subtract
    Scenario: Add two numbers
        Given I have opened the calculator
        When I press "5"
        And I press "-"
        And I press "4"
        And I press "="
        Then I should see "1"