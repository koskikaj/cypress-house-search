  //Varmista Digian Helsingin konttorin osoite

  describe('My First Test', function() {
  it('Search Digia on Google', function() {
  //Selain näkymän koko
  cy.viewport(2440, 1800)
  //Sivu jota testataan  
    cy.visit('http://www.google.com/')
  //Kirjoita google hakuun Digia	
	cy.get('input[name="q"]').type('Digia Helsinki')
  //Klikataan google-haku nappia
	cy.contains('Google-haku').click()
  //Assert
	cy.contains('Osoite:').next().should('contain', 'Atomitie')
  })
})
