import {
    Given as Dado
} from "cypress-cucumber-preprocessor/steps";
import Login from '../../page_objects/login_po'
import MainPage from "../../page_objects/main_po";

Dado(/^user is logged at LinkedIn$/, () => {    
    cy.visit('')
    cy.viewport(1366, 800)
    MainPage.clickOnSignIn()
    
    cy.fixture('users').then((usersFixture) => {
        let userInfo = usersFixture.find(obj => {      
          return obj.name === "Juarez Mequetrefe"
        })
        Login.login(userInfo)
    })    
})
