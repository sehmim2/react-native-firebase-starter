import * as firebase from 'firebase';
import '@firebase/firestore';

import { AsyncStorage } from 'react-native';

const db = firebase.firestore()

const signUpWithEmail = (email, password, navigate) => {
    try {
        if (password.length < 6) {
            alert("Enter More than 6 chars")
            return
        }
        // Sign user Up
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                // Add User to DB 
                const currentUserArray = firebase.auth().currentUser.providerData
                // Turn it into an array of 1 object so firebase .set() is happy
                const user = currentUserArray.map((obj) => { return Object.assign({ userData: [] }, obj) });

                // Push to to DB
                db.collection('users')
                    .doc(user[0].uid)
                    .set(user[0])
                    .then(() => {
                        // Send Email Verification
                        firebase.auth().currentUser.sendEmailVerification()
                            .then(() => {
                                // Storing a key value pair in local storage
                                AsyncStorage.setItem('userToken', firebase.auth().currentUser.uid)
                                    .then(() => {
                                        alert("Please Check Email to get Verified!")
                                        navigate('App', { currentUser: user[0] })
                                    })
                                    .catch((err) => alert(err))
                            }).catch((error) => {
                                console.log(error)
                            });
                    })
                    .catch(err => console.log(err))
            }).catch(error => {
                alert(error)
            })
    }
    catch (error) {
        alert(error)
    }
}

export { signUpWithEmail }


const createUser = (user) => {



}