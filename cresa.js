describe ('https://creseclujnapoca.ro/',() => {

    it('Open the "Prezentare Crese" button',()=>{
        cy.visit('https://creseclujnapoca.ro/');
        cy.get('.item-108').click();
        cy.get('.tabel').should('exist');
       
        
    })
    it('Search the word "plata"',()=>{
        cy.visit('https://creseclujnapoca.ro/');
        cy.get('#mod-search-searchword').type('plata').type('{enter}');
        cy.get('.searchintro').should('exist');
        

    })
    it('Enter a link',()=>{
        cy.visit('https://creseclujnapoca.ro/');
        cy.get('.item-168').click();
        cy.contains('e-primariaclujnapoca.ro/crese/').click();
        cy.url().should('include','cluj');
    })
       

   
    })   


