/// <reference types="cypress" />

describe('trabalhando com elementos', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo')
            .should('not.exist')

        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .type('funciona')
    })

    it('Deve fazer retrys', () => {

        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')


    })

    it('Uso do find', () => {

        cy.get('#buttonList')
            .click()

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')

        cy.get('#buttonListDOM')
            .click()

        cy.get('#lista li span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')


    })


    it('Uso do timeout 1', () => {

        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo', { timeout: 6000 })
            .should('exist')
    })

    it('Uso do timeout 2', () => {

        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .should('exist')
    })

    it('Uso do timeout 3', () => {

        cy.get('#buttonListDOM')
            .click()

        //  cy.wait(5000)
        cy.get('#lista li span', { timeout: 10000 })
            .should('contain', 'Item 2')


    })


    it('Uso do timeout 4', () => {

        cy.get('#buttonListDOM')
            .click()

        cy.get('#lista li span')
            .should('have.length', 1)

        cy.get('#lista li span')
            .should('have.length', 2)


    })

    it('Click Retry', () => {

        cy.get('#buttonCount')
            .click()
            .should('have.value', '1')

    })

    it.only('Should vs Then', () => {

        cy.get('#buttonListDOM')
            .click()

        cy.get('#lista li span').then($el => {
            console.log($el)
            expect($el).to.have.length(1)
        })

        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
        }).and('have.id','buttonListDOM')

    })

})