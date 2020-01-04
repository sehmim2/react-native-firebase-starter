import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, ActivityIndicator, View, Text, FlatList, TouchableOpacity, Button } from 'react-native'

import * as firebase from 'firebase';
import 'firebase/firestore';

import Constants from 'expo-constants';
import { logOutCurrentUser } from '../api/LogOut';


const Dashboard = (props) => {

    // Get all data that exists in COllection
    const COLLECTION_NAME = "test"
    const [state, setState] = useState({ loading: true, data: null })


    const { navigate } = props.navigation;
    const onSelect = useCallback(({ user, value, selected }) => {
        navigate('ViewScreen', { user, value })
    }, [])

    useEffect(() => {
        firebase
            .firestore()
            .collection(COLLECTION_NAME)
            .onSnapshot((snapshot) => {
                const newEntry = snapshot.docs.map((doc) => (
                    doc.data()
                ))
                setState({ data: newEntry, loading: false })
            })
    }, [])

    if (state.loading) {
        return (
            <ActivityIndicator size="large" color="#0000ff" />
        )
    }
    else if (!state.loading && (state.data === null)) {
        return (
            <View>
                <Text>
                    No Data
                </Text>
            </View>
        )
    }
    return (

        <View>
            <Text style={{ fontSize: 30 }} > DashBoard</Text>
            <FlatList
                data={state.data}
                renderItem={({ item }) =>
                    <Item
                        user={item.user}
                        selected={item.selected}
                        value={item.value}
                        onSelect={onSelect}
                        key={item.user}
                    />}
                keyExtractor={item => item.id}
            />
            <Button
                onPress={() => navigate('AddScreen', { homeState: state })}
                title="Add Stuff"></Button>
            <Button
                color="blue"
                onPress={() => logOutCurrentUser(navigate)}
                title="LogOut"></Button>
        </View>
    )
}

function Item({ user, value, onSelect, selected }) {
    return (
        <TouchableOpacity
            onPress={() => onSelect({ user, value, selected })}
            style={[
                styles.item,
                { backgroundColor: selected ? '' : '#fffff' },
            ]}
        >
            <View style={[{
                margin: 15, padding: 5, borderColor: 'gray',
                borderRadius: 4,
                borderWidth: 0.5
            }]}>
                <Text>User: {user}</Text>
                <Text>Value: {value}</Text>

            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
    },
    button: {
        padding: 10
    },
    title: {
        fontSize: 25
    },
    flatlist: {
        margin: 5
    }
});

export default Dashboard
