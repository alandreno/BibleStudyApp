import React, { Component } from "react";
import ReadScreen from "../ReadScreen/ReadScreen.js";
import HomeScreen from "./HomeScreen.js";
import CreateStudyScreen from "../CreateStudyScreen/CreateStudyScreen.js";
import SettingsScreen from "../SettingsScreen/SettingsScreen.js";
import SearchScreen from "../SearchScreen/SearchScreen.js"
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Read: { screen: ReadScreen },
    CreateStudy: { screen: CreateStudyScreen },
    Settings: {screen: SettingsScreen },
    Search: {screen: SearchScreen}
  },
  {
    contentComponent: props => <SideBar {...props} />,
    //----------BELOW CAN BE REMOVED after react-navigation fixes https://github.com/aksonov/react-native-router-flux/issues/2718 ------ 
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
    //-----------------------------------------------------------------------------------------------------------------------------------
  }
);
export default HomeScreenRouter;