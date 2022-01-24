///<reference types='Cypress' />

import dataTestIds from "../../fixtures/dataTestIds.js";
import navigation from "../../helpers/navigation.js";
import user from "../../helpers/user.js";

//I wanted to write such scenario: Existed user with items add billing address and select payment methodMasterCard
describe("Checkout tests", () => {
  beforeEach(() => {
    cy.clearCookies();
    navigation.openApp();
  });

  it("Visitor cannot add item to the basket", () => {
    navigation.goToLogin();
    user.userLogin(Cypress.config("email"), Cypress.config("password"));
    cy.get(dataTestIds.closeIcon).click(); //I close the login because cannot login, get the error
    navigation.goToProduct('stance/socks-hot-wheels-7654885');
    user.addToBasket('sizeOption_48932348_active');
    cy.get(dataTestIds.notifErrorAddToBasket).should("be.visible");
  });
});
