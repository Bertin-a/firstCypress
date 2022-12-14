


describe('create and mark-unmark as favorite', ()=>{
   

    
    it('sign in', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=a7yz34')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('bertinaayuure0147@gmail.com')
        cy.get('input[type="password"]').type('1234')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed').should('be.visible')
        cy.contains('Global Feed').should('be.visible')
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('New Article')
        cy.get('input[placeholder="What\'s this article about?"').type('Babies')
        cy.get('textarea[placeholder="Write your article (in markdown)"').type('This is a sample article')
        cy.get('input[placeholder="Enter tags"').type('smile, happy')
        cy.contains('Publish Article').click()
        cy.url().should('include','#/article')
        cy.contains('Bertina').click()

        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        //cy.get('.ion-heart').click()
        //cy.url('includes','/favorite')
        cy.go(-1)
        //cy.contains('My Articles').click()

        // cy.get('h1').contains('New Article')
        // cy.contains('Delete Article').click()
        // cy.contains('No articles are here... yet.').should('be.visible')



       
        
       
    
        //cy.forward(1)
        

    })
 

  
})

