import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Pan from "./Tab/Pan";
import Pinch from "./Tab/Pinch";
import LongPress from "./Tab/LongPress";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Pan" component={Pan} />
                <Tab.Screen name="Pinch" component={Pinch} />
                <Tab.Screen name="LongPress" component={LongPress} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
