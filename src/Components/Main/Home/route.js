import React, {Component} from 'react';
import Home from './Home';
import { StackNavigator } from 'react-navigation';

import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

export default (HomeNav = StackNavigator({
    HomeView : { screen : Home },
    ProductDetail : { screen : ProductDetail },
    ListProduct : { screen : ListProduct }
}));
