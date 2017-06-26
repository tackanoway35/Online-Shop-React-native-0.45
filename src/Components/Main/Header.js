import React, { Component } from 'react';
import { Image, View } from 'react-native';
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
    Item,
    Input
} from "native-base";

export default class HeaderPage extends React.Component {


    search() {
        console.log('Searched');
    }
    render() {
        return (
            <View>
                <Header>
                    <Left style={{ flex: 1 }}>
                        <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                        <Title>Welcome to Te Shop</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                    </Right>
                </Header>

                <Header searchBar rounded>
                    <Item style={{ flex: 8 }}>
                        <Icon name="ios-search" />
                        <Input placeholder="What do you want to buy?" />
                    </Item>
                    <Button small light onPress={() => this.search()} style={{ flex: 2, marginLeft: 5 }}>
                        <Text>Search</Text>
                    </Button>
                </Header>
            </View>
        )
    }
}