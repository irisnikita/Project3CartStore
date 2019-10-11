import * as types from './../constants/ActionType';
//LocalStorage
var data = JSON.parse(localStorage.getItem('CART'));

//List of product
// var initialState = data ? data:[]; //Array of product
var initialState = data?data:[];

var findProductinCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
//function
const cart = (state = initialState, action) => {
    var { product, quantity,cart } = action;
    var index = -1;
    //switch of action type
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductinCart(state, product);
            if (index !== -1) {
                state[index].quantity += 1;
            }
            else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state]
        case types.DELETE_CART:
            index =findProductinCart(state,cart);
             state.splice(index,1);
             localStorage.setItem('CART',JSON.stringify(state));
            
            return[...state]
        case types.UPDDATE_ADD_CART:
            index =findProductinCart(state,cart);
            state[index].quantity+=1;
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state]
        case types.UPDDATE_REMOVE_CART:
                index =findProductinCart(state,cart);
                state[index].quantity-=1;
                if(state[index].quantity===0){
                    state.splice(index,1)
                }
                localStorage.setItem('CART',JSON.stringify(state));
            return [...state]
        default: return [...state];
    }
}

export default cart;
