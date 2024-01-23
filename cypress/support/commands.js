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
        cy.intercept('https://kasalive.api.prod.loomi.com.br/api/1.0/match/?page=1&status=NOTSTARTED&with_channel=true&date_start=2024-01-23').as('carregamento')
        cy.wait('@carregamento')
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
        cy.intercept('/_next/static/css/4d9fd375902f1db1.css').as('carregamento')
        cy.wait('@carregamento')
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('.chakra-modal__content-container').then(($logout)=>{
            if($logout.find('[data-cy="btn-logout-profile"]').length>0){
                cy.get('[data-cy="btn-logout-profile"]').click()
                cy.get('[data-cy="btn-trigger-profile"]').click()
            }
        })
        cy.get('[data-cy="login-email"]').type(username)
        cy.get('[data-cy="login-password"]').type(password)
        cy.get('[data-cy="login-submit"]').click()
})