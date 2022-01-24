const root  = () => {
  return `${Cypress.config('baseUrl')}`;
};
const productPage = (product) => `/p/${product}`;

export default {
    root,
    productPage 
};