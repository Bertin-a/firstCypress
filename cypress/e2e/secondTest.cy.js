

describe('create and mark-unmark as favorite', ()=>{
   

    
    it('Verify that the user can sign in', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=a7yz34')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('bertinaayuure0147@gmail.com')
        cy.get('input[type="password"]').type('1234')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed').should('be.visible')
        cy.contains('Global Feed').should('be.visible')
    })
    
    it('Verify that the user can create a post', () => {
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
     });


  
})

