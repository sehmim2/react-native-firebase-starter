import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import Home from './src/screens/Home';
import AddScreen from './src/screens/AddScreen';
import SignUpPage from './src/screens/SignUpPage';
import LogInPage from './src/screens/LogInPage';
import ViewScreen from './src/screens/ViewScreen';
import Dashboard from './src/screens/Dashboard';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },

  AddScreen: {
    screen: AddScreen
  },
  SignUpPage: {
    screen: SignUpPage
  },
  LogInPage: {
    screen: LogInPage
  },
  Dashboard: {
    screen: Dashboard
  },
  ViewScreen: {
    screen: ViewScreen
  }
},
  {
    initialRouteName: 'Home'
  }
);

const App = createAppContainer(MainNavigator);

export default App;

