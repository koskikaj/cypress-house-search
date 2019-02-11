  beforeEach(() => {
    cy.log(Cypress.config().baseUrl)
    cy.visit('')
    cy.viewport('ipad-mini')
  })

describe('Search Flats', function() {

  it('Assert Current Url', () => {
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })

  it('Search Flat', () => {
    cy.flatAttributeValues('Tampere', '100', '150', '20', '40')
    cy.contains('Halvimmat ensin, €').click()
    cy.get('[class="facts"]').first().click({ force: true })
  })

})
