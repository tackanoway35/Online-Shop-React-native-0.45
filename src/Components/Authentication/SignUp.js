import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Content, Input, Button, Text, Item, Spinner
} from 'native-base';
import { connect } from 'react-redux';
import * as actionCreators from '../../Redux/actionCreators';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            username: ''
        }
    }

    signUp(data) {
        let url = "http://webbase.com.vn/ceramic/customer-api/sign-up";
        this.props.thunkSignUp(url, data);
    }
    render() {
        //Style
        const {
                content, input,
            viewEmailInput, viewPasswordInput, viewNameInput, viewUsernameInput
        } = styles;

        //Redux
        const { isLoading, error } = this.props.signUp
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
                <Item rounded style={StyleSheet.flatten(viewNameInput)}>
                    <Input
                        style={StyleSheet.flatten(input)}
                        placeholder="Enter your name"
                        onChangeText={(name) => this.setState({ name })}
                    />
                </Item>
                <Item rounded style={StyleSheet.flatten(viewEmailInput)}>
                    <Input
                        style={StyleSheet.flatten(input)}
                        placeholder="Enter your email"
                        onChangeText={(email) => this.setState({ email })}
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
                            onPress={() => this.signUp({
                                username: this.state.username,
                                password: this.state.password,
                                name: this.state.name,
                                email: this.state.email
                            })}
                        >
                            <Text>Sign Up Now</Text>
                        </Button>
                }

            </Content>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        margin: 20,
        marginTop: 90,
    },
    viewUsernameInput: {
        marginBottom: 10,
    },
    viewPasswordInput: {
        marginBottom: 10,
    },
    viewNameInput: {
        marginBottom: 10,
    },
    viewEmailInput: {
        marginBottom: 30,
    },
    input: {
        paddingLeft: 20
    }
})

function mapStateToProps(state) {
    return {
        signUp: state.signUp
    }
}

export default connect(mapStateToProps, actionCreators)(SignUp);