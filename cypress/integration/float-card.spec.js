describe('float-cards', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should add quantity', () => {
            cy.get('.shelf-container .shelf-item')
            .eq(0)
            .find('.shelf-item__buy-btn')
            .click();

        cy.get('.float-cart__shelf-container .shelf-item .change-product-button')
            .contains('+')
            .click();
        cy.get('.bag .bag__quantity').should('have.text', '2');
        cy.get('.float-cart__shelf-container .shelf-item .change-product-button')
            .contains('+')
            .click();
        cy.get('.bag .bag__quantity').should('have.text', '3');
        cy.get('.float-cart__shelf-container .shelf-item .change-product-button')
            .contains('-')
            .click();
        cy.get('.bag .bag__quantity').should('have.text', '2');
    });
});