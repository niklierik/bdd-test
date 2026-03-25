Feature: Clear button
    Scenario: Clear the display
        Given I have opened the calculator
        And I have typed '12'
        When I press 'C'
        Then I should see '0'