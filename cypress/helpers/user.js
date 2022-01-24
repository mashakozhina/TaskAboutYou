import paths from "../fixtures/paths.js";
import dataTestIds from "../fixtures/dataTestIds.js";
import navigation from "./navigation.js";

const buildUser = () => {
  return {
    email: `test_${Date.now()}@gmail.com`,
    password: "123456",
  };
};

const userLogin = (email, password) => {
  cy.get(dataTestIds.emailField)
    .type(email)
    .get(dataTestIds.passwordField)
    .type(password)
    .get(dataTestIds.loginButton)
    .click();
};

const addToBasket = (productSize) => {
  cy.get(dataTestIds.addToBasketButton)
    .click()
    .get(dataTestIds.sizeSelector(productSize))
    .click();
};

export default {
  buildUser,
  userLogin,
  addToBasket
};
