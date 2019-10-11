import React from 'react';
import { connect } from 'react-redux'; //connect react-redux'
import Products from './../components/Products'; //import Products from components/Products
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart,changeMessage } from './../actions/index';

class ProductsContainer extends React.Component {
    render() {
        var {products}=this.props; //get this.props.products form mapToStateToProps
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products){
        var result = null;
        var {onAddToCart,onChangeMessage}=this.props;
        if(products.length>0){
            result = products.map((product,index)=>{
                return <Product 
                    key={index} 
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                    />
            })
        }
        return result;
    }
   
}

//check style of prop
ProductsContainer.propTypes={
    products: PropTypes.arrayOf(PropTypes.shape({
        
        id: PropTypes.number.isRequired,
        name : PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
    })).isRequired,
    onChangeMessage : PropTypes.func.isRequired
}

//create MapStateToProp mean from state of store to prop for this component
const mapStateToProps = state=>{
    return{
        products : state.products
    }
}

const mapDispatchToProps =(dispatch,props)=>{

    return{
        onAddToCart : (product)=>{
            dispatch(actAddToCart(product,1));
        },
        onChangeMessage: (message)=>{
            dispatch(changeMessage(message));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
