import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, Pressable } from "react-native";

export default function App() {
    const [task, setTask] = React.useState([]);
    const [input, setInput] = React.useState("");
    const [deleteTask, setDeleteTask] = React.useState("");

    const reverseArray = (array) => {
        var reversedArray = array.reverse();
        return reversedArray;
    };

    const handleAddBtn = () => {
        if (input !== "") {
            setTask([input, ...task]);
            setInput("");
        } else {
            alert("Please enter a task!");
        }
    };
    const handleDeleteBtn = () => {};

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}>Task manager</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} value={input} onChangeText={(inputTask) => setInput(inputTask)} onSubmitEditing={handleAddBtn} placeholder="Enter task" />
                    {/* <Pressable style={styles.taskBtn} onPress={handleAddBtn} onKeyPress={(e) => e.key === "enter" && console.log("Pressed")}> */}
                    <Pressable style={styles.taskBtn} onPress={handleAddBtn}>
                        <Text style={styles.btnText}>+ Add</Text>
                    </Pressable>
                </View>
            </View>

            <ScrollView>
                <View style={styles.taskContainer}>
                    {task.length < 1 ? <Text style={styles.noTask}>No task to complete!</Text> : <Text style={styles.noTask}>{task.length} tasks to complete!</Text>}
                    {task.map((item, index) => (
                        // <Pressable style={styles.task} onPress={handleAddBtn}>
                        <Text key={index} style={styles.task}>
                            {item}
                        </Text>
                        // </Pressable>
                    ))}
                </View>
                <View style={styles.deleteContainer}>
                    {task.length > 0 && (
                        <Pressable style={styles.deleteAllBtn} onPress={() => setTask([])}>
                            <Text style={styles.deleteAllBtn}>Delete All Tasks</Text>
                        </Pressable>
                    )}
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#001c38",
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        marginTop: 15,
        marginBottom: 30,
        flexDirection: "row",
        justifyContent: "center",
        width: "90%",
        alignItems: "center",
    },
    input: {
        width: "70%",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        color: "#000",
    },
    taskBtn: {
        paddingVertical: 13,
        marginLeft: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: "#0080ff",
    },
    deleteContainer: {
        marginBottom: 20,
    },
    deleteAllBtn: {
        borderRadius: 5,
        alignSelf: "center",
        color: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#001c38",
    },
    noTask: {
        marginVertical: 10,
        fontSize: 17,
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    heading: {
        marginTop: 70,
        paddingBottom: 20,
        fontSize: 40,
        color: "white",
    },
    taskContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    task: {
        width: "85%",
        marginVertical: 3,
        backgroundColor: "#0080ff",
        padding: 10,
        borderRadius: 5,
        fontSize: 17,
        color: "#fff",
    },
    completedTask: {
        color: "#fff",
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
    },
});
