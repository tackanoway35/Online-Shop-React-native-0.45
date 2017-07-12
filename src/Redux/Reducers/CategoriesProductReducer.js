const DEFAULT_STATE = {
    homeArrCategoriesTopProduct: [],
    homeIsLoading: false,
    homeError: false
}

export default categoriesProductReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "FETCH_CATEGORIES_TOPPRODUCT_START":
            return {
                homeArrCategoriesTopProduct: [],
                homeIsLoading: true,
                homeError: false
            }
        case "FETCH_CATEGORIES_TOPPRODUCT_SUCCESS":
            return {
                homeArrCategoriesTopProduct: [{
                    categories: action.categories,
                    products: action.products
                }].concat(state),
                homeIsLoading: false,
                homeError: false
            }

        case "FETCH_CATEGORIES_TOPPRODUCT_ERROR":
            return {
                homeArrCategoriesTopProduct: [],
                homeIsLoading: false,
                homeError: true
            }

        default:
            return state;
    }
}