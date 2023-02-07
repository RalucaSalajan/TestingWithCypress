describe('saucedemo', () => {

    it('I cannot login with false credentials', () => {
         cy.visit('https://www.saucedemo.com/');
         cy.get('#user-name').type('ana.doe');
         cy.get('#password').type('123456');
         cy.get('.submit-button').click();
         cy.get('.error-message-container.error').should('exist');

     })
    
     it('I can login,with correct credentials,and logout', () => {
         cy.visit('https://www.saucedemo.com/');
         cy.get('#user-name').type('standard_user');
         cy.get('#password').type('secret_sauce');
         cy.get('#login-button').click();
         cy.get('.header_secondary_container').should('exist');
     cy.get('#react-burger-menu-btn').click();
     cy.get('.bm-item-list').should('exist');
     cy.get('#logout_sidebar_link').click();
     })

     it('The meniu button works', () => {
         cy.visit('https://www.saucedemo.com/');
         cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('.submit-button').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('.bm-menu-wrap').should('exist');
        cy.get('#react-burger-cross-btn').click();
         cy.get('#page_wrapper').should('exist');

})
it('The cart button exists,I can add,view and delet a product', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#shopping_cart_container').should('exist');
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#shopping_cart_container').click();
    cy.get('.cart_list').should('exist');
    cy.get('#remove-sauce-labs-backpack').click();
    cy.get('#continue-shopping').should('exist');
})
it('See product informationa and buy the product', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#item_0_title_link').click();
    cy.get('#inventory_item_container').should('exist');
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.get('#shopping_cart_container').click();
    cy.get('#checkout').click();
    cy.get('#checkout_info_container').should('exist');




})
it('Verify if "Back to product" button works',()=>{
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#item_4_title_link').click();
    cy.get('#back-to-products').click();
    cy.get('#inventory_container').should('exist');
})
})
