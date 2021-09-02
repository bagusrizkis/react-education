import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/Navigator/TabNavigation";

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    );
}
