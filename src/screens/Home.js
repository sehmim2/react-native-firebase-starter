import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGAdHI6xu2F8G_dmR5FqwHS-u_tsYSqK8",
    authDomain: "hackstuff-1554327268055.firebaseapp.com",
    databaseURL: "https://hackstuff-1554327268055.firebaseio.com",
    projectId: "hackstuff-1554327268055",
    storageBucket: "hackstuff-1554327268055.appspot.com",
    messagingSenderId: "802528537806",
    appId: "1:802528537806:web:4c2db231ebd13cdff6f49f",
    measurementId: "G-9RT57N8P9Y"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const Home = (props) => {

    React.useEffect(() => _bootstrapAsync(), [])
    const { navigate } = props.navigation;

    return (
        <View>
            <Text>Home</Text>
            {
                // firebase.auth().currentUser ?
                //     <>
                //         <Button title="Go To Dashboard Page" onPress={() => navigate("Dashboard", { currentUser: firebase.auth().currentUser })} ></Button>
                //     </>
                //     :
                <>
                    <Button title="Go To Signup Page" onPress={() => navigate("SignUpPage", { someData: "Poop" })} ></Button>
                    <Button title="Go To LogIn Page" onPress={() => navigate("LogInPage", { someData: "Poop" })} ></Button>
                </>

            }

        </View>
    )
}

export default Home
