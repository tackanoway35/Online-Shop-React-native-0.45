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

import { connect } from 'react-redux';

const routes = ["Order History", "Change Information", "Sign Out"];

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    //Redux
    const { profile } = this.props;
    var mainJSX = <View></View>
    if (Object.keys(profile).length > 0) {
      var mainJSX = (
        <View>
          <View>
            <Text>{`Xin chào ${profile.username}`}</Text>
            <Button>
              <Text>Log out</Text>
            </Button>
          </View>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </View>
      );
    } else {
      var mainJSX = (
        <Button
          block
          rounded
          style={{ marginTop: 20 }}
          onPress={() => this.props.navigation.navigate('Authentication')}
        >
          <Text>Sign In</Text>
        </Button>
      );
    }
    return (
      <Container>
        <View style={{ flex: 1 }}>
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

function mapStateToProps(state) {
  return {
    profile: state.signIn.profile
  }
}
export default connect(mapStateToProps)(Menu);