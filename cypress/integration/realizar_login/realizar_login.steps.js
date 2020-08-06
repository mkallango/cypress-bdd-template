import {
  Given as Dado,
  When as Quando,
  Then as Então
} from 'cypress-cucumber-preprocessor/steps'

import Login from '../../page_objects/login_po'

const CPF_NAO_CADASTRADO = { cpf: '72534557033', senha: 'argo@123' }
const DADOS_APENAS_COM_SENHA = { cpf: ' ', senha: 'XXXX@123' }

beforeEach(() => {
  cy.server()
  cy.route('POST', 'security/connect/token').as('login')
})

Given(/^user is at LinkedIn login page$/, () => {
  cy.visit('')
})

When(/^I fill login fields with "(.*)" data$/, (user) => {
  cy.fixture('users.json').then((usuariosJson) => {
    let cleanIdentity = usuariosJson[usuario].cpf.replace(/\./, '').replace('-', '')
    cy.route('GET', `/partyadmin/api/user/info?identity=${cleanIdentity}`).as('partyIdentity')
    Login.fillFields(usuariosJson[usuario])
  })
})

When(/^I fill the user "(.*)" email$/, (user) => {
  cy.fixture('users.json').then((usersFixture) => {
    Login.inputEmail(usersFixture[user].cpf)
  })
})

When(/^I try to login with wrong user password$/, () => {
  cy.fixture('usuarios.json').then((usuariosJson) => {
    Login.preencherCampos({ email: usuariosJson["Juarez Mequetrefe"].email, password: 'XXXX@123' })
  })
})

When(/^I fill only the password$/, () => {
  Login.preencherCampos(DADOS_APENAS_COM_SENHA)
})

When(/^click to login$/, () => {  
  Login.clickLogin()
})

Then(/^shall be displayed the User main page$/, () => {
  cy.wait('@login')
  cy.wait('@partyIdentity')

  // #JuntosSomosMaisFortes
  cy.get('[class^="ModalLetter__"] svg').then($elem => {
    if ($elem.is(':visible')){
      cy.get('[class^="ModalLetter__"] svg').click()
      cy.get('svg[class^="Home__ArgoDigitalLogo"]').should('be.visible')
    }else{
      cy.get('div[class^=Onboarding]').should('be.visible')
    }
  })  
})
