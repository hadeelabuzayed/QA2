/// <reference types="Cypress" />
import moment from 'moment';
beforeEach(() => {
    cy.visit('https://www.almosafer.com/ar')
    cy.get('.cta__saudi').click()
    cy.get('[data-testid="Header__LanguageSwitch"]').click()
});
describe('presentation 2', () => {
    it('make sure the departure date is set to be today date + 1', () => {
        const tomorrow = moment().add(1,'day');
        const formatTomorrow = tomorrow.format('MMMMD dddd')
        cy.get('[data-testid="FlightSearchBox__FromDateButton"]')
            .invoke('text')
            .should('equal', formatTomorrow);


    });
    it('make sure the departure date is set to be today date + 2', () => {

        const afterTomorrow = moment().add(2,'day');
        const formatTomorrow = afterTomorrow.format('MMMMDdddd');
        cy.get('[data-testid="FlightSearchBox__ToDateButton"]').invoke('text').should('equal', formatTomorrow)
        
    });
    it('flight class is set to be Economy by default', () => {
        cy.get('.sc-jWxkHr').invoke('text').should('include', 'Economy')

    });






});