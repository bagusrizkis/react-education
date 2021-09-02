import React from 'react';
import { View, Text, Button } from 'react-native';
export default function About(props) {
    const { navigation } = props

    return (
        <View style={{
            alignContent: "center"
        }}>
            <Text>About</Text>
            <Button title="Go to Contact" onPress={() => navigation.navigate("Contact", { message: "hai" })} />
        </View>
    )
}
