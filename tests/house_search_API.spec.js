  beforeEach(() => {
    cy.log(Cypress.config().baseUrl)
    cy.viewport('ipad-mini')
  })

describe('API test', function() {

  it('API test 1', () => {
    cy.testApiEndpoint('/localization/Messages.properties', 200)
  })

  it('API test 2', () => {
    cy.testApiEndpoint('/localization/Messages_fi.properties', 200)
  })

})