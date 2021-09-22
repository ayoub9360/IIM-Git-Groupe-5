describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://stoic-lamarr-e9fb60.netlify.app/')
    })
  
    it('Click on a link in the navbar', () => {
      cy.get('a').first().click()
    })
  })