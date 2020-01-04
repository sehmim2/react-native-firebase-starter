import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import { LogOutPage } from '../screens/LogOutPage';

import { AsyncStorage } from 'react-native';


export const logOutCurrentUser = (navigate) => {
    try {
        firebase.auth().signOut()
            .then(() => {
                AsyncStorage.clear()
                    .then(() => {
                        alert("Logging Out!")
                        navigate("Auth")
                    })
                    .catch((err) => alert(err))
            })
            .catch(err => {
                console.log(err)
            })
    }
    catch (error) {
        alert(error)
    }
}