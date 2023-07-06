import { JsxEmit } from "typescript"

export class OrderPage{
    firtName = 'Are'
    lastName = 'Riana'
    zipcode = '12920'

    createOrder(){
        cy.get('.btn_action').contains('CHECKOUT').click()
        cy.get('[data-test="firstName"]').type(this.firtName)
        cy.get('[data-test="lastName"]').type(this.lastName)
        cy.get('[data-test="postalCode"]').type(this.zipcode)
        cy.get('input[type="submit"]').click()
        cy.get('.btn_action').contains('FINISH').click()
    }
    assertOrder(){
        cy.get('.complete-header').should('contain','THANK YOU FOR YOUR ORDER')
    }
}