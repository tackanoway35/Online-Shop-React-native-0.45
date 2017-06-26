import React, { Component } from 'react';
import { View, StyleSheet, Dimentions, Image, TouchableOpacity } from 'react-native';
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
    Text
} from 'native-base';

import sp1 from '../../../media/temp/sp1.jpeg';
import sp2 from '../../../media/temp/sp2.jpeg';
import sp3 from '../../../media/temp/sp3.jpeg';

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
                        List Product
                    </Title>
                </Body>
                <Right />
            </Header>
        )
    });

    render() {
        const {
            container, wrapper, title,
            textTitle, content, imageProduct,
            information, lastInformation, image,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail
        } = styles;
        return (
            <Container>
                <Content style={StyleSheet.flatten(container)}>
                    <View style={wrapper}>

                        {/*Title*/}
                        <View style={title}>
                            <Text style={StyleSheet.flatten(textTitle)}>Party Dress</Text>
                        </View>
                        {/*End title*/}

                        {/*Product 1*/}
                        <View style={content}>
                            <View style={imageProduct}>
                                <Image style={image} source={sp1} />
                            </View>
                            <View style={information}>
                                <Text style={StyleSheet.flatten(txtName)}>Lace Sleeve Si</Text>
                                <Text style={StyleSheet.flatten(txtPrice)}>$999</Text>
                                <Text style={StyleSheet.flatten(txtMaterial)}>Material silk</Text>
                                <View style={lastInformation}>
                                    <Text style={StyleSheet.flatten(txtColor)}>Color </Text>
                                    <View style={{backgroundColor : 'cyan', height : 16, width : 16, borderRadius : 8}}></View>
                                    <TouchableOpacity>
                                        <Text style={StyleSheet.flatten(txtShowDetail)}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/*End product 1*/}

                        {/*Product 2*/}
                        <View style={content}>
                            <View style={imageProduct}>
                                <Image style={image} source={sp2} />
                            </View>
                            <View style={information}>
                                <Text style={StyleSheet.flatten(txtName)}>Asymetrical G</Text>
                                <Text style={StyleSheet.flatten(txtPrice)}>$999</Text>
                                <Text style={StyleSheet.flatten(txtMaterial)}>Material leather</Text>
                                <View style={lastInformation}>
                                    <Text style={StyleSheet.flatten(txtColor)}>Color </Text>
                                    <View style={{backgroundColor : 'red', height : 16, width : 16, borderRadius : 8}}></View>
                                    <TouchableOpacity>
                                        <Text style={StyleSheet.flatten(txtShowDetail)}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/*End product 2*/}

                        {/*Product 3*/}
                        <View style={content}>
                            <View style={imageProduct}>
                                <Image style={image} source={sp3} />
                            </View>
                            <View style={information}>
                                <Text style={StyleSheet.flatten(txtName)}>Asymetrical G</Text>
                                <Text style={StyleSheet.flatten(txtPrice)}>$999</Text>
                                <Text style={StyleSheet.flatten(txtMaterial)}>Material leather</Text>
                                <View style={lastInformation}>
                                    <Text style={StyleSheet.flatten(txtColor)}>Color </Text>
                                    <View style={{backgroundColor : 'pink', height : 16, width : 16, borderRadius : 8}}></View>
                                    <TouchableOpacity>
                                        <Text style={StyleSheet.flatten(txtShowDetail)}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        {/*End product 3*/}
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
        flex : 1,
        margin: 8,
        backgroundColor : '#fff'
    },
    title: {
        marginBottom: 10
    },
    textTitle: {
        textAlign: 'center',
        color: 'red',
        fontSize: 18
    },
    content: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderTopColor: '#bbb',
        borderTopWidth: 1,
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
        alignItems : 'center'
    },
    information: {
        flex : 1,
        justifyContent: 'space-between',
        paddingLeft : 10
    },
    txtName: {
        color: '#BCBCBC',
        fontSize: 18,
        fontWeight: '500',
        
    },
    txtPrice: {
        color: 'red'
    },
    txtMaterial: {
        fontWeight: '600'
    },
    txtColor : {
    },
    txtShowDetail : {
        paddingRight: 5,
        color : 'red'
    }
})