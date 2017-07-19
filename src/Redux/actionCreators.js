import { getCategoriesTopProduct } from '../Services/Api/getCategoriesTopProduct';
import { getTopProductDetail } from '../Services/Api/getTopProductDetail';
import getCart from '../Services/Storage/getCart';
import saveCart from '../Services/Storage/saveCart';
import save from '../Services/Storage/save';
import get from '../Services/Storage/get';
import removeByKey from '../Services/Storage/removeItem';

import { postApi } from '../Services/Api/postApi';
import { Alert } from 'react-native';

//Authentication
export function acSignUpStart() {
    return {
        type: 'SIGNUP_START'
    }
}

export function acSignUpSuccess() {
    return {
        type: 'SIGNUP_SUCCESS'
    }
}

export function acSignUpError() {
    return {
        type: "SIGNUP_ERROR"
    }
}

export function acSignInStart() {
    return {
        type: 'SIGNIN_START'
    }
}

export function acSignInSuccess() {
    return {
        type: 'SIGNIN_SUCCESS'
    }
}

export function acSignInError() {
    return {
        type: "SIGNIN_ERROR"
    }
}

export function acSignOutStart() {
    return {
        type: "SIGNOUT_START"
    }
}

export function acSignOutSuccess() {
    return {
        type: "SIGNOUT_SUCCESS"
    }
}

export function acSignOutError() {
    return {
        type: "SIGNOUT_ERROR"
    }
}

export function acGoSignIn() {
    return {
        type: "GO_SIGNIN"
    }
}

export function acGoSignUp() {
    return {
        type: "GO_SIGNUP"
    }
}

export function acSaveProfileStart() {
    return {
        type: "SAVE_PROFILE_START"
    }
}

export function acSaveProfileSuccess() {
    return {
        type: "SAVE_PROFILE_SUCCESS"
    }
}

export function acSaveProfileError() {
    return {
        type: "SAVE_PROFILE_ERROR"
    }
}

export function acGetProfileSuccess(profile) {
    return {
        type: "GET_PROFILE_SUCCESS",
        profile: profile
    }
}

export function acGetProfileError() {
    return {
        type: "GET_PROFILE_ERROR"
    }
}

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

export function acGetTopProductDetail(topProductDetail) {
    return {
        type: "GET_TOP_PRODUCT_DETAIL",
        topProductDetail
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

export function acIncreaseQuantityCart(cartId) {
    return {
        type: 'INCREASE_QUANTITY_CART',
        cartId: cartId
    }
}

export function acDecreaseQuantityCart(cartId) {
    return {
        type: 'DECREASE_QUANTITY_CART',
        cartId: cartId
    }
}
//End action creators cart

export function thunkSignUp(url, data) {
    return dispatch => {
        //Loading
        dispatch(acSignUpStart());
        postApi(url, data)
            .then(resJSON => {
                if (resJSON.message == 'Success') {
                    Alert.alert(
                        'Sign up successful',
                        'Congratulations! You can use app now',
                        [
                            { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                            {
                                text: 'OK', onPress: () => {
                                    dispatch(acGoSignIn());
                                }
                            },
                        ],
                        { cancelable: false }
                    )
                    dispatch(acSignUpSuccess());
                } else {
                    Alert.alert(
                        'Sign up failed',
                        'Sorry. Please try again',
                        [
                            {
                                text: 'Resign up',
                                onPress: () => { dispatch(acSignUpError()) }
                            }
                        ]
                    )
                }

            })
            .catch(e => {
                Alert.alert(
                    'Sign up failed',
                    'Sorry. Please try again',
                    [
                        {
                            text: 'Resign up',
                            onPress: () => { dispatch(acSignUpError()) }
                        }
                    ]
                )
            })
    }
}

export function thunkSignIn(url, data, navigation) {
    return dispatch => {
        //Loading
        dispatch(acSignInStart());
        postApi(url, data)
            .then(resJSON => {
                if (resJSON.message == 'Success') {
                    //Use AsyncStorage to save user information to local

                    dispatch(acSignInSuccess());
                    //Save to local
                    dispatch(acSaveProfileStart());
                    save('@profile', resJSON.profile)
                        .then(res => {
                            dispatch(acSaveProfileSuccess());
                            Alert.alert(
                                'Sign in successful',
                                'Congratulations! You can use app now',
                                [
                                    {
                                        text: 'OK', onPress: () => {
                                            dispatch(acGoSignIn());
                                            navigation.goBack();
                                        }
                                    },
                                ],
                                { cancelable: false }
                            )
                        })
                        .catch(e => {
                            dispatch(acSaveProfileError())
                        })
                } else {
                    Alert.alert(
                        'Sign in failed',
                        'Sorry. Please try again',
                        [
                            {
                                text: 'Resign in',
                                onPress: () => { dispatch(acSignInError()) }
                            }
                        ]
                    )
                }

            })
            .catch(e => {
                Alert.alert(
                    'Sign in failed',
                    'Sorry. Please try again',
                    [
                        {
                            text: 'Resign in',
                            onPress: () => { dispatch(acSignInError()) }
                        }
                    ]
                )
            })
    }
}

export function thunkSignOut() {
    return dispatch => {
        //Loading
        dispatch(acSignOutStart());
        removeByKey('@profile')
            .then(res => {
                dispatch(acSignOutSuccess());
            })
            .catch(e => dispatch(acSignOutError()))
    }
}
export function thunkGetProfile() {
    return dispatch => {
        get('@profile')
            .then(res => {
                dispatch(acGetProfileSuccess(res));
                dispatch(acGoSignIn());
            })
            .catch(e => dispatch(acGetCartError()))
    }
}

export function thunkFetchCategoriesTopProduct() {
    return dispatch => {
        //Loading
        getCategoriesTopProduct()
            .then(response => {
                dispatch(acFetchCategoriesTopProductSuccess(response.categories, response.products))
            })
            .catch(e => console.log(e))
    }
}

export function thunkGetTopProductDetail(productId) {
    return dispatch => {
        getTopProductDetail(productId)
            .then(response => {
                dispatch(acGetTopProductDetail(response))
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

export function thunkAddToCart(product) {
    return (dispatch, getState) => {
        const { cart } = getState();
        const newCart = product.concat(cart);
        saveCart(newCart)
            .then(response => {
                alert("Add to cart successfull");
                dispatch(acAddToCart(product))
            })
            .catch(e => {
                console.log(e);
                alert("Add to cart error");
            })
    }
}

export function thunkIncreaseQuantityCart(cartId) {
    return (dispatch, getState) => {
        if (dispatch(acIncreaseQuantityCart(cartId))) {
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

export function thunkDecreaseQuantityCart(cartId) {
    return (dispatch, getState) => {
        if (dispatch(acDecreaseQuantityCart(cartId))) {
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