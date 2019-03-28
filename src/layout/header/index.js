import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';

const Header = ({shoppingCart}) => (
    <header className="main-header">
        <div className="limite">
            <div className="main-header-content">
                <div className="main-header-logo">
                    <Link to="/">Loja Virtual</Link>
                </div>
                <div className="main-header-shoppingCart">
                    <Link to="/shopping-cart" >
                        <i className="fas fa-shopping-cart"></i> 
                        <span className="totalProd">({shoppingCart})</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
);

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCart.shoppingCart.length
});

export default connect(mapStateToProps)(Header);