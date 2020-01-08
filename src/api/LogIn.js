import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import { AsyncStorage } from 'react-native';
// import { GoogleSignin } from 'react-native-google-signin';


// Facebook Configs
const FB_APP_ID = "746496419178578"

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



const logInWithFaceBook = () => {
    Facebook.logInWithReadPermissionsAsync(FB_APP_ID, { permissions: ['public_profile'] }).then((type, token) => {
        if (type == 'success') {
            const credentials = firebase.auth.FacebookAuthProvider.credential(token)
            firebase.auth().signInWithCredential(credentials).catch(error => { alert(error) })
        }
    }).catch(err => console.log(err))

}

// // Calling this function will open Google for login.
// const googleLogin = async () => {
//     try {
//         // Add any configuration settings here:
//         await GoogleSignin.configure();

//         const data = await GoogleSignin.signIn();

//         // create a new firebase credential with the token
//         const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
//         // login with credential
//         const currentUser = await firebase.auth().signInWithCredential(credential);

//         // Storing a key value pair in local storage
//         AsyncStorage.setItem('userToken', firebase.auth().currentUser.uid)
//             .then(() => {
//                 navigate("App", { currentUser: firebase.auth().currentUser })
//             })
//             .catch((err) => alert(err))
//     } catch (e) {
//         console.error(e);
//     }
// }

export { logInWithEmail, logInWithFaceBook }
