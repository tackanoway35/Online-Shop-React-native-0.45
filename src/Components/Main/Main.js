
import React, { Component } from "react";
import Home from "./Home/route";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import Contact from './Contact/Contact';
import { TabNavigator } from "react-navigation";

import global from '../../Services/global';
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

const { quantiTyCart } = global;
const badge = null;
if (quantiTyCart != 0) {
  badge = (
    <Badge style={{ position: 'absolute', left: 50, top: -2 }} danger>
      <Text>{global.quantiTyCart}</Text>
    </Badge>
  )
}

export default (MainTab = TabNavigator(
  {
    Home: { screen: Home },
    Cart: { screen: Cart },
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
              onPress={() => props.navigation.navigate("Cart")}>
              
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
));