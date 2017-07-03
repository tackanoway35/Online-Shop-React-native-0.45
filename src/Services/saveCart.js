import { AsyncStorage } from 'react-native';
export default saveCart = async (cartArray, action) => {
    try {
        await AsyncStorage.setItem('@carts', JSON.stringify(cartArray), () => {
            if(action == 'create')
            {
                alert("Product is saved to cart");
            }
            else if (action == 'delete')
            {
                alert("Product is removed from cart");
            }
        })    
    } catch (error) {
        console.log(error);
    }
}