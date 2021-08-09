
describe('UI component Tests', () => {
    it('Home page title', () => {
      cy.visit('https://adoring-carson-eb5696.netlify.app/')
  
      cy.get('.home-title-div-title').should('not.be.empty');
      cy.get('.home-title-div-title').invoke('text').should('eq', "DEMO Streaming");

    });

    it(" 'Home page' Check login functionality", () => {
        cy.visit('https://adoring-carson-eb5696.netlify.app/')
    
        cy.get('.home-title-login-div-label').should('not.be.empty');
        cy.get('.home-title-login-div-label').invoke('text').should('eq', "Log in");
    });

    it(" 'Home page' Checking labels", () => {
        cy.visit('https://adoring-carson-eb5696.netlify.app/')
    
        cy.get('.popular-titles-header').should('not.be.empty');
        cy.get('.popular-titles-header').invoke('text').should('eq', "Popular Titles");

        cy.log("Checking series div...")
        cy.get('.series-div').should('not.be.empty').get('p').should('not.be.empty');
        cy.get('.series-div').should('not.be.empty').get('p').contains("SERIES");
        cy.get('.series-div').should('not.be.empty').get('h4').contains("Popular Series");

        cy.log("Checking movies div...")
        cy.get('.movies-div').should('not.be.empty').get('p').should('not.be.empty');
        cy.get('.movies-div').should('not.be.empty').get('p').contains("MOVIES");
        cy.get('.movies-div').should('not.be.empty').get('h4').contains("Popular Movies");
    });

    it(" 'Home page' Check start trial button", () => {
        let count = 0;
        const getCount = () => {
            count++
            return count;
        }
        cy.visit('https://adoring-carson-eb5696.netlify.app/')
    
        cy.get(".home-login-window").get('button')
            .click().then(() => {
                getCount();
                return
            })
            .click().then(() => {
                getCount()
                return
            })
            .click().then(() => {
                getCount()
                return
            }).then(() => {
                expect(count).to.equal(3);
                cy.log(`Clicked ${count} times...`);
            })

            
    });

    it(" 'Series page' Checking labels", () => {
        cy.visit('https://adoring-carson-eb5696.netlify.app/series')
    
        cy.get('.popular-header').should('not.be.empty');
        cy.get('.popular-header').invoke('text').should('eq', "Popular Series");

        cy.log("Checking series container...")
        cy.get('.series-movies-container').should('not.be.empty').then(() => {
    
            cy.get(".movie-img").should('not.be.empty');
            cy.get(".movie-info").get('h6').should('not.be.empty').invoke('text').then((value) => {
                if(typeof value === "string"){
                    cy.log("Series details are found...")
                }
            })
            cy.get(".movie-info").contains('Click for Trivia')
        });
    });

    it(" 'Series page' trivia btn functionality", () => {
        cy.visit('https://adoring-carson-eb5696.netlify.app/series')
    
        cy.get('.popular-header').should('not.be.empty');
        cy.get('.popular-header').invoke('text').should('eq', "Popular Series");

        cy.log("Checking series container...")
        cy.get('.series-movies-container').should('not.be.empty').then(() => {
    
            cy.get(".movie-info").contains('Click for Trivia');
            cy.get(".trivia-btn").first().click().then(() => {
                cy.wait(500);
                cy.get(".trivia-div").should('not.be.empty');
                cy.get(".trivia-div").get('p').contains("Fun Trivia");
            })

            cy.get(".trivia-btn").first().click().then(() => {
                cy.wait(500);
                cy.get(".trivia-div").should('not.be.visible');
            })
        });
    });

    it(" 'Movies page' Checking labels", () => {
        cy.visit('https://adoring-carson-eb5696.netlify.app/movies')
    
        cy.get('.popular-header').should('not.be.empty');
        cy.get('.popular-header').invoke('text').should('eq', "Popular Movie");

        cy.log("Checking movies container...")
        cy.get('.series-movies-container').should('not.be.empty').then(() => {
    
            cy.get(".movie-img").should('not.be.empty');
            cy.get(".movie-info").get('h6').should('not.be.empty').invoke('text').then((value) => {
                if(typeof value === "string"){
                    cy.log("Movies details are found...")
                }
            })
            cy.get(".movie-info").contains('Click for Trivia')
        });
    });

    it(" 'Movies page' trivia btn functionality", () => {
        cy.visit('https://adoring-carson-eb5696.netlify.app/movies')
    
        cy.get('.popular-header').should('not.be.empty');
        cy.get('.popular-header').invoke('text').should('eq', "Popular Movie");

        cy.log("Checking movies container...")
        cy.get('.series-movies-container').should('not.be.empty').then(() => {
    
            cy.get(".movie-info").contains('Click for Trivia');
            cy.get(".trivia-btn").first().click().then(() => {
                cy.wait(500);
                cy.get(".trivia-div").should('not.be.empty');
                cy.get(".trivia-div").get('p').contains("Fun Trivia");
            })

            cy.get(".trivia-btn").first().click().then(() => {
                cy.wait(500);
                cy.get(".trivia-div").should('not.be.visible');
            })
        });
    });
  
  });