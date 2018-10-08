  beforeEach(() => {
    cy.log("Used Url Is https://www.etuovi.com")
    cy.log("Used Resolution is 1920 x 1080")
    cy.visit('https://www.etuovi.com/')
    cy.viewport(1920, 1080)
  })

//  afterEach(() => {
//    cy.log("Take Screenshot For Verification Purposes")
//    cy.screenshot()
//  })

describe('Search Cheapest One Room Apartment From City Of Tampere', function() {

 it('Test 1', () => {

  cy.log("Verify Current URL")
    cy.url().should('eq', 'https://www.etuovi.com/')

  cy.log("Fill Default Text To Search Bar")
    cy.get('#id6').type('Tampere')
    cy.get('#addUnclassified').click()

  cy.log("Select Type Of Flat")
    cy.get('#ddcl-input-subCategory').click()
    cy.get('#ddcl-input-subCategory-i0').click({ force: true })
    cy.contains('Sulje').click({ force: true })

  cy.log("Fill Price Range")
    cy.get('#minPrice').type('100')
    cy.get('#maxPrice').type('150')

  cy.log("Select Number Of Rooms")
    cy.get('#ddcl-input-rooms').click()
    cy.get('#ddcl-input-rooms-i0').click({ force: true })
    cy.contains('Sulje').click({ force: true })

  cy.log("Fill Flat Size")
    cy.get('#minSize').type('20')
    cy.get('#maxSize').type('50')

  cy.log("Click Search Button")
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    cy.get('a').find('strong').contains('Hae').next().click({ force: true })

  cy.log("Sort Search Results From Cheapest To Most Expensive")
    cy.contains('Halvimmat ensin, €').click()

  cy.log("Collect Attributes From Cheapest Apartment")
    cy.contains('Koko').first().click({ force: true })

 })
})