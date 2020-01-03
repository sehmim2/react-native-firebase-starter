import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'


const ViewScreen = (props) => {

    const { navigation } = props;
    const user = JSON.stringify(navigation.getParam('user', 'NO-Data'))
    const value = JSON.stringify(navigation.getParam('value', 'NO-Data'))


    return (
        <View >
            <Text style={{ fontSize: 30 }} > View Page</Text>
            <View style={styles.item}>
                <Text>
                    {user}
                </Text>
                <Text>
                    {value}
                </Text>
            </View>
            <Button
                color="red"
                onPress={() => deleteData(navigation.navigate)}
                title="Delete Stuff"></Button>
        </View>
    )
}

export default ViewScreen

const deleteData = (navigate) => {
    alert("To be Implimented")
    navigate('Dashboard')
}
const styles = StyleSheet.create({
    item: {
        margin: 2.5,
        padding: 20,
        borderColor: 'gray',
        borderRadius: 4,
        borderWidth: 0.5,
    },
    button: {
        position: 'absolute',
        width: 50,
        height: 50,
        bottom: 0,
        // left: Dimensions.get('window').width - 70,
        backgroundColor: 'red',
        zIndex: 100,
    }
});
