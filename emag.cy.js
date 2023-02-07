describe ('eMag',() =>{
    it('search product "jucarii" and go back to main page',()=>{
        cy.visit('https://www.emag.ro/');
        cy.get('.searchbox-wrapper').type('jucarii').type('{enter}');
        cy.get('.listing-panel-heading').should('exist');
        cy.get('[alt="eMAG"]').click();
        cy.get('#main-container').should('exist');
    })

    it('Use button eMAG Help',()=>{
        cy.visit('https://www.emag.ro/');
        cy.get('.navbar-aux-help-link').click();
        cy.get('.home-search-section').should('exist');      


        
    })

})