
describe('Api Endpoint Tests', () => {
  it('Visit home page', () => {
    cy.visit('http://localhost:5000/')

    cy.get('.home-title-div-title')
    .should('not.be.empty')
    .invoke('text')
    .then((value) => {
      if(value === "DEMO Streaming"){
        cy.log("'DEMO Streaming' found...")
      }else {
        cy.wait(500)
        cy.reload()
      }
    })
  })

  it('Check home page access', () => {
    cy.visit('http://localhost:5000/')

    cy.get('.home-title-div-title').should('not.be.empty').click()

    .then(() => {
      cy.wait(1000)
      cy.url().should('eq', 'http://localhost:5000/')
    })
  })

  it('Access series endpoint', () => {
    cy.visit('http://localhost:5000/')

    cy.get('.series-div').should('not.be.empty').click()

    .then(() => {
      cy.wait(1000)
      cy.url().should('eq', 'http://localhost:5000/series')
    })
  })

  it('Access movies endpoint', () => {
    cy.visit('http://localhost:5000/')

    cy.get('.movies-div').should('not.be.empty').click()

    .then(() => {
      cy.wait(1000)
      cy.url().should('eq', 'http://localhost:5000/movies')
    })
  })

  it('Access random endpoint', () => {
    cy.visit('http://localhost:5000/abc')

    cy.get('.error-div').should('not.be.empty')
    .invoke('text')
    .then((value) => {
      if(value === "Endpoint not found"){
        cy.log("non-existant endpoint check pass")
      }else {
        cy.wait(500)
        cy.reload()
      }
    })
  })
});