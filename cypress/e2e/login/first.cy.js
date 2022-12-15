/// <reference types="cypress" />

describe("Login",()=>{
    it('Verify that the user can sign in', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=a7yz34')
        cy.get('input[type="email"]').type('bertinaayuure0147@gmail.com')
        cy.get('input[type="password"]').type('1234')
        cy.get('.btn').contains('Sign in').should('be.visible').click()


    });
  
})