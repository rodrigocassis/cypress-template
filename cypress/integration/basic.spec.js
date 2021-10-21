/// <reference types="cypress" />


describe('Cypress basico', () => {
    it('Deve visitar uma página e dar um assert', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')


        cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')

        cy.title().debug()



        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

    })

    it('Deve localizar e clicar no elemento', () => {


        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')

    })

    it.only('Verificando o titulo', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title().then(title => {
            console.log(title)
        })

        cy.title().should(title => {
            console.log(title)
        })

    })




})