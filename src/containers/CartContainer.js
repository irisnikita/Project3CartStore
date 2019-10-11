import React from 'react';
import { connect } from 'react-redux'; //connect react-redux'
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import Cartitem from './../components/Cartitem';
import CartResult from './../components/CartResult';
import {deleteCart,changeMessage,UpdateaddCart,UpdateRemoveCart} from './../actions/index';
import * as messages from './../constants/Message';

class CartContainer extends React.Component {
    render() {
        var {cart}=this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    //show total of cartitem
    showTotalAmount=(cart)=>{
        var result =null;
        if(cart.length>0){
            result=<CartResult cart={cart}/>
        }
        return result;
    }
    //show cartitem 
    showCartItem=(cart)=>{
        var string=messages.MSG_CART_EMPTY
        var {onDeleteCart,onChangeMessage,onUpdateAddCart,onUpdateRemoveCart}=this.props
        var result =<tr><td>{string}</td></tr>;
        if(cart.length>0){
            result = cart.map((item,index)=>{
                return(
                    <Cartitem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteCart={onDeleteCart}
                        onChangeMessage={onChangeMessage}
                        onUpdateAddCart={onUpdateAddCart}
                        onUpdateRemoveCart={onUpdateRemoveCart}
                    />
                )
            })
        }
        return result;
    }
    
   
}

//check style of prop
CartContainer.propTypes={
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
                id: PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,

            quantity: PropTypes.number.isRequired
    })).isRequired
}

//create MapStateToProp mean from state of store to prop for this component
const mapStateToProps = state=>{
    return{
       cart :state.cart
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        onDeleteCart :(cart)=>{
            dispatch(deleteCart(cart));
        },
        onChangeMessage:(message)=>{
            dispatch(changeMessage(message))
        },
        onUpdateAddCart:(cart)=>{
            dispatch(UpdateaddCart(cart));
        },
        onUpdateRemoveCart:(cart)=>{
            dispatch(UpdateRemoveCart(cart));
        }

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
