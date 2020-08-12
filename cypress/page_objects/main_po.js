class MainPage{
  constructor(){
    this.signinBtn = '[data-tracking-control-name="guest_homepage-basic_nav-header-signin"]'
  }

  clickOnSignIn(){
    cy.get(this.signinBtn).should('be.visible').click()
  }
}

export default new MainPage()