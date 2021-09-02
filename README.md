# React Navigation

https://reactnavigation.org/docs/getting-started

## Nav?

-   Stack
-   Tab

-   Drawer

## Tab

https://reactnavigation.org/docs/tab-based-navigation

-   install package
-   Membuat 2 screen: Home dan Setting

    ```js
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="" component={} />
        </Tab.Navigator>
    </NavigationContainer>
    ```

-   ionic icon
-   Navigator to Component

## Stack

-   install pakckage

    https://reactnavigation.org/docs/hello-react-navigation

-   membuat stack screen

    ```js
    <NavigationContainer>
        <Stack.Navigator initialRouteName="">
            <Stack.Screen name="" component={} />
        </Stack.Navigator>
    </NavigationContainer>
    ```

-   props - navigation.navigate()
-   send Params di argument kedua `navigation.navigate('ScreenName', {bar: "foo"})`

# Gesture Handler

-   install package

    https://docs.swmansion.com/react-native-gesture-handler/docs/

-   common gesture property

    https://docs.swmansion.com/react-native-gesture-handler/docs/api/gesture-handlers/common-gh

    -   onGestureEvent
    -   onHandlerStateChange
    -   ...

-   pan gesture handler

    `import { PanGestureHandler } from "react-native-gesture-handler"`

-   pinch gesture handler

    `import { PinchGestureHandler } from "react-native-gesture-handler"`

-   long tap gesture handler ( optional)

    `import { LongPressGestureHandler } from "react-native-gesture-handler"`
