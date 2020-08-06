class Login {
  constructor() {
    this.emailOrPhoneInput = 'input#username'
    this.passwordInput = 'input#password'
    this.loginBtn = 'button[data-litms-control-urn="login-submit"]'
  }

  login(email, password) {
    this.fillFields({ email, password })
    this.clickLogin()
  }

  fillFields({ email, password }) {
    cy.get(this.emailOrPhoneInput).should('be.visible').type(email)
    cy.get(this.passwordInput).should('be.visible').type(password)
  }

  inputEmail(email) {
    cy.get(this.emailOrPhoneInput).should('be.visible').type(email).blur()
    cy.get(this.passwordInput).clear()
  }

  clickLogin() {
    cy.get(this.loginBtn).should('be.visible').click()
  }
}

export default new Login()