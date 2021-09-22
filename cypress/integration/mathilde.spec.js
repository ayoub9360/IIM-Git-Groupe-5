describe('Test de Mathilde', () => {
  beforeEach(() => {
    cy.visit('https://stoic-lamarr-e9fb60.netlify.app/mathilde')
  })

  it('Check if Mathilde page exist via nav', () => {
    cy.visit('https://stoic-lamarr-e9fb60.netlify.app/')

    cy.get('a').contains('Mathilde').click();
  })
})
