import React, { Component } from 'react';
import { View, StyleSheet, Dimentions, Image, TouchableOpacity, FlatList } from 'react-native';
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
    Text,
    List,
    ListItem
} from 'native-base';

import { FormattedNumber } from 'react-native-globalize';

import { getApi } from '../../../Services/Api/getApi';

const server = "http://webbase.com.vn/ceramic";

export default class ListProduct extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.goBack()}
                    >
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>
                        {navigation.state.params.category.title}
                    </Title>
                </Body>
                <Right />
            </Header>
        )
    });

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            refreshing: false,
            productsByCategory: []
        }


    }

    _keyExtractor = (item, index) => item.id;

    componentDidMount() {
        //State param navigation
        const { category } = this.props.navigation.state.params;
        let url = 'http://webbase.com.vn/ceramic/product-api/get-product-by-category/' + category.id + '?page=1';
        getApi(url)
            .then(res => {
                this.setState({
                    productsByCategory: res
                })
            })
            .catch(e => console.log(e))
    }

    render() {
        //Style
        const {
            container, wrapper, title, productPrice,
            textTitle, content, imageProduct,
            information, lastInformation, image,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
        //Props
        const { category } = this.props.navigation.state.params;
        return (
            <Container>
                <Content style={StyleSheet.flatten(container)}>
                    <View style={wrapper}>

                        {/*Title*/}
                        <View style={title}>
                            <Text style={StyleSheet.flatten(textTitle)}>{category.title}</Text>
                        </View>
                        {/*End title*/}

                        <FlatList
                            onEndReachedThreshold={50}
                            onEndReached={() => {
                                alert("Flat list on end reach")
                            }}
                            data={this.state.productsByCategory}
                            renderItem={({ item }) => (
                                <View style={content}>
                                    <View style={imageProduct}>
                                        <Image style={image} source={{ uri: `${server}${item.image}` }} />
                                    </View>
                                    <View style={information}>
                                        <Text style={StyleSheet.flatten(txtName)}>{item.title}</Text>
                                        <View style={productPrice}>
                                            <FormattedNumber
                                                style={txtPrice}
                                                value={item.price}
                                            />
                                            <Text style={StyleSheet.flatten(txtPrice)}>&nbsp;VNĐ</Text>
                                        </View>

                                        <Text style={StyleSheet.flatten(txtMaterial)}>{item.brand}</Text>
                                        <View style={lastInformation}>
                                            <Text style={StyleSheet.flatten(txtColor)}>Color </Text>
                                            <View style={{ backgroundColor: 'red', height: 16, width: 16, borderRadius: 8 }}></View>
                                            <TouchableOpacity>
                                                <Text style={StyleSheet.flatten(txtShowDetail)}>SHOW DETAILS</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </Content>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f1e6',
    },
    wrapper: {
        flex: 1,
        margin: 8,
        backgroundColor: '#fff'
    },
    title: {
        justifyContent: 'center',
        marginBottom: 10
    },
    textTitle: {
        textAlign: 'center',
        color: 'red',
        fontSize: 20
    },
    content: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderColor: 'blue',
        borderWidth: 1,
        margin: 5
    },
    imageProduct: {
        paddingLeft: 5
    },
    image: {
        width: 90,
        height: (90 * 452) / 361
    },
    lastInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    information: {
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    txtName: {
        color: '#BCBCBC',
        fontSize: 18,
        fontWeight: '500',

    },
    productPrice: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtPrice: {
        color: 'red'
    },
    txtMaterial: {
        fontWeight: '600'
    },
    txtColor: {
    },
    txtShowDetail: {
        paddingRight: 5,
        color: 'red'
    }
})