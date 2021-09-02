import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import styles from '../styles/main';
import theTomorrowWar from "../assets/the-tomorrow-war.jpg"
import { LongPressGestureHandler, State } from "react-native-gesture-handler"

export default function LongPress() {
    const handlerGestureEvent = ({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
            Alert.alert("Tertekan")
        }
    }

    return (
        <View style={styles.container}>
            <Text>LongPress</Text>
            <LongPressGestureHandler onHandlerStateChange={handlerGestureEvent} minDurationMs={2000}>
                <Image source={theTomorrowWar} style={styles.imageContainer} />
            </LongPressGestureHandler>
        </View>
    )
}