import React from 'react'
import { View, Text } from 'react-native'

import * as firebase from 'firebase';
import { FirebaseConfig } from "../api/FirebaseConfig";
import 'firebase/firestore';

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig)
}

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home
