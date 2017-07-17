import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Content, Input, Button, Text, Item, Spinner } from 'native-base';

import { connect } from 'react-redux';
import * as actionCreators from '../../Redux/actionCreators';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    signIn(data) {
        let url = "http://webbase.com.vn/ceramic/customer-api/sign-in";
        this.props.thunkSignIn(url, data);
    }
    render() {
        //Style
        const {
                content, input,
            viewUsernameInput, viewPasswordInput
        } = styles;

        //Redux
        const { isLoading, error } = this.props.signIn;
        return (
            <Content style={StyleSheet.flatten(content)}>
                <Item rounded style={StyleSheet.flatten(viewUsernameInput)}>
                    <Input
                        style={StyleSheet.flatten(input)}
                        placeholder="Enter your username"
                        onChangeText={(username) => this.setState({ username })}
                    />
                </Item>

                <Item rounded style={StyleSheet.flatten(viewPasswordInput)}>
                    <Input
                        style={StyleSheet.flatten(input)}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </Item>

                {
                    isLoading ?
                        <Button
                            block
                            rounded
                            outline
                            primary
                            bordered
                            disabled
                        >
                            <Text>Loading&nbsp;&nbsp;</Text>
                            <Spinner color = 'blue'/>
                        </Button>
                        :
                        <Button
                            block
                            rounded
                            outline
                            primary
                            bordered
                            onPress={() => this.signIn({
                                username: this.state.username,
                                password: this.state.password
                            })}
                        >
                            <Text>Sign In Now</Text>
                        </Button>
                }
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        margin: 20,
        marginTop: 150,
    },
    viewUsernameInput: {
        marginBottom: 10,
    },
    viewPasswordInput: {
        marginBottom: 30,
    },
    input: {
        paddingLeft: 20
    }
})

function mapStateToProps(state) {
    return {
        signIn: state.signIn
    }
}
export default connect(mapStateToProps, actionCreators)(SignIn);