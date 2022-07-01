describe('Links are rendering', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Import TXT')
    cy.contains('Input')
    cy.contains('Read')
  })
})