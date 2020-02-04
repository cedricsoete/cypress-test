/// <reference types="Cypress" />

const productName = 'On The Streets Black T-Shirt';

describe('list', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('add product', () => {
        cy.addProduct(productName);
        cy.get('.float-cart__shelf-container .shelf-item')
            .should('have.length', 1)
            .find('.title').should('have.text', productName);

        cy.get('.bag .bag__quantity').should('have.text', '1');

        cy.get('.float-cart__close-btn').click();

        cy.addProduct(productName);
        cy.get('.float-cart__shelf-container .shelf-item')
            .should('have.length', 1);
        cy.get('.bag .bag__quantity').should('have.text', '2');
        cy.get('.sub-price .sub-price__val').should('have.text', '$ 98.00');
    });

    it('should filter products by size', () => {
        cy.get('.filters .filters-available-size').each($size => {
            if($size.find('.checkmark').text() === 'M') {
                cy.wrap($size).click();
            }
        });

        cy.get('.shelf-container .shelf-item').should('have.length', 1);
    });
});