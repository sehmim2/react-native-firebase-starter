import React, { useState } from 'react';
import { StyleSheet, Text } from "react-native";
import * as firebase from 'firebase';
import { Container, Content, Form, Item, Label, Input, Button } from 'native-base';
import { signUpWithEmail } from '../api/SignUp';
import { logInWithEmail, logInWithFaceBook } from '../api/LogIn';

import Icon from 'react-native-vector-icons/FontAwesome';


const SignUpPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const [user, setUser] = useState(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user != null) {
                console.log(user)
            }
        })
    })
    return (
        <Container style={styles.container}>
            <Content style={{ paddingTop: 100 }}>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCapitalize="none"
                            onChangeText={(email) => { setEmail(email) }}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input
                            autoCompleteType="password"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={(password) => { setPassword(password) }}
                        />
                    </Item>

                    <Button
                        full rounded success
                        style={{ marginTop: 20 }}
                        onPress={() => { signUpWithEmail(email, password) }}>
                        <Text style={{ color: 'white' }}>Sign Up</Text>
                    </Button>

                    <Button
                        full rounded info
                        style={{ marginTop: 20 }}
                        onPress={() => { logInWithEmail(email, password) }}>
                        <Text style={{ color: 'white' }}>Log In</Text>

                    </Button>

                    <Button
                        full rounded primary
                        style={{ marginTop: 20 }}
                        onPress={() => logInWithFaceBook()}>
                        <Icon
                            name="facebook"
                            color='white' />
                    </Button>

                </Form>
            </Content>
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
})

export default SignUpPage
