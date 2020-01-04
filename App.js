import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import Home from './src/screens/Home';
import AddScreen from './src/screens/AddScreen';
import SignUpPage from './src/screens/SignUpPage';
import LogInPage from './src/screens/LogInPage';
import ViewScreen from './src/screens/ViewScreen';
import Dashboard from './src/screens/Dashboard';
import AuthLoadingScreen from "./src/components/AuthLoadingScreen";
import * as firebase from 'firebase';

const AppStack = createStackNavigator({
  Dashboard: { screen: Dashboard },
  AddScreen: { screen: AddScreen },
  ViewScreen: { screen: ViewScreen }

});
const AuthStack = createStackNavigator({
  SignUpPage: { screen: SignUpPage },
  LogInPage: { screen: LogInPage }
});

// const MainNavigator = createStackNavigator({


// },
//   {
//     initialRouteName: (firebase.auth().currentUser) ? 'Dashboard' : 'Home'
//   }
// );

const App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

export default App;

