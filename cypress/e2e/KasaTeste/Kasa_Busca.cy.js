/// <reference types="cypress" />

beforeEach(()=>
{
    cy.login('yajomos629@wuzak.com','123456')
})

const baseUrl = 'https://www.kasa.live/' 
const time = "Real Madrid" // Time Existente 
const campeonato = "Campeonato Australiano" // Campeonato Existente
const canal= "CazéTV" // Canal Existente 
const data1="25" // Dia no mes atual
const data2='30' // Dia no mes atual


describe('Teste Funcional de Busca', () => {

    it ("Busca Por Nome De Time ", () => {
        //Abre o Site e Buca pelo time com Jogo
        cy.visit(baseUrl)
        cy.wait(5000)
        cy.get('#filter-team').click().type(time)
        cy.wait(500)
        cy.get('#filter-team').click().type('{enter}')
        // Abre o primeiro card de partida do Time pesquisado
        cy.wait(3000)
        cy.get('.css-shtkpc').contains(time).first().click()
        //Checando URL tem Busca
        cy.url().should('contains','busca') // Retorna as Partidas ou Mensagem sem Partidas no sistema para o time 
    });


    it ("Busca Partida por Campeonato", () => {
        //Abre o Site e Buca pelo Campeonato com Jogo
        cy.visit(baseUrl)
        cy.wait(5000)
        cy.get('#filter-championship').click().type(campeonato)
        cy.wait(500)
        cy.get('[aria-expanded="true"] > :nth-child(2) > .chakra-popover__popper > #popover-content-custom-popover > #popover-body-custom-popover').contains(campeonato).click()
        // Abre o primeiro card de partida do Campeonato pesquisado
        cy.get('.css-shtkpc').contains(campeonato).first().click()
        cy.wait(5000)
        //Checando URL tem Busca
        cy.url().should('contains','busca')    
    });


    it ("Busca Partida por Canal de Transmissão", () => {
        //Abre o Site e Buca pelo Canal de Transmissão 
        cy.visit(baseUrl)
        cy.wait(5000)
        cy.get('#filter-streaming').click().type(canal)
        .wait(500)
        cy.get('[aria-expanded="true"] > :nth-child(2) > .chakra-popover__popper > #popover-content-custom-popover > #popover-body-custom-popover').contains(canal).click()
        cy.wait(5000)
        //Checando URL
        cy.get('.css-shtkpc').contains('Partidas',{ matchCase: false })
        cy.url().should('contains','busca')
    });


    it ("Busca Partida por Dia Atual até Data Selecionada ", () => {
        //Abre o Site e Buca Pela Data atula e a Data Selecionada
        cy.visit(baseUrl)
        cy.wait(5000)
        cy.get('.chakra-input__group > .chakra-input').click()
        cy.get('.css-8atqhb > #popover-trigger-custom-popover > .chakra-portal > .chakra-popover__popper > #popover-content-custom-popover > #popover-body-custom-popover').contains(data1).click()
        cy.get('.css-n0tora').click()
        //Checando URL
        cy.url().should('contains','busca') // Retorna as Partidas ou Mensagem sem Partidas no sistema para o time 
    })

    
    it ("Busca Partida por Perido de Datas Selecionada ", () => {
        //Abre o Site e Buca Pelo Periodo de Data Selecionado
        cy.visit(baseUrl)
        cy.wait(5000)
        cy.get('.chakra-input__group > .chakra-input').click()
        cy.get('.css-8atqhb > #popover-trigger-custom-popover > .chakra-portal > .chakra-popover__popper > #popover-content-custom-popover > #popover-body-custom-popover').contains(data1).click()
        cy.get('.css-8atqhb > #popover-trigger-custom-popover > .chakra-portal > .chakra-popover__popper > #popover-content-custom-popover > #popover-body-custom-popover').contains(data1).click()
        cy.get('.css-8atqhb > #popover-trigger-custom-popover > .chakra-portal > .chakra-popover__popper > #popover-content-custom-popover > #popover-body-custom-popover').contains(data2).click()
        cy.wait(3000)
        cy.get('.css-n0tora').click()
        //Checando URL
        cy.url().should('contains','busca') // Retorna as Partidas ou Mensagem sem Partidas no sistema para o time 
    })

})