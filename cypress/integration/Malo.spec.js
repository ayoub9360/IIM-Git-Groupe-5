describe('example to-do app', () => {
    it('should visit a site', () => {

        cy.visit('https://stoic-lamarr-e9fb60.netlify.app')
    })

    it('should click on a link', () => {

        cy.get('a[href*="/malo"][class*=text-green-500]').click()
    })

    it('should click on a link', () => {

    cy.get('a[href*="https://bit.ly/3AAseaI"]').click()
    })


})