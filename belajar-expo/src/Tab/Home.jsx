import React, { useState, useEffect } from 'react'
import styles from "../style/styles";
import {
    Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
} from "react-native";

function Card({ item }) {
    return (
        <View
            style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                padding: 10,
            }}
        >
            <Text>{item.email}</Text>
            <Text>{item.body}</Text>
        </View>
    );
}

export default function () {
    const [comment, setComment] = useState("");
    const [allComment, setAllComment] = useState([
        {
            id: 1,
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi",
        },
        {
            id: 2,
            email: "Jayne_Kuhic@sydney.com",
            body: "est natus enim nihil est ",
        },
        {
            id: 3,
            email: "Hayden@althea.biz",
            body: "harum non quasi et ratione\ntempore",
        },
    ]);

    useEffect(function () {
        // fetch("https://jsonplaceholder.typicode.com/comments")
        //     .then((response) => response.json())
        //     .then((data) => {
        //         const newComent = data.map((c) => ({
        //             id: c.id,
        //             email: c.email,
        //             body: c.body,
        //         }));
        //         setAllComment(newComent);
        //     });
    }, []);


    return (
        <View>
            <View style={styles.container}>
                <Text
                    style={{
                        textAlign: "center",
                        color: "#6E7C7C",
                        fontSize: 50,
                        fontWeight: "bold",
                    }}
                >
                    Blazing Fox
                </Text>
            </View>
            <View
                style={{
                    margin: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <TextInput
                    style={styles.inputUser}
                    value={comment}
                    onChangeText={setComment}
                    placeholder="Comment"
                />
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: "#DDDDDD",
                        padding: 8,
                    }}
                    onPress={() => {
                        alert(comment);
                    }}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={allComment}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return <Card item={item} />;
                }}
            />
        </View>
    )
}