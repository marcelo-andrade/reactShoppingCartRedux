export function addProductToShoppingCart(produto){
    return {
        type: 'ADD_PRODUCT_TO_SHOPPING_CART',
        produto
    };
}