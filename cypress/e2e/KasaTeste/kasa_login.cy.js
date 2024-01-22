/// <reference types="cypress" />

describe('Teste Funcional de Login', () => {


    it ("Deve Realizar Login com Sucesso", () => {
        //Chama o commando de login passando Email e Senha Valido
        cy.login_teste('yajomos629@wuzak.com','123456')
        //Confirmando que foi logado com sucesso se a pagina agora contém aba Favoritos 
        cy.get('[data-cy="link/favoritos"] > .chakra-text').should('have.text','Favoritos')
        //Saindo da Conta
        cy.get('[data-cy="btn-trigger-profile"]').click()
        cy.get('[data-cy="btn-logout-profile"]').click()


    });

    it ("Validando Email Login ", () => {
        //Chama o commando de Login passando Email invalido e Senha Valida
        cy.login_teste('blablabla@errado,com','123456')
        //Confirmando se aparece notificação de email invalido 
        cy.get('.css-1r2zjfs').should('contain','e-mail')

        
        
    });

    it ("Validanddo Senha Errada", () => {
        //Chama o commando de Login passando Email valido e Senha invalida
        cy.login_teste('yajomos629@wuzak.com','1234')
        cy.wait(1000)
        //Confirmando se aparece notificação de Senha invalida
        cy.get('.Toastify__toast-body > :nth-child(2)').should('contain','Não')
        
    });
});