import React, { Component } from 'react';
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

import renderIf from 'render-if';

import global from '../../Services/global';
import { View } from 'react-native';

export default class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories : [],
            products : []
        }
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
        return (
            <Footer>
                <FooterTab>
                    <Button
                        vertical
                        active={this.props.navigationState.index === 0}
                        onPress={() => this.props.navigation.navigate("Home", {categories : this.state.categories, topProducts : this.state.products})}>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button
                        vertical
                        active={this.props.navigationState.index === 1}
                        onPress={() => {
                            this.props.navigation.navigate("Cart", { name: 'tte' })
                        }
                        }
                    >
                        {
                            renderIf(global.quantiTyCart != 0)
                                (
                                <Badge style={{ position: 'absolute', left: 50, top: -2, zIndex: 25188 }} danger>
                                    <Text>{global.quantiTyCart}</Text>
                                </Badge>
                                )
                        }
                        <Icon name="cart" />
                        <Text>Cart</Text>
                    </Button>
                    <Button
                        vertical
                        active={this.props.navigationState.index === 2}
                        onPress={() => this.props.navigation.navigate("Search")}>
                        <Icon name="search" />
                        <Text>Search</Text>
                    </Button>
                    <Button
                        vertical
                        active={this.props.navigationState.index === 3}
                        onPress={() => this.props.navigation.navigate("Contact")}>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}