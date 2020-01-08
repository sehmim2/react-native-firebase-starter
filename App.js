import React, { Component } from 'react';


import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
// Screens
import Home from './src/screens/Home';
import AddScreen from './src/screens/AddScreen';
import SignUpPage from './src/screens/SignUpPage';
import LogInPage from './src/screens/LogInPage';
import ViewScreen from './src/screens/ViewScreen';
import Dashboard from './src/screens/Dashboard';
import AuthLoadingScreen from "./src/components/AuthLoadingScreen";
import ProfileScreen from './src/screens/ProfileScreen';
import Details from "./src/components/CustomDrawerContentComponent";
// Firebase 
import * as firebase from 'firebase';


const AppStack = createStackNavigator({
  Dashboard: { screen: Dashboard },
  AddScreen: { screen: AddScreen },
  ViewScreen: { screen: ViewScreen },
});

const DrawerNavigator = createDrawerNavigator(
  {
    Home: AppStack,
    Profile: { screen: ProfileScreen }
  },
  {
    drawerPosition: 'right',
    drawerType: 'slide',
    initialRouteName: 'Home'
  }
);

const AuthStack = createStackNavigator({
  SignUpPage: { screen: SignUpPage },
  LogInPage: { screen: LogInPage },
});

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
)


const App = createAppContainer(
  SwitchNavigator
);

export default App;

