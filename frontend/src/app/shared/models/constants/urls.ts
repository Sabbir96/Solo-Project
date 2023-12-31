const BASE_URL = 'http://localhost:3000';

export const FOODS_URL = `${BASE_URL}/api/foods`;
export const FOODS_TAGS_URL = `${BASE_URL}/api/foods/tags`;
export const FOODS_BY_SEARCH_URL = `${BASE_URL}/api/foods/search/`;
export const FOODS_BY_TAG_URL = `${BASE_URL}/api/foods/tag/`;
export const FOOD_BY_ID_URL = `${BASE_URL}/api/foods/`;

export const USER_LOGIN_URL = `${BASE_URL}/api/users/login`;

export const USER_REGISTER_URL = `${BASE_URL}/api/users/register`;

export const ORDERS_URL = `${BASE_URL}/api/orders`;
export const ORDER_CREATE_URL = `${BASE_URL}/api/orders/create`;
export const ORDER_NEW_FOR_CURRENT_USER_URL = `${BASE_URL}/api/orders/newOrderForCurrentUser`;
export const ORDER_ADD_PAYMENT = `${BASE_URL}/api/payments/init`;
export const PAYMENT_SUCCESS = `${BASE_URL}/api/payments/ssl-payment-success`;
export const PAYMENT_FAIL = `${BASE_URL}/api/payments/ssl-payment-fail`;
export const PAYMENT_CANCEL = `${BASE_URL}/api/payments/ssl-payment-cancel`;