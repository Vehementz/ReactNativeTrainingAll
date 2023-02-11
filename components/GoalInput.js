import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native"


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
        <Modal>
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
        </Modal>

    )
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "white",
        flexDirection: "row",
        marginBottom: 14,
        width: "100%",
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
        width: "50%",
        marginRight: 4
    },
})