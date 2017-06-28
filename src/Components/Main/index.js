import React, { Component } from "react";
// import Main from "./Main.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import Authentication from "../Authentication/Authentication";
import Menu from "../Menu/Menu.js";
import { DrawerNavigator, TabNavigator, StackNavigator } from "react-navigation";
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';

//Main Tab bar
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import Contact from './Contact/Contact';

import renderIf from 'render-if';

import global from '../../Services/global';
//Stack Navigator
import Home from './Home/Home';
import ListProduct from './ListProduct/ListProduct';
import ProductDetail from './ProductDetail/ProductDetail';

import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label,
  Badge
} from "native-base";

export default class MenuNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      cartArray: []
    };
    global.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart(product) {
    console.log('addProduct successfull');
    this.setState({
      cartArray: this.state.cartArray.concat({product : product, quantity : 1})
    }, () => {
      alert("Product is added to cart");
    })
  }

  componentDidMount() {
    fetch('http://webbase.com.vn/ceramic/product-api/get-categories-top-product')
      .then(res => res.json())
      .then(resJSON => {
        //Get data from API server
        const { categories, products } = resJSON;
        //Update state categories
        this.setState({
          categories: categories,
          products: products
        });
      })
      .catch(e => console.log(e))
  }

  render() {
    //Home Stack Navigator
    const HomeStack = StackNavigator(
      {
        HomeView: {
          screen: props => <Home {...props}
            categories={this.state.categories}
            topProducts={this.state.products}
          />,
          headerMode: 'screen',
          navigationOptions: {
            header : null
          }
        },
        ProductDetail: { screen: ProductDetail },
        ListProduct: { screen: ListProduct }
      }
    );

    //Home Tab Navigator
    const MainTab = TabNavigator(
      {
        Home: { screen: HomeStack },
        Cart: { 
          screen: props => <Cart {...props} 
            cartArray = {this.state.cartArray}
          />
        },
        Search: { screen: Search },
        Contact: { screen: Contact }
      },
      {
        tabBarPosition: "bottom",
        swipeEnabled: false,
        tabBarComponent: props => {
          return (
            <Footer>
              <FooterTab>
                <Button
                  vertical
                  active={props.navigationState.index === 0}
                  onPress={() => props.navigation.navigate("Home")}>
                  <Icon name="home" />
                  <Text>Home</Text>
                </Button>
                <Button
                  vertical
                  active={props.navigationState.index === 1}
                  onPress={() => {
                    props.navigation.navigate("Cart")
                  }
                  }
                >
                  {
                    renderIf(this.state.cartArray.length > 0)
                      (
                      <Badge style={{ position: 'absolute', left: 50, top: -2, zIndex: 25188 }} danger>
                        <Text>{this.state.cartArray.length}</Text>
                      </Badge>
                      )
                  }
                  <Icon name="cart" />
                  <Text>Cart</Text>
                </Button>
                <Button
                  vertical
                  active={props.navigationState.index === 2}
                  onPress={() => props.navigation.navigate("Search")}>
                  <Icon name="search" />
                  <Text>Search</Text>
                </Button>
                <Button
                  vertical
                  active={props.navigationState.index === 3}
                  onPress={() => props.navigation.navigate("Contact")}>
                  <Icon name="person" />
                  <Text>Contact</Text>
                </Button>
              </FooterTab>
            </Footer>
          );
        }
      }
    );

    //Menu Drawer Navigator
    const MainRouter = DrawerNavigator(
      {
        Main: { screen: MainTab },
        Chat: { screen: MainScreenNavigator },
        Authentication: { screen: Authentication },
        'Change Information': { screen: ChangeInfo },
        'Order History': { screen: OrderHistory }
      },
      {
        contentComponent: props => <Menu {...props} />
      }
    );

    return (
      <MainRouter />
    )
  }
}