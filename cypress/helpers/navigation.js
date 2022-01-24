import paths from "../fixtures/paths.js";
import dataTestIds from "../fixtures/dataTestIds.js";

const openApp = () => {
  cy.visit(paths.root());
  cy.get(dataTestIds.acceptCookiesBtn)
    .click({ force: true })
    .get(dataTestIds.countrySwitchPopup)
    .should("be.visible")
    .get(dataTestIds.currentCountryButton)
    .click({ force: true });
};

const goToLogin = () => {
  cy.get(dataTestIds.loginIcon)
    .click()
    .get(dataTestIds.loginWrapper)
    .should("be.visible");
};

const goToProduct = (product) => {
  cy.visit(paths.productPage(product))
    .get(dataTestIds.productPageWrapper)
    .should("be.visible");
};

export default {
  openApp,
  goToLogin,
  goToProduct 
};
