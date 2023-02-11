import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState("");

  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoalText
    ])
  }


  return (
    <View style={styles.container}>

      <View style={styles.globalContainer}>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your goals"
            onChangeText={goalInputHandler}
          />
          <Button
            style={styles.buttonGoald}
            title="Add Goal"
            onPress={addGoalHandler}
          />
        </View>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false} >
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText} >{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    alignContent: "center",
    alignItems: "center",
    margin: "auto",
    borderWidth: 2,
  },
  globalContainer: {
    width: "100%",
    justifyContent: 'center',
    paddingHorizontal: 8,
    alignContent: "center",
    alignItems: "center",
    margin: "auto",
  },
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


  buttonGoald: {
    borderWidth: 1,
    borderColor: "blue",

  },

  goalsContainer: {
    width: "85%",
    borderRadius: 55
  },

  goalItem: {
    backgroundColor: "pink",
    margin: 8,
    padding: 8,
    borderRadius: 6,
    paddingLeft: 15

  }, goalText: {
    color: "green"
  }
});
