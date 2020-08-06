@smoke @access_control @login @regression
Feature: Access Control - Login

              As an User I want to access my LinkedIn home page, with a valid User.
              If any information is incorrect, login shall not be allowed.

        Scenario Outline: Validate login successful
            Given user is at LinkedIn login page
             When I fill login fields with "<user>" data
              And click to login
             Then shall be displayed the User main page
        Examples:
                  | user              |
                  | Juarez Mequetrefe |
                  | John Nobody       |

        Scenario: Validate login behavior with invalid User
            Given user is at LinkedIn login page
             When I fill the email with invalid data
             Then shall be displayed an error message

        Scenario: Validate login behavior with invalid Password
            Given user is at LinkedIn login page
             When I fill the email with a valid data
              And I fill the password with an invalid data
             Then shall be displayed an error message

        Scenario: Validate login behavior filling only password
            Given user is at LinkedIn login page
             When preencho os dados apenas com senha
              And clico em entrar
             Then deve ser apresentada uma mensagem abaixo do campo de cpf dizendo "*Campo obrigatório"

        Scenario: Realizar preenchendo apenas o usuário sem senha
            Given user is at LinkedIn login page
             When preencho o cpf do usuário "Administrador Argo"
              And clico em entrar
             Then deve ser apresentada uma mensagem abaixo do campo de senha dizendo "*Campo obrigatório"
