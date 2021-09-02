import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function RootSetting(props) {
    const { navigation } = props

    const menu = [
        {
            title: "About",
            to: "About"
        }, {
            title: "System",
            to: "System"
        }, {
            title: "Contact",
            to: "Contact"
        },
    ]

    return (
        <View>
            <View>
                {
                    menu.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => navigation.navigate(item.to)}>
                                <View style={{ backgroundColor: "grey", padding: 10, margin: 5, borderRadius: 2 }}>
                                    <Text style={{ fontSize: 18 }}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        </View>
    )
}