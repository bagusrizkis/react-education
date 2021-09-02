import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Contact(props) {
    const { navigation } = props
    return (
        <View>
            <Text>Contact</Text>
            <Button title="Go to System" onPress={() => navigation.navigate("System")} />
        </View>
    )
}
