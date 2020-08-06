import {
    Given as Dado
} from "cypress-cucumber-preprocessor/steps";
import Login from '../../page_objects/login_po'

Dado(/^que o "(.*)" esteja logado no sistema$/, (usuario) => {
    cy.server()
    cy.Login(usuario)
    cy.viewport(1366, 800)
})
