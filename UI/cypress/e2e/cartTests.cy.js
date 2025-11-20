/// <reference types="cypress" />

import produtosPage from "../support/pages/produtos.page";

describe('US-001 - Adicionar produtos ao carrinho', () => {

  beforeEach(() => {
    produtosPage.visitarUrl()
  })

it('Deve permitir a compra de produto disponível', () => {
    produtosPage.buscarProdutoLista('Aether Gym Pant')
    produtosPage.addProdutoCarrinho()
    cy.get('.woocommerce-message').should('contain', '2 × “Aether Gym Pant” foram adicionados no seu carrinho.')
  });

it('Deve permitir a seleção das características do produto', () => {
    produtosPage.buscarProdutoLista('Aether Gym Pant')
    produtosPage.selecaoProduto()
    cy.get('.reset_variations').should('contain', 'Limpar')
    });

it('Deve impedir compra de produto caso esteja fora de estoque', () => {
    produtosPage.buscarProdutoLista('Aether Gym Pant')
    produtosPage.addProdutosCarrinho()
    cy.get('.stock').should('contain', 'Fora de estoque')
  });
})