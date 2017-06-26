import React from "react";
import { AppRegistry, Image, StatusBar, View } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
import userImage from '../../media/appIcon/user.png';

const routes = ["Order History", "Change Information", "Sign Out"];

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    const loggedInJSX = (
      <List
        dataArray={routes}
        renderRow={data => {
          return (
            <ListItem
              style={{color:'red'}}
              button
              onPress={() => this.props.navigation.navigate(data)}>
              <Text>{data}</Text>
            </ListItem>
          );
        }}
      />
    );

    const loggedOutJSX = (
      <Button
        block
        rounded
        style={{ marginTop: 20 }}
        onPress={()=>this.props.navigation.navigate('Authentication')}
      >
        <Text>Sign In</Text>
      </Button>
    );

    const mainJSX = this.state.isLoggedIn ? loggedInJSX : loggedOutJSX;
    return (
      <Container>
        <View style={{flex : 1}}>
          <Image
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Image
              square
              style={{}}

              source={userImage}
            />
          </Image>

          {mainJSX}
        </View>
      </Container>
    );
  }
}
