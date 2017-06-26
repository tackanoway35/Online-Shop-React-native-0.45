
import React from "react";
import { AppRegistry, Alert, StyleSheet, Dimensions, View, Image } from "react-native";
import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1,
  Footer,
  Input
} from "native-base";
export default class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn : true,
      email: '',
      password: '',
      name : ''
    }
  }

  signInView()
  {
    this.setState({
      isSignIn : true
    })
  }

  signUpView()
  {
    this.setState({
      isSignIn : false
    })
  }

  render() {
    const {
      footer, btnSignInActive, btnSignInInActive, btnSignUpActive, btnSignUpInActive,
      content, emailInput, passwordInput, nameInput,
      viewEmailInput, viewPasswordInput, viewNameInput,
      textActive, textInActive,
      container
    } = styles;

    const signInJSX = (
      <Content style={StyleSheet.flatten(content)}>
        <View style={viewEmailInput}>
          <Input
            style={StyleSheet.flatten(emailInput)}
            placeholder="Enter your email"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
        </View>

        <View style={viewPasswordInput}>
          <Input
            style={StyleSheet.flatten(passwordInput)}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <Button
          block
          rounded
          outline
          primary
          bordered
        >
          <Text>Sign In Now</Text>
        </Button>
      </Content>
    );

    const signUpJSX = (
      <Content style={StyleSheet.flatten(content)}>
        <View style={viewNameInput}>
          <Input
            style={StyleSheet.flatten(nameInput)}
            placeholder="Enter your name"
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
          />
        </View>
        <View style={viewEmailInput}>
          <Input
            style={StyleSheet.flatten(emailInput)}
            placeholder="Enter your email"
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
        </View>

        <View style={viewPasswordInput}>
          <Input
            inputBorderColor={'green'}
            style={StyleSheet.flatten(passwordInput)}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <Button
          block
          rounded
          outline
          primary
          bordered
        >
          <Text>Sign Up Now</Text>
        </Button>
      </Content>
    );

    const isSignIn = this.state.isSignIn;
    const mainJSX = isSignIn ? signInJSX : signUpJSX;

    return (
      <Container style={StyleSheet.flatten(container)}>
        <Header>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.navigate('Main')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 4 }}>
            <Title>Welcome to TeShop</Title>
          </Body>
        </Header>
        {mainJSX}
        <Footer style={StyleSheet.flatten(footer)}>
          <Button 
            style={ isSignIn ? StyleSheet.flatten(btnSignInActive) : StyleSheet.flatten(btnSignInInActive)}
            onPress={() => this.signInView()}  
          >
            <Text style={ isSignIn ? StyleSheet.flatten(textActive) : StyleSheet.flatten(textInActive)}>Sign In</Text>
          </Button>
          <Button 
            style={isSignIn ? StyleSheet.flatten(btnSignUpInActive) : StyleSheet.flatten(btnSignUpActive)}
            onPress={() => this.signUpView()}  
          >
            <Text style={ isSignIn ? StyleSheet.flatten(textInActive) : StyleSheet.flatten(textActive)}>Sign Up</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FFF',
    margin: 20
  },
  btnSignInActive : {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginRight: 1,
    flex: 1,
    justifyContent: 'center'    
  },
  btnSignInInActive : {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginRight: 1,
    flex: 1,
    justifyContent: 'center',
    backgroundColor : '#fff',
    borderWidth : 1,
    borderColor : 'blue'
  },
  btnSignUpActive : {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 1,
    flex: 1,
    justifyContent: 'center'    
  },
  btnSignUpInActive : {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginLeft: 1,
    flex: 1,
    justifyContent: 'center',
    backgroundColor : '#fff',
    borderWidth : 1,
    borderColor : 'blue'
  },
  content: {
    margin: 20,
    marginTop: 150,

  },
  emailInput: {
    height: 50,
    paddingLeft: 20
  },
  passwordInput: {
    height: 50,
    paddingLeft: 20
  },
  nameInput : {
    height : 50,
    paddingLeft : 20
  },
  viewNameInput : {
    marginBottom: 10,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'green'
  },
  viewEmailInput: {
    marginBottom: 10,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'green'
  },
  viewPasswordInput: {
    marginBottom: 30,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'green'
  },
  textActive : {
    textAlign : 'center',
  },
  textInActive : {
    textAlign : 'center',
    color: 'blue'
  }
})