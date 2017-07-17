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
    topProductDetail: {
        photos: [],
        stock: {}
    },
    cart: [],
    signUp: {
        isLoading: false,
        error: false,
    },
    signIn: {
        profile: {},
        isLoadingSaveProfile: false,
        isLoading: false,
        error: false
    },
    authenticationStatus: true
}
const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "SIGNUP_START":
            return {
                ...state,
                signUp: {
                    error: false,
                    isLoading: true,
                }
            }
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                signUp: {
                    error: false,
                    isLoading: false
                }
            }
        case "SIGNUP_ERROR":
            return {
                ...state,
                signUp: {
                    error: true,
                    isLoading: false
                }
            }

        case "SIGNIN_START":
            return {
                ...state,
                signIn: {
                    profile: {},
                    error: false,
                    isLoading: true,
                    isLoadingSaveProfile: false,
                }
            }
        case "SIGNIN_SUCCESS":
            return {
                ...state,
                signIn: {
                    profile: {},
                    error: false,
                    isLoading: false,
                    isLoadingSaveProfile: false,
                }
            }
        case "SIGNIN_ERROR":
            return {
                ...state,
                signIn: {
                    profile: {},
                    error: true,
                    isLoading: false,
                    isLoadingSaveProfile: false,
                }
            }
        case "SAVE_PROFILE_START":
            return {
                ...state,
                signIn: {
                    profile: {},
                    isLoading: false,
                    error: false,
                    isLoadingSaveProfile: true,
                }
            }

        case "SAVE_PROFILE_SUCCESS":
            return {
                ...state,
                signIn: {
                    profile: {},
                    isLoading: false,
                    error: false,
                    isLoadingSaveProfile: false,
                }
            }

        case "SAVE_PROFILE_ERROR":
            return {
                ...state,
                signIn: {
                    profile: {},
                    isLoading: false,
                    error: true,
                    isLoadingSaveProfile: false,
                }
            }

        case "GET_PROFILE_SUCCESS":
            return {
                ...state,
                signIn: {
                    profile: action.profile,
                    isLoading: false,
                    error: false,
                    isLoadingSaveProfile: false,
                }
            }

        case "GET_PROFILE_ERROR":
            return {
                ...state,
                signIn: {
                    profile: {},
                    isLoading: false,
                    error: true,
                    isLoadingSaveProfile: false,
                }
            }

        case "GO_SIGNIN":
            return {
                ...state,
                authenticationStatus: true
            }
        case "GO_SIGNUP":
            return {
                ...state,
                authenticationStatus: false
            }
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
        case "GET_TOP_PRODUCT_DETAIL":
            return {
                ...state,
                topProductDetail: action.topProductDetail
            }
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store;