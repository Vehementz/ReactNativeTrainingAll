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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your goals"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.Button}>
                        <Button 
                            style={styles.buttonGoald}
                            title="Add Goal"
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.Button}>
                        <Button  title="Cancel"  onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>

    )
}


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "white",
        flexDirection: "column",
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
        width: "90%",
        marginRight: 4,
        marginTop: 30,

    },
    buttonContainer: {
        flexDirection: "row",
    },
    Button: {
        width: "30%",
        marginHorizontal: 8,
        marginVertical: 10, 
    }
})