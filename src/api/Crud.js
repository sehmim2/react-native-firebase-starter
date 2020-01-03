import { useEffect, useState } from "react";
import * as firebase from 'firebase';
import '@firebase/firestore';

export const getDataFromDB = (collectionName) => {

    const [state, setState] = useState({ loading: true, data: null })

    useEffect(() => {
        setState(state => ({ loading: true, state: state.data }))

        firebase
            .firestore()
            .collection(collectionName)
            .onSnapshot((snapshot) => {
                const newEntry = snapshot.docs.map((doc) => (
                    doc.data()
                ))
                setState({ data: newEntry, loading: false })
            })
    }, [])

    return state
}


export const addToDB = (data, collectionName) => {
    db.collection(collectionName).add(
        { data }
    )
        .then(() => {

            alert("Successful!")

        })
        .catch(err => console.log(err))
}