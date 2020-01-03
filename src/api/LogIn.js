import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';


// Facebook Configs
const FB_APP_ID = "2994303310597129"

const logInWithEmail = (email, password) => {
    try {
        firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
            console.log(user)
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