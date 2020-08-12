import {
  Given,
  When,
  Then
} from 'cypress-cucumber-preprocessor/steps'

import Login from '../../page_objects/login_po'
import MainPage from '../../page_objects/main_po'

Given(/^user is at LinkedIn login page$/, () => {
  cy.visit('')  
  MainPage.clickOnSignIn()
})

When(/^I fill login fields with "(.*)" data$/, (user) => {
  cy.fixture('users').then((usersFixture) => {
    let userInfo = usersFixture.find(obj => {      
      return obj.name === user
    })
    Login.fillFields(userInfo)
  })
})

When(/^I fill the user "(.*)" email$/, (user) => {
  cy.fixture('users').then((usersFixture) => {
    Login.inputEmail(usersFixture[user].cpf)
  })
})

When(/^I fill the email with invalid data$/, () =>{
  Login.fillFields({email:"teste@teste@test.com", password:"blablabal"})
})

When(/^I try to login with wrong user password$/, () => {
  cy.fixture('users').then((usuariosJson) => {
    Login.preencherCampos({ email: usuariosJson["Juarez Mequetrefe"].email, password: 'XXXX@123' })
  })
})

When(/^I fill only the password$/, () => {
  Login.preencherCampos(DADOS_APENAS_COM_SENHA)
})

When(/^click to login$/, () => {  
  Login.clickLogin()
})

Then(/^shall be displayed the "(.*)" main page$/, (user) => {
  cy.get('[data-control-name="identity_welcome_message"]').then($elem => {
    let firstName = user.split(' ')[0]
    expect($elem.text().trim()).to.contains(firstName)
  })  
})

Then(/^shall be displayed a security check$/,()=>{
  cy.get('#error-for-username').should('be.visible')
  // cy.get('code#captchaInternalPath').should('exist.and.not.be.visible')
})