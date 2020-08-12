import {
  Given,
  When,
  Then
} from 'cypress-cucumber-preprocessor/steps'

import FeedHome from '../../page_objects/feedHome_po'

When(/^I search for "(.*)"$/,(search_string)=>{
  FeedHome.searchName(search_string)
})

Then(/^all navigation buttons shall be displayed$/, ()=>{
  //cy.validateObjectsByKeysAreVisible(FeedHome.header.navigation)
  Object.keys(FeedHome.header.navigation).forEach((key)=>{
    cy.get(FeedHome.header.navigation[key]).should('be.visible')
  })  
})

Then(/^a list with results shall be displayed$/,()=>{
  cy.get('.search-results-container').should('be.visible')
})