import React, { useState } from 'react';
import { View, Alert, Image } from 'react-native';
import styles from '../styles/main';
import luca from "../assets/luca.jpg"
import { PinchGestureHandler, State } from "react-native-gesture-handler"

export default function Pinch() {
    const [scale, setScale] = useState(1)

    const handlerGestureEvent = ({ nativeEvent }) => {
        setScale(nativeEvent.scale)
    }

    const scaleDefault = ({ nativeEvent }) => {
        // console.log(nativeEvent)
        if (nativeEvent.state === State.END) setScale(1)
    }

    return (
        <PinchGestureHandler onGestureEvent={handlerGestureEvent} onHandlerStateChange={scaleDefault}>
            <View style={styles.container}>
                <Image source={luca} style={[styles.imageContainer, {
                    transform: [
                        { scale: scale }
                    ]
                }]} />
            </View>
        </PinchGestureHandler>
    )
}