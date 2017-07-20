
import React from "react";
import { AppRegistry, Alert, StyleSheet, View } from "react-native";
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
  H1
} from "native-base";
export default class ChangeInfo extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Main')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Change Information</Title>
          </Body>
          <Right />
        </Header>
        <Content style={StyleSheet.flatten(wrapper)}>
          <View style={ container }>
            <View style = { content }>
              
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#D6D6D6'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10
  }

})