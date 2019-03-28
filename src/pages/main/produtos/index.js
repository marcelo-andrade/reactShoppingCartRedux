import React from 'react';

import { connect } from 'react-redux';

import listaProdutos from '../../../services/produtos';

function addProductToShoppingCart(produto){
    return {
        type: 'ADD_PRODUCT_TO_SHOPPING_CART',
        produto
    };
}

const Produtos = ({ dispatch }) => {
    return (
        <div className="listaProdutos">
            {listaProdutos.map(item => (
                <article className="item" key={item.id}>
                    <div className="foto"><img src={item.foto} alt={item.titulo} /></div>
                    <h1 className="titulo">{item.titulo}</h1>
                    <div className="valor">
                        {item.valor}
                    </div>
                    <button className="btnComprar" onClick={() => dispatch(addProductToShoppingCart(item))}>
                        Comprar
                    </button>
                </article>
            ))}
        </div>
    );
};

export default connect()(Produtos);