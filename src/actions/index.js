import * as types from './../constants/ActionType';

export const actAddToCart =(product,quantity)=>{
    return{
        type :types.ADD_TO_CART,
        product,
        quantity
    }
}
export const changeMessage =(message)=>{
    return{
        type:types.CHANGE_MESSAGE,
        message
    }
}
export const deleteCart=(cart)=>{
    return{
        type :types.DELETE_CART,
        cart
    }
}
export const UpdateaddCart=(cart)=>{
    return {
        type : types.UPDDATE_ADD_CART,
        cart
    }
}
export const UpdateRemoveCart=(cart)=>{
    return {
        type : types.UPDDATE_REMOVE_CART,
        cart
    }
}