import React from 'react';
import * as messages from './../constants/Message'

class Cartitem extends React.Component {
 render(){
     var { item }=this.props;
    return (
        <tr>
            <th scope="row">
                <img src={item.product.image}
                    alt={item.product.image} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{item.product.name}</strong>
                </h5>
            </td>
            <td>{item.product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty">{item.quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={()=>{this.onRemoveCart(item.product)}}>
                        <a>—</a>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                        onClick={()=>{this.onAddCart(item.product)}}>
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td>{this.showSubTotal(item.product.price,item.quantity)}$</td>
            <td>
                <button type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick={()=>this.onDeleteCart(item.product)}>
                    X
                </button>
            </td>
    </tr>
                    
    );
    }
    onAddCart=(item)=>{
            this.props.onUpdateAddCart(item);
            this.props.onChangeMessage(messages.MSG_UPDATE_CARD_SUCCESS)
    }
    onRemoveCart=(item)=>{
            this.props.onUpdateRemoveCart(item);
            this.props.onChangeMessage(messages.MSG_UPDATE_CARD_SUCCESS)
    }
    onDeleteCart=(item)=>{
        this.props.onDeleteCart(item);
        this.props.onChangeMessage(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
    showSubTotal=(price,quantity)=>{
        return price*quantity;
    }

}

export default Cartitem;
