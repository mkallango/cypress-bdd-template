@feed @regression
Feature: Feed - Header

              As an User I need a navigation bar with specific actions.

        Background: Login:
            Given user is logged at LinkedIn
     
        @smoke
        Scenario: Validate that Navigation buttons are displayed            
             Then all navigation buttons shall be displayed

        Scenario: Validate user search
             When I search for "John Nobody"
             Then a list with results shall be displayed
