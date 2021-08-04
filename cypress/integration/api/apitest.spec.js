
describe('Api Endpoint Tests', () => {
  it('Visit home page', () => {
    cy.visit('https://eager-tereshkova-c3ca44.netlify.app/')

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
    cy.visit('https://eager-tereshkova-c3ca44.netlify.app/')

    cy.get('.home-title-div-title').should('not.be.empty').click()

    .then(() => {
      cy.wait(1000)
      cy.url().should('eq', 'https://eager-tereshkova-c3ca44.netlify.app/')
    })
  })

  it('Access series endpoint', () => {
    cy.visit('https://eager-tereshkova-c3ca44.netlify.app/')

    cy.get('.series-div').should('not.be.empty').click()

    .then(() => {
      cy.wait(1000)
      cy.url().should('eq', 'https://eager-tereshkova-c3ca44.netlify.app/series')
    })
  })

  it('Access movies endpoint', () => {
    cy.visit('https://eager-tereshkova-c3ca44.netlify.app/')

    cy.get('.movies-div').should('not.be.empty').click()

    .then(() => {
      cy.wait(1000)
      cy.url().should('eq', 'https://eager-tereshkova-c3ca44.netlify.app/movies')
    })
  })

  it('Access random endpoint', () => {
    cy.visit('https://eager-tereshkova-c3ca44.netlify.app/abc')

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