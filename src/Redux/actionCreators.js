import { getCategoriesTopProduct } from '../Services/Api/getCategoriesTopProduct';
import getCart from '../Services/Storage/getCart';
import saveCart from '../Services/Storage/saveCart';

//Action Creator Fetch Categories and Top 6 Newest Product from server
export function acFetchCategoriesTopProductStart() {
    return {
        type: "FETCH_CATEGORIES_TOPPRODUCT_START"
    }
}

export function acFetchCategoriesTopProductSuccess(categories, topProducts) {
    return {
        type: 'FETCH_CATEGORIES_TOPPRODUCT_SUCCESS',
        categories: categories,
        topProducts: topProducts
    }
}

export function acFetchCategoriesTopProductError() {
    return {
        type: "FETCH_CATEGORIES_TOPPRODUCT_ERROR"
    }
}
//End action creators categories and top 6 newest product

//Action creators cart
export function acGetCartSuccess(cart) {
    return {
        type: "GET_CART_SUCCESS",
        cart: cart
    }
}

export function acGetCartError() {
    return {
        type: "GET_CART_ERROR"
    }
}

export function acDeleteFromCart(cartId) {
    return {
        type: "DELETE_FROM_CART",
        cartId: cartId
    }
}

export function acAddToCart(product) {
    return {
        type: "ADD_TO_CART",
        product: product
    }
}

export function acIncreaseQuantityCart(cartId)
{
    return {
        type : 'INCREASE_QUANTITY_CART',
        cartId : cartId
    }
}

export function acDecreaseQuantityCart(cartId)
{
    return {
        type : 'DECREASE_QUANTITY_CART',
        cartId : cartId
    }
}
//End action creators cart

export function thunkFetchCategoriesTopProduct() {
    return dispatch => {
        //Loading
        getCategoriesTopProduct()
            .then(data => {
                dispatch(acFetchCategoriesTopProductSuccess(data.categories, data.products))
            })
            .catch(e => console.log(e))
    }
}

export function thunkGetLocalCart() {
    return dispatch => {
        getCart()
            .then(cart => {
                dispatch(acGetCartSuccess(cart))
            })
            .catch(e => {
                alert("Get local cart failed");
                dispatch(acGetCartError)
            })
    }
}

export function thunkDeleteFromCart(cartId) {
    return (dispatch, getState) => {
        const { cart } = getState();
        const newCart = cart.filter((cart, index) => index != cartId);
        saveCart(newCart)
            .then(response => {
                alert('Product is deleted from your cart');
                dispatch(acDeleteFromCart(cartId))
            })
            .catch(e => alert("Delete From Cart Failed! Please Try Again"))
    }
}

export function thunkAddToCart(product)
{
    return (dispatch, getState) => {
        const { cart } = getState();
        const newCart = product.concat(cart);
        saveCart(newCart)
        .then( response => {
            alert("Add to cart successfull");
            dispatch(acAddToCart(product))
        })
        .catch( e => {
            console.log(e);
            alert("Add to cart error");
        })
    }
}

export function thunkIncreaseQuantityCart(cartId)
{
    return (dispatch, getState) => {
        if(dispatch(acIncreaseQuantityCart(cartId)))
        {
            let { cart } = getState();
            saveCart(cart)
            .then(response => {
                
            })  
            .catch(e => {
                alert("Have error. Please re run app before increase quantity product")
            })      
        }
    }
}

export function thunkDecreaseQuantityCart(cartId)
{
    return (dispatch, getState) => {
        if(dispatch(acDecreaseQuantityCart(cartId)))
        {
            let { cart } = getState();
            saveCart(cart)
            .then(response => {
                
            })  
            .catch(e => {
                alert("Have error. Please re run app before decrease quantity product")
            })      
        }
    }
}