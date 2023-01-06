/// <reference types="Cypress" />

describe('Home Pillowtex', () => {
    beforeEach(() => cy.visit('/'));
    

    it('CT01 - Validar acesso a HOME', () => {
        cy.visit('/lojas');
        cy.get('a.col-span-2 > img.h-8').click();
        cy.title().should('eq', "Pillowtex");
        cy.location('href').should('eq', 'https://www.pillowtex.com.br/');
    })

    it('CT02 -', () => {})

    it('CT03 -', () => {})

    it('CT04 -', () => {})

    it.only('CT05 - Validar cadastro de usuário novo pelo MINHA CONTA no rodapé', () => {
        cy.scrollTo('bottom');
        cy.contains('Minha conta').click();
        cy.title('contain', 'Acessar minha conta');
        cy.get('#headlessui-tabs-tab-2 > p').as('cadastrar').should('be.visible').and('have.text', 'Quero me cadastrar');

        cy.get('@cadastrar').click();
        cy.get('p:contains(Vamos ajuda-lo com o seu cadastro, é bem rapido!)').should('be.visible').and('have.text', 'Vamos ajuda-lo com o seu cadastro, é bem rapido!');

        cy.get('#name').should('be.visible').type('Jaspion Da Silva');
        cy.get('#name').should('have.value', 'Jaspion Da Silva');
        cy.get('#document').should('be.visible').type('17300772005');
        cy.get('#document').should('have.value', '173.007.720-05');
        cy.get('#phone').should('be.visible').type('9988774455');
        cy.get('#phone').should('have.value', '(99) 8877-4455');
        cy.get('#email').should('be.visible').type('jaspion7@email.com');
        cy.get('#email').should('have.value', 'jaspion7@email.com');
        cy.get('#password').should('be.visible').type('JaspionMelhorMetalHero@1');
        cy.get('#password').should('have.value', 'JaspionMelhorMetalHero@1');
        cy.get('#passwordVerify').should('be.visible').type('JaspionMelhorMetalHero@1');
        cy.get('#passwordVerify').should('have.value', 'JaspionMelhorMetalHero@1');
        cy.get('button:contains(Cadastrar)').click();

        cy.intercept('GET', 'https://www.pillowtex.com.br/api/customer/profile').as('getProfile');
        cy.wait('@getProfile').its('response.statusCode').should('eq', 200);
        cy.get('div.Toastify__toast--success').should('be.visible').and('have.text', 'Cadastro realizado com sucesso')

    })

    it('CT06 -', () => {})
    
    it('CT07 -', () => {})

    it('CT08 -', () => {})

    it('CT09 -', () => {})

    it('CT10 -', () => {})
})