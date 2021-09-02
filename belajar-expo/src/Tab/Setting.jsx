import React from 'react'
import { View, Text } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RootSetting from '../Stack/RootSetting'
import About from '../Stack/About'
import Contact from '../Stack/Contact'
import System from '../Stack/System'

const Stack = createNativeStackNavigator()

export default function Setting() {
    return (
        <Stack.Navigator initialRouteName="RootSetting">
            <Stack.Screen name="About" component={About} />
            <Stack.Screen
                name="RootSetting"
                options={{ title: "Setting" }}
                component={RootSetting}
            />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="System" component={System} />
        </Stack.Navigator>
    )
}