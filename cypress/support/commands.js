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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Command pra Realizar Login  salvando cache e criando uma session recebendo um Username e Password
Cypress.Commands.add('login', (username, password) => {
    cy.session([username,password], () => {
        cy.visit("https://www.kasa.live/")
        cy.wait(5000)
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-email"]').type(username)
        cy.get('[data-cy="login-password"]').type(password)
        cy.get('[data-cy="login-submit"]').click()
        cy.get('[data-cy="link/favoritos"] > .chakra-text').should('have.text','Favoritos')
    },
    {
        cacheAcrossSpecs: true
    })
  
})

    //Command pra Realizar Login sem salvar cache e nem criar session Recebendo um Username e Password
Cypress.Commands.add('login_teste', (username, password) => {
        cy.visit("https://www.kasa.live/")
        cy.wait(5000)
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="login-email"]').type(username)
        cy.get('[data-cy="login-password"]').type(password)
        cy.get('[data-cy="login-submit"]').click()
})