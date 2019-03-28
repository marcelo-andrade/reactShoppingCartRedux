const INITIAL_STATE = {
    shoppingCart: []    
}

export default function shoppingCart(state = INITIAL_STATE, action){
    if (action.type === 'ADD_PRODUCT_TO_SHOPPING_CART'){
        //let shoppingCart = state.shoppingCart;
       // shoppingCart.push(action.produto);
        return {...state, shoppingCart: [...state.shoppingCart, action.produto] } 
    }

    return state;
}