import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';



const promptUser = () => {
    const title = 'Logging Out';
    const message = 'Are you Sure You Want to Logout?';
    const buttons = [
        { text: 'Cancel', type: 'cancel' },
        { text: 'Yes', onPress: () => setState({ userSelection: 'Yes' }) },
    ];
    Alert.alert(title, message, buttons);
}


export const LogOutPage = () => {

    [userSelection, setUserSelection] = useState()

    return (
        <View>
            <View>
                <Text>{this.state.userSelection}</Text>
                <TouchableOpacity onPress={() => promptUser()}>
                    <View>
                        <Text>Select an Option</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

