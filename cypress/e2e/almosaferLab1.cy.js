/// <reference types="cypress" />

describe("Almosafer Tests demo", () => {
    it("Test almosafer website", () => {


        let websites = ["https://www.almosafer.com/ar", "https://www.almosafer.com/en"];
        let randomWebsite = websites[Math.floor(Math.random() * websites.length)];
        cy.visit(randomWebsite);
        cy.get('.cta__button.cta__saudi.btn').click();


        cy.get('#uncontrolled-tab-example-tab-hotels').click();


        let hotelSearch = cy.get('[data-testid="AutoCompleteInput"]');
        if (randomWebsite === websites[0]) {
            const arabicSearch = ["جدة", "دبي"];
            const random_arabic_search = arabicSearch[Math.floor(Math.random() * arabicSearch.length)];
            hotelSearch.type(random_arabic_search)

        } else {
            const englishSearch = ["Dubai", "Jeddah", "Riyadh"];
            const randomEnglishSearch = englishSearch[Math.floor(Math.random() * englishSearch.length)];
            hotelSearch.type(randomEnglishSearch)
        }


        cy.get('[data-testid="AutoCompleteResultItem0"]').click();


        const randonReservation = Math.floor(Math.random() * 2);
        cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(randonReservation);


        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
    });

});
