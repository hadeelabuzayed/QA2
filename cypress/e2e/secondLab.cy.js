/// <reference types="cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});

beforeEach(() => {
    cy.visit("https://www.almosafer.com/en");
});

describe('almosafer lab 2', () => {
    it('first result is lower than the last result', () => {
        // Click on the "Hotels" tab
        cy.get('#uncontrolled-tab-example-tab-hotels').click({ force: true });

        // Define a list of cities to choose from
        const citiesSearch = ["dubai", "jeddah", "amman"];

        // Select a random city from the list
        const randomIndex = Math.floor(Math.random() * citiesSearch.length);
        const randomCity = citiesSearch[randomIndex];
        cy.get('[data-testid="AutoCompleteInput"]').type(randomCity, { force: true });
        cy.get('[data-testid="AutoCompleteResultItem0"]').click({ force: true });
        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click({ force: true });
        cy.wait(20000);

        // Wait for the "LOWEST PRICE" sort option, then click it
        cy.get('[data-testid="HotelSearchResult__sort__LOWEST_PRICE"]').click({ force: true });
        cy.wait(20000);

        // Extract the lowest value
        //cy.get('[data-testid="HotelSearchResult__Hotel0__PriceLabel"] > .Price__Value')
        cy.get('.Price__Value')
            .first()
            .invoke('text')
            .then((lowestValueText) => {
                const lowestValue = parseFloat(lowestValueText);
                cy.log(`Lowest Value: ${lowestValue}`);

                // Extract the highest value
                cy.get('.Price__Value')
                    .last()
                    .invoke('text')
                    .then((highestValueText) => {
                        const highestValue = parseFloat(highestValueText);
                        cy.log(`Highest Value: ${highestValue}`);

                        // Assertion
                        //cy.wrap(lowestValue).should('be.lt', highestValue);
                        expect(lowestValue).to.be.lessThan(highestValue);

                    });
            });
    });
});














