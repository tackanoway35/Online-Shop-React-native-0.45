import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import Expo from 'expo';
import MainRoute from './src/Components/Main/index';
import { Provider } from 'react-redux';
import store from './src/Redux/store';

import { FormattedWrapper } from 'react-native-globalize';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    }
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      Arial: require('./assets/fonts/arial.ttf')
    });
    this.setState({
      isReady: true
    })
  }

  render() {
    //Hide all warning
    console.disableYellowBox = true;
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <FormattedWrapper locale='vi' currency='VNĐ'>
        <Provider store={store}>
          <MainRoute />
        </Provider>
      </FormattedWrapper>
    );
  }
}