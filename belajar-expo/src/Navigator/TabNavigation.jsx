import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Tab/Home";
import Setting from "../Tab/Setting";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name="home"
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name="settings"
                                size={size}
                                color={color}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    )
}