Cypress.Commands.add('validateObjectsByKeysAreVisible', (objectsList)=>{
  Object.keys(objectsList).forEach((key)=>{
    cy.get(objectsList[key]).should('be.visible')
  })  
})