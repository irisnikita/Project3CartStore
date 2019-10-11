import React from 'react';
import Header from './components/Header'
import ProductsContainer from './containers/ProductsContainer'
import MessageContainer from './containers/MessageContainer'
import CartContainer from './containers/CartContainer'
import Footer from './components/Footer'


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        {/* Products */}

                        <ProductsContainer />
                        {/* Message */}

                        <MessageContainer />
                        {/* Cart */}

                        <CartContainer />
                    </div>
                </main>
                {/* Footer */}

                <Footer />
            </div>
        );
    }
}

export default App;
