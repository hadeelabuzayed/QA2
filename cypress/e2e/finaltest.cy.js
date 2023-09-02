/// <reference types="Cypress" />

describe('Sign up & login test', () => {

  let userName = 'abuzayed';
  let password = 'swe123**';
  beforeEach(() => {
    cy.visit("https://automationteststore.com/index.php?rt=account/login");
  });
  it('sign up', () => {
    // cy.visit("https://automationteststore.com/index.php?rt=account/login")
    cy.get('#accountFrm > fieldset > .btn').click();
    cy.get('#AccountFrm_firstname').type("hadeel");
    cy.get('#AccountFrm_lastname').type("abuzayed");
    cy.get('#AccountFrm_email').type("hadeelabuzayed8@gmail.com");
    cy.get('#AccountFrm_telephone').type("0788670533");
    cy.get('#AccountFrm_fax').type("1515");
    cy.get('#AccountFrm_company').type("ltuc");
    cy.get('#AccountFrm_address_1').type("Jabal Tareq");
    cy.get('#AccountFrm_address_2').type("Jabal Tareq");
    cy.get('#AccountFrm_country_id').select("Jordan");
    cy.get('#AccountFrm_city').type("Zarqa");
    // cy.get('#AccountFrm_zone_id').select("Jordan");
    cy.get('#AccountFrm_postcode').type("5010");

    cy.get('#AccountFrm_loginname').type(userName);
    cy.get('#AccountFrm_password').type(password);
    cy.get('#AccountFrm_confirm').type(password);
    cy.get('#AccountFrm_newsletter1').first().check();
    cy.get('#AccountFrm_agree').check();
    cy.get('.col-md-2 > .btn').click();
  });


  it('login demo', () => {
    cy.get('#loginFrm_loginname').type(userName);
    cy.get('#loginFrm_password').type(password);
    cy.get('#loginFrm > fieldset > .btn > .fa').click();
  });

});
