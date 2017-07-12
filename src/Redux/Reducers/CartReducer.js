const DEFAULT_STATE = {
    cartArrCart : []
}

export default cartReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "FETCH_CART":
            return {
                cartArrCart : action.localCart
            }            

            case "ADD_TO_CART" :
            return {
                cartArrCart : action.product.concat(state.cartArrCart)
            }

        default:
            return state;
    }
}