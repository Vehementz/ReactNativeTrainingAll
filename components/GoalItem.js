import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
            android_ripple={{ color: "#purple" }} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}

            
            >
                <Text style={styles.goalText} >{props.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({


    goalItem: {
        backgroundColor: "black",
        margin: 8,
        padding: 8,
        borderRadius: 6,
        paddingLeft: 15

    },
    pressedItem: {

    },
    goalText: {
        color: "white",
        padding: 7
    }



});