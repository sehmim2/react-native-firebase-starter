import * as firebase from 'firebase';

const signUpWithEmail = (email, password) => {
    try {
        if (password.length < 6) {
            alert("Enter More than 6 chars")
            return
        }
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
            alert(error)
        })
    }
    catch (error) {
        console.log(error)
    }
}

export { signUpWithEmail }