import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary} from './checkout/paymentSummary.js';
import '../data/cart-oop.js'; // This syntax runs all the code inside this file without importing anything

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();