describe('Links are rendering', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Import TXT')
    cy.contains('Input')
    cy.contains('Read')
  })
})

describe('Input is working', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('textarea').type('Hallo Welt. Wieder, hallo Welt')
    cy.get('.navLink').contains('Read').click()
    cy.get('div').contains('Hallo Welt')
    cy.get('div').contains('Wieder, hallo Welt')

    cy.get('div').get('button').contains('Hallo').should('not.be.disabled')
    cy.get('div').get('button').contains('Hallo').click()
    cy.get('div').get('button').contains('Hi').should('not.be.disabled')
    cy.get('div').get('button').contains('Hi').click()
    cy.get('div').get('button').contains('Hallo').should('not.be.disabled')

    cy.get('div').get('.paragraphButton').eq(0).click()
    cy.get('div').contains('Hello')
    cy.get('div').contains('World')

  })
})