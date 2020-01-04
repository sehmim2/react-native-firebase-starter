import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import { AsyncStorage } from 'react-native';

// Facebook Configs
const FB_APP_ID = "2994303310597129"

const logInWithEmail = (email, password, navigate) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            // Storing a key value pair in local storage
            AsyncStorage.setItem('userToken', firebase.auth().currentUser.uid)
                .then(() => {
                    navigate("App", { currentUser: firebase.auth().currentUser })
                })
                .catch((err) => alert(err))
        })
    }
    catch (error) {
        alert(error)
    }
}

const logInWithFaceBook = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(FB_APP_ID, { permissions: ['public_profile'] })

    if (type == 'success') {
        const credentials = firebase.auth.FacebookAuthProvider.credential(token)
        firebase.auth().signInWithCredential(credentials).catch(error => { alert(error) })
    }
}

export { logInWithEmail, logInWithFaceBook }
