import React from 'react';

import { connect } from 'react-redux';

import listaProdutos from '../../../services/produtos';

import * as ShoppingCartActions from '../../../store/actions/shoppingCart'; 

const Produtos = ({ addProductToShoppingCart }) => {
    return (
        <div className="listaProdutos">
            {listaProdutos.map(item => (
                <article className="item" key={item.id}>
                    <div className="foto"><img src={item.foto} alt={item.titulo} /></div>
                    <h1 className="titulo">{item.titulo}</h1>
                    <div className="valor">
                        {item.valor}
                    </div>
                    <button 
                        className="btnComprar" 
                        onClick={() => addProductToShoppingCart(item)}>
                        Comprar
                    </button>
                </article>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    addProductToShoppingCart: (produto) => dispatch(ShoppingCartActions.addProductToShoppingCart(produto))
});

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);