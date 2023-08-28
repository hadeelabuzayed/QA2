///reference types ="cypress"/>

beforeEach(() => {
  cy.visit("https://www.automationteststore.com/");
});

describe('Print the name of the first item and the last item ', () => {
  it('first category - FEATURED', () => {


    cy.get('#featured > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text) => {
      cy.log("first item inside the Featured Category is : ", the_text)
    })

    cy.get('#featured > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text) => {
      cy.log("last item inside the Featured Category is : ", the_text)

    })
  });

  it('second category - latest products', () => {


    cy.get('#latest > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text) => {
      cy.log("first item inside the latest Category is : ", the_text)
    })

    cy.get('#latest > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text) => {
      cy.log("last item inside the latest Category is : ", the_text)

    })
  });
});

describe("this is to see the price multiply by 10 ", () => {
  it("hey we need to see the price multiply by 10 for the first item inside best seller category", () => {

    cy.get("#bestseller > .container-fluid")
      .find(".oneprice")
      .first()
      .invoke("text")
      .then((the_text) => {

        let ModifiedPrice = (the_text.replace("$", "")) * 10
        cy.log(ModifiedPrice)
        let myage = 30

        myage += myage

        cy.log(myage)
      });
  });
});





describe('summation of special category', () => {
  it('the sum of all old and all new prices in the SPECIALS category', () => {
    let SumOldPrices = 0;
    let SumNewPrices = 0;
    cy.get('#special > .container-fluid')
      .find('.pricenew')
      .each((new_price_text, index) => {
        cy.get('#special > .container-fluid')
          .find('.priceold')
          .eq(index)
          .invoke('text')
          .then(old_price_text => {
            const OldPrice = parseInt(old_price_text.replace('$', ''));
            const NewPrice = parseInt(new_price_text.text().replace('$', ''));

            SumOldPrices += OldPrice;
            SumNewPrices += NewPrice;
          });
      }).then(() => {
        alert(` the sum of the old prices is ${SumOldPrices} and the sum of the new prices is ${SumNewPrices}`)
      });
  });
});
