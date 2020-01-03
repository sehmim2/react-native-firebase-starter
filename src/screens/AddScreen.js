import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, View, TextInput, Text, Button } from 'react-native'

import * as firebase from 'firebase';
import '@firebase/firestore';

import Constants from 'expo-constants';

const db = firebase.firestore()

const AddScreen = (props) => {

    const dataPassedFromHomeNav = JSON.stringify(props.navigation.getParam('someData', 'NO-DATA'))
    const [user, setUser] = React.useState('')
    const [value, setValue] = React.useState('')
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <Text style={[styles.whilespace]}>User:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={user}
                onChangeText={text => setUser(text)}
            />
            <Text style={[styles.whilespace]}>Value:</Text>
            <TextBox
                multiline
                numberOfLines={14}
                value={value}
                style={{ marginBottom: 20, height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setValue(text)}
            />
            <Button title="Add Stuff" onPress={() => addData({ user, value }, navigate, 'test')}></Button>
        </View>
    )
}

const TextBox = (props) => {
    return (
        <TextInput
            {...props}
            editable
            maxLength={40}
        />
    );
}


const addData = (data, navigate, collectionName) => {

    // Call Firebase AddData API here
    db.collection(collectionName)
        .add(data)
        .then(() => {
            alert("Successful!")
            navigate('Dashboard')
        })
        .catch(err => console.log(err))

}
const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        margin: 15
    },
    whilespace: {
        marginTop: 10
    }
});
export default AddScreen