/// <reference types="cypress" />

describe('Given the user visits the google page', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('When the user types any term', () => {
    cy.get('input.gLFyf.gsfi').type('.,.,.,..//##%&/((---<-asdfghasdthhjkklttr')
    cy.get('input.gNO89b').contains('Buscar con Google').click()
  })
 
  it('Then After submitting any search users should be able to see how many results were found', () => {
    cy.wait(1000)
    cy.get('div#result-stats').should('have.text', "0 results")
  })

  it('Then the user should be able to see how long the search took', () => {
    cy.get('nobr').should('not.be.empty')
  })
})
