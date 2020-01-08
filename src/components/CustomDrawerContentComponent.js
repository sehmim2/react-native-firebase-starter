import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class Details extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "#13C0CE"
        },
        headerLeft: (
            <View>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Text>Poop</Text>
                </TouchableOpacity>
            </View>
        )
    });

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}> Details </Text>
            </View>
        );
    }
}