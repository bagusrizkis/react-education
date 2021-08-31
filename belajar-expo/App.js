import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const [comment, setComment] = useState("");
    const [allComment, setAllComment] = useState([]);

    useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((data) => {
                const newComent = data.map((c) => ({
                    id: c.id,
                    email: c.email,
                    body: c.body,
                }));
                setAllComment(newComent);
            });
    }, []);

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text
                    style={{
                        color: "blue",
                        fontSize: 50,
                    }}
                >
                    Blazing Fox
                </Text>
            </View>
            <View
                style={{
                    margin: 10,
                    flexDirection: "row",
                }}
            >
                <TextInput
                    style={styles.inputUser}
                    value={comment}
                    onChangeText={setComment}
                />
                {/* <Button
                    title="Add"
                    color="red"
                    onPress={() => {
                        alert(comment);
                    }}
                /> */}
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#DDDDDD",
                        padding: 10,
                    }}
                    onPress={() => {
                        alert(comment);
                    }}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            {/* <ScrollView>
                {allComment.map((cmnt) => {
                    return (
                        <View
                            key={cmnt.id}
                            style={{
                                marginBottom: 5,
                                borderBottomColor: "black",
                                borderBottomWidth: 1,
                            }}
                        >
                            <Text>{cmnt.email}</Text>
                            <Text>{cmnt.body}</Text>
                        </View>
                    );
                })}
            </ScrollView> */}
            <FlatList
                data={allComment}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                marginBottom: 5,
                                borderBottomColor: "black",
                                borderBottomWidth: 1,
                            }}
                        >
                            <Text>{item.email}</Text>
                            <Text>{item.body}</Text>
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
    },
    inputUser: {
        borderColor: "black",
        height: 35,
        borderWidth: 2,
        width: 300,
        marginRight: 5,
    },
});
