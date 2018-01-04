import React, { Component } from "react";
import ReadScreen from "./ReadScreen.js";
import HomeScreen from "../HomeScreen/HomeScreen.js";
import CreateStudyScreen from "../CreateStudyScreen/CreateStudyScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Read: { screen: ReadScreen },
    CreateStudy: { screen: CreateStudyScreen }
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