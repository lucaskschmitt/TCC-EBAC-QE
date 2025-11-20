// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (user, password) => {
    cy.get('[name="username"]').type(user)
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type(password),
    cy.get('[name="login"]').click()
    })

Cypress.Commands.add('loginFalse', (user) => {
    cy.get('[name="username"]').type(user)
    cy.get('[name="login"]').click()
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })