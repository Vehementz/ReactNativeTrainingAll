import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native"


function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState("");


    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your goals"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button
                style={styles.buttonGoald}
                title="Add Goal"
                onPress={addGoalHandler}
            />
        </View>
    )
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "white",
        flexDirection: "row",
        marginBottom: 14,
        width: "70%",
        paddingBottom: 7,
        margin: "auto",
        alignContent: "center",
        alignItems: "center",
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        flexDirection: "row",
        padding: 7,
        width: "100%",
        marginRight: 4
    },
})