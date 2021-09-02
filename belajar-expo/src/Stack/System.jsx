import React from 'react';
import { View, Text, Button } from 'react-native';
export default function System(props) {
    const { navigation } = props
    return (
        <View>
            <Text>System</Text>
            <Button title="Go to Setting" onPress={() => navigation.navigate("RootSetting")} />
        </View>
    )
}
