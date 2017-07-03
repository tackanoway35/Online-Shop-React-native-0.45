import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';

import {
    Container,
    Content,
    Header,
    Left,
    Button,
    Icon,
    Body,
    Title,
    Right,
    Card,
    CardItem,
    Thumbnail,
} from 'native-base';

import global from '../../../Services/global';


const cart = require('../../../media/appIcon/cartfull.png');

const server = 'http://webbase.com.vn/ceramic';

export default class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: [],
            productInformation: {},
        }
    }

    componentDidMount() {
        //Get product from Navigator state params
        //Navigation State Param Variable
        const { product } = this.props.navigation.state.params;
        let productID = product.id;
        //Get product detail and photo from server
        let api = server + '/product-api/' + productID + '?expand=photos';
        fetch(api)
            .then(res => res.json())
            .then(resJSON => {
                console.log(resJSON);
                this.setState({
                    productInformation: resJSON,
                    photo: resJSON.photos
                })
            })
            .catch(e => console.log(e))
    }

    addThisProductToCart() {
        this.props.addProductToCart(this.state.productInformation);
    }

    render() {
        //Style Variable
        const {
            wrapper, content, productImage, textCart, image,
            productName, productPrice
        } = styles;

        return (
            <Container style={StyleSheet.flatten(wrapper)}>
                <Header>
                    <Left style={{ flex: 1 }}>
                        <Button onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                        <Title>{this.props.navigation.state.params.product.title}</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                    </Right>
                </Header>
                <Content style={StyleSheet.flatten(content)}>
                    <Card>
                        <CardItem>
                            <Left style={{ justifyContent: 'space-around' }}>
                                <Body />
                                <Button
                                    iconLeft
                                    success
                                    onPress={() => this.addThisProductToCart()}
                                >
                                    <Icon name='cart' />
                                    <Text style={textCart}>Add To Cart</Text>
                                </Button>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <ScrollView style={productImage} horizontal>
                                {this.state.photo.map((item) => (
                                    <Image
                                        key={item.photo_id}
                                        source={{ uri: server + item.image }}
                                        style={image}
                                    />
                                ))}
                            </ScrollView>
                        </CardItem>
                        <CardItem style={{ backgroundColor: 'orange', justifyContent: 'center' }}>
                            <Text style={productName}>{this.state.productInformation.title} / </Text>
                            <Text style={productPrice}>{this.state.productInformation.price} VNĐ</Text>
                        </CardItem>

                        <CardItem>
                            <Text>{this.state.productInformation.description}</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    content: {
        backgroundColor: '#fff',
        flex: 1,
        margin: 10
    },
    productImage: {
        padding: 10,
        flexDirection: 'row',
        height: swiperHeight
    },
    textCart: {
        color: '#fff'
    },
    image: {
        marginHorizontal: 5,
        height: swiperHeight,
        width: swiperWidth
    },
    productName: {
        fontSize: 18,
        fontWeight: "500"
    }
});