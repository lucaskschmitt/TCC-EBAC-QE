/// <reference types="cypress" />

const data = require('../fixtures/data.json')
const dataFalse = require('../fixtures/dataFalse.json')

describe('US-002 - Login na plataforma', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Login com credenciais válidas', () => {
    cy.get('.icon-user-unfollow').click()
    cy.login(data.email, data.senha)
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, cliente-4475 (não é cliente-4475? Sair')
  })

  it('Login caso não seja informada a senha', () => {
    cy.get('.icon-user-unfollow').click()
    cy.loginFalse(dataFalse.email)
    cy.get('.woocommerce-error > li').should('contain', 'Erro: O campo da senha está vazio.')
  })

  it('Login com email inválido', () => {
    cy.get('.icon-user-unfollow').click()
    cy.login('cliente@bac.com.br', data.senha)
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

  it('Login com senha inválida', () => {
    cy.get('.icon-user-unfollow').click()
    cy.login(data.email, 'abc123')
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail cliente@ebac.art.br está incorreta. Perdeu a senha?')
    })
})


