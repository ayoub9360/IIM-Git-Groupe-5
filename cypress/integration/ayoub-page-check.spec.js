describe('Check content in Ayoub page', () => {
  beforeEach(() => {
    cy.visit('https://stoic-lamarr-e9fb60.netlify.app/')
  })

  it('Click on Ayoub Page', () => {
    cy.get('.justify-around > [href="/ayoub"]').click()
    cy.get('.pb-4').contains('My last project')
  })
})
