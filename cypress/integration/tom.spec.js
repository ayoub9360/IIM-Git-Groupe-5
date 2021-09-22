describe('Tom title compare text', () => {
    beforeEach(() => {
      cy.visit('https://stoic-lamarr-e9fb60.netlify.app/tom')
    })
  
    it('Check if title is correct', () => {
      cy.get('h1').should('have.text', 'Hello, my name is Tom')
    })
  })