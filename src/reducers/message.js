import * as types from './../constants/ActionType';
import * as messages from './../constants/Message';
//List of product
// var initialState = data ? data:[]; //Array of product
var initialState = messages.MSG_WELLCOME ;
//function
const message = (state = initialState, action) => {
    var {message}=action;
    //switch of action type
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return message;
        default: return [...state];
    }

}

export default message;
