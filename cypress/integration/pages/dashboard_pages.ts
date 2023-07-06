export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    shopping_cart_counter = '.fa-layers-counter'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    addToCart(){
        cy.get('.btn_primary').contains('ADD TO CART').click()
        cy.get(this.shopping_cart_counter).should('contain','1')
    }
    removeFromCart(){
        cy.get('.btn_secondary').contains('REMOVE').click()
        cy.get(this.shopping_cart_counter).should('not.exist')
    }
    clickShoppingCart(){
        cy.get('.shopping_cart_link').click()
    }
}