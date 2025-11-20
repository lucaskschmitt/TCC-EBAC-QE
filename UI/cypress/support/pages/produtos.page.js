/// <reference types="cypress" />

class produtosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.product-block').eq(2).contains(nomeProduto).click()
    }

    addProdutoCarrinho() {
        cy.wait(1000)
        cy.get('.button-variable-item-33').click()
        cy.wait(1000)
        cy.get('.button-variable-item-Brown').click()
        cy.wait(1000)
        cy.get('[name="quantity"]').clear()
        cy.get('[name="quantity"]').type(2)
        cy.get('.single_add_to_cart_button').click()
    }

    selecaoProduto() {
        cy.wait(1000)
        cy.get('.button-variable-item-33').click()
        cy.wait(1000)
        cy.get('.button-variable-item-Brown').click()
        cy.wait(1000)
        cy.get('[name="quantity"]').clear()
        cy.get('[name="quantity"]').type(50)
    }
        
    addProdutosCarrinho() {
        cy.wait(1000)
        cy.get('.button-variable-item-32').click()
        cy.wait(1000)
        cy.get('.button-variable-item-Blue').click()
        cy.wait(1000)
        cy.get('[name="quantity"]').clear()
        cy.get('[name="quantity"]').type(2)
        cy.get('.single_add_to_cart_button').click()
    }
}

export default new produtosPage()