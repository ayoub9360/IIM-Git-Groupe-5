describe('Navbar link test', () => {
    beforeEach(() => {
      cy.visit('https://stoic-lamarr-e9fb60.netlify.app/Kevin')
    })
  
    it('Click on a link in the navbar', () => {
      cy.get('a').first().click()
    })
  })