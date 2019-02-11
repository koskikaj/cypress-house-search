// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("testApiEndpoint", (endpoint, httpStatusCode) => {
  cy.request(Cypress.config('baseUrl') + endpoint, {})
  .then((response) => {
    expect(response.status).to.equal(httpStatusCode)
  })
})

Cypress.Commands.add("flatAttributeValues", (city, minPrice, maxPrice, minSize, maxSize) => {
    cy.get('#id6').type(city)
    cy.get('#addUnclassified').click()
    cy.get('#ddcl-input-subCategory').click()
    cy.get('#ddcl-input-subCategory-i0').click({ force: true })
    cy.get('[class^="ui-dropdownchecklist"]').next().contains('Sulje').click({ force: true })
    cy.get('#minPrice').type(minPrice)
    cy.get('#maxPrice').type(maxPrice)
    cy.get('#ddcl-input-rooms').click()
    cy.get('#ddcl-input-rooms-i0').click({ force: true })
    cy.get('[class^="ui-dropdownchecklist"]').next().contains('Sulje').should('be.visible').click({ force: true })
    cy.get('#minSize').type(minSize)
    cy.get('#maxSize').type(maxSize)
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get('[class="submit"]').contains('Hae').click({ force: true })
})
