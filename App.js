import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import Home from './src/screens/Home';
import AddScreen from './src/screens/AddScreen';


// Firebase 
import * as firebase from 'firebase';
import { firebaseConfig } from './src/api/FirebaseConfig';
const MainNavigator = createStackNavigator({
  Home: { screen: Home },

  AddScreen: {
    screen: AddScreen
  }
},
  {
    initialRouteName: 'Home'
  }
);

const App = createAppContainer(MainNavigator);

export default App;

