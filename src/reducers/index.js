import { combineReducers } from 'redux'; //combine reducer
import products from './products'; //import reducer 'product'
import cart from './cart'; //import reducer 'cart'
import message from './message';
const appReducers = combineReducers({
    products, //products : products
    cart,
    message
});

export default appReducers;