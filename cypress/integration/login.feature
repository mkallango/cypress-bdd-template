@access_control @login @regression
Feature: Access Control - Login

              As an User I want to access my LinkedIn home page, with a valid User.
              If any information is incorrect, login shall not be allowed.

        Background:
            Given user is at LinkedIn login page

        Scenario Outline: Validate login successful            
             When I fill login fields with "<user>" data
              And click to login
             Then shall be displayed the "<user>" main page
        Examples:
                  | user              |
                  | Juarez Mequetrefe |
                  | John Nobody       |

        @smoke
        Scenario: Validate login behavior with invalid User            
             When I fill the email with invalid data
              And click to login
             Then shall be displayed a security check
