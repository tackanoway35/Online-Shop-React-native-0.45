import React from "react";
// import { StatusBar } from "react-native";
import { View, StyleSheet, Dimensions } from 'react-native';
import { FormattedNumber } from 'react-native-globalize';

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
  Badge,
  List,
  ListItem,
  Thumbnail,
} from "native-base";
import global from '../../../Services/global';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartArray: []
    }
    // global.addProductToCart = this.addProductToCart.bind(this);
  }

  render() {
    const {navigate} = this.props.navigation;
    //Server
    const server = 'http://webbase.com.vn/ceramic';

    //Style variable
    const {
      listItemWrapper, wrapper, image, left, right, row1, row2, row3,
      textShowDetail, iconClose, wrapperIconClose, row3column1, row3column2,
      listItemBody, wrapperTitle,
      textPrice, 
    } = styles;

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
        <Content padder >
          
          <List
            dataArray={this.props.cartArray}
            renderRow={(item) => (
              <ListItem style={ StyleSheet.flatten(listItemWrapper)}>
                <Thumbnail square style={StyleSheet.flatten(image)} source={{uri : server + item.product.image}} />
                <Body style={StyleSheet.flatten(listItemBody)}>
                  <View style={row1}>
                    <View style={wrapperTitle}>
                      <Text>{item.product.title}</Text>
                    </View>
                    
                    <View style={wrapperIconClose}>
                      <Icon name="close" style={StyleSheet.flatten(iconClose)} />
                    </View>

                  </View>
                  <View style={row2}>
                    <FormattedNumber 
                      style={StyleSheet.flatten(textPrice)}
                      value = {item.product.price}  
                    />
                    <Text style={{color: 'red'}}>VNĐ</Text>
                  </View>

                  <View style={row3}>
                    <View style={row3column1}>
                      <Icon name="remove" />
                      <Text>{item.quantity}</Text>
                      <Icon name="add" />
                    </View>
                    <View style={row3column2}>
                      <Text style={StyleSheet.flatten(textShowDetail)}>SHOW DETAILS</Text>
                    </View>
                  </View>
                </Body>
              </ListItem>
            )}
          >
          </List>
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  listItemWrapper : {
    marginLeft: 0,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor : 'blue',
    marginBottom: 10  
  },

  listItemBody: {
    height: 110,
    justifyContent: 'space-between'
  },

  row1: {
    
    flexDirection: 'row',
    alignItems: 'center'
  },
  wrapperTitle : {
    
  },
  row2 : {
    flexDirection : 'row',
    alignItems : 'center',
    paddingLeft: 10
  },
  wrapperIconClose: {
    flex: 1,
    alignItems: 'flex-end'
  },

  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  row3column1: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  row3column2: {
    flex: 3,
    alignItems : 'flex-end',
  },
  textShowDetail: {
    color: 'red',
    fontSize: 12,
  },
  textPrice : {
    fontSize :  14,
    color: 'red' 
  },
  image: {
    width: 80,
    height: 110,
    marginLeft: 15
  }
})