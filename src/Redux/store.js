import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import cartReducer from './Reducers/CartReducer';
// import categoriesProductReducer from './Reducers/CategoriesProductReducer';

// const reducer = combineReducers({
//     cartReducer,
//     categoriesProductReducer
// })

const DEFAULT_STATE = {
    categories: [],
    topProducts: [],
    cart: []
}
const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "FETCH_CATEGORIES_TOPPRODUCT_SUCCESS":
            return {
                ...state,
                categories: action.categories,
                topProducts: action.topProducts
            }
        case "GET_CART_SUCCESS":
            return {
                ...state,
                cart: action.cart
            }
        case "GET_CART_ERROR":
            return {
                ...state,
                cart: []
            }

        case "ADD_TO_CART":
            return {
                ...state,
                cart: action.product.concat(state.cart)
            }
        case "DELETE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((cart, index) => index != action.cartId)
            }
        case "INCREASE_QUANTITY_CART":
            return {
                ...state,
                cart: state.cart.map((e, index) => {
                    if (action.cartId == index) {
                        return { ...e, quantity: e.quantity + 1 }
                    }
                    return e;
                })
            }

        case "DECREASE_QUANTITY_CART":
            return {
                ...state,
                cart: state.cart.map((e, index) => {
                    if (action.cartId == index) {
                        if (e.quantity > 1) {
                            return {
                                ...e,
                                quantity: e.quantity - 1
                            }
                        }
                    }
                    return e;
                })
            }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store;