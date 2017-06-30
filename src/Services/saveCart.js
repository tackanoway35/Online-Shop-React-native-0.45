import { AsyncStorage } from 'react-native';
export default saveCart = async (cartArray) => {
    try {
        await AsyncStorage.setItem('@carts', JSON.stringify(cartArray), alert('Product is added to your cart!'))    
    } catch (error) {
        console.log(error);
    }
}