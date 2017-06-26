import React, { Component } from "react";
import Main from "./Main.js";
import MainScreenNavigator from "../ChatScreen/index.js";
import Authentication from "../Authentication/Authentication";
import Menu from "../Menu/Menu.js";
import { DrawerNavigator } from "react-navigation";
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrderHistory from '../OrderHistory/OrderHistory';
export default (MainRouter = DrawerNavigator(
  {
    Main: { screen: Main },
    Chat: { screen: MainScreenNavigator },
    Authentication: { screen: Authentication },
    'Change Information' : { screen : ChangeInfo},
    'Order History' : {screen : OrderHistory}
  },
  {
    contentComponent: props => <Menu {...props} />
  }
));