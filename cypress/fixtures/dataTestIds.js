//Home page
const acceptCookiesBtn = "#onetrust-accept-btn-handler"; 
const appContainer = ".react-root"; 
const currentCountryButton = '[data-testid=countrySwitchCurrentCountry]';
const countrySwitchPopup = '[data-testid=countrySwitchPopup]';
const loginIcon = '[data-test-id=UserAccount]';

//Login form
const loginWrapper = '[data-testid=LoginFlowWrapper]';
const emailField = '[data-testid=EmailField]';
const passwordField = '[data-testid=PasswordField]';
const loginButton= '[data-testid=SubmitLogin]';
const closeIcon = '[data-testid=CloseIcon]';

//Product page
const productPageWrapper = '[data-testid=splitView]';
const addToBasketButton = '[data-testid=addToBasketButton]';
const sizeSelector = (size) => 
  `[data-testid="${size}"]`;

//Notifications
const notifErrorAddToBasket = '[data-testid=addToBasketErrorToast]';

countrySwitchPopup
export default {
  acceptCookiesBtn,
  appContainer,
  currentCountryButton,
  countrySwitchPopup,
  loginIcon,
  emailField, 
  passwordField,
  loginButton,
  addToBasketButton,
  sizeSelector,
  closeIcon,
  loginWrapper,
  productPageWrapper,
  notifErrorAddToBasket
};
