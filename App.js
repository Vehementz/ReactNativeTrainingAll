import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courseGoals, setCourseGoals] = useState([]);


  function startAddGoalHandler() {
    setModalIsVisible(true); 
  }


  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ])
  }


  function deleGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }


  return (
    <View style={styles.container}>

      <View style={styles.globalContainer}>
      <Button title="Add new Goa" color="red" onPress={startAddGoalHandler}/>
       <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
       
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
        data={courseGoals} 
        renderItem={(itemData) => {

          return (
          
          <GoalItem  
          text={itemData.item.text}
          id={itemData.item.id}
          onDeleteItem={deleGoalHandler}
          />
          )
        }}

        keyExtractor={(item, index) => {
          return item.id;
        }}
          alwaysBounceVertical={false}
        />

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
    width: "100%"
  },
  globalContainer: {
    width: "100%",
    justifyContent: 'center',
    paddingHorizontal: 8,
    alignContent: "center",
    alignItems: "center",
    margin: "auto",
  },



  buttonGoald: {
    borderWidth: 1,
    borderColor: "blue",

  },

  goalsContainer: {
    width: "85%",
    borderRadius: 55
  },

});
