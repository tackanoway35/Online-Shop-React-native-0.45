import React from "react";
// import { StatusBar } from "react-native";
import { View, StyleSheet, Dimensions } from 'react-native';

import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Badge
} from "native-base";
import global from '../../../Services/global';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartArray: []
    }
    global.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart(product) {
    this.setState({
      cartArray: this.state.cartArray.concat(product)
    });
    console.log('Quantity of Cart : ' + this.state.cartArray.length);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Shopping Cart</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <View>
            <Text>
              {this.state.cartArray.length}
              {global.quantiTyCart}
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
