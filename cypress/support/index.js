// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
require ('cypress-plugin-tab')
import './generateCnpj'
import './security'
import './modal'
import './navigations'
import './reporter'
import './usuarios-perfil/requests'
import './usuarios-perfil/gerador-usuarios'
import './usuarios-perfil/requests-perfil'
import './cotacoes/requests'
import './cotacoes/request-quotation'
import './checkout/request-checkout'
import './moderacao/request-moderation'
import './proposta/request-proposal'
// Alternatively you can use CommonJS syntax:
// require('./commands')