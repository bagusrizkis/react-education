import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/main';
import TheGoodDoctor from '../assets/the-good-doctor.jpg'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

export default function Pan() {
    const [pos, setPos] = useState({
        translateX: 0,
        translateY: 0,
    })

    const handlerOnGestureEvent = ({ nativeEvent }) => {
        // console.log(nativeEvent)
        setPos({
            translateX: nativeEvent.translationX,
            translateY: nativeEvent.translationY
        })
    }

    const handlerStateChange = ({ nativeEvent }) => {
        // console.log(event.nativeEvent)
        // if (nativeEvent.state === State.ACTIVE) {
        //     console.log("active")
        // }
        if (nativeEvent.state === State.END) {
            // console.log('end')
            setPos({
                translateX: 0,
                translateY: 0
            })
        }
    }

    return (
        <PanGestureHandler onGestureEvent={handlerOnGestureEvent} onHandlerStateChange={handlerStateChange}>
            <View style={styles.container}>
                <Image source={TheGoodDoctor} style={[styles.imageContainer, {
                    transform: [
                        { translateX: pos.translateX },
                        { translateY: pos.translateY }
                    ]
                }]} />
            </View>
        </PanGestureHandler>
    )
}