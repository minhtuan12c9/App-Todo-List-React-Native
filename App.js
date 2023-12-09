import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';

import styles from './App.components.style';
import Task from './components/Task';
import Form from './components/Form';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    // Add task
    setTaskList([...taskList,task]);
  }
  const handleDeleteTask = (index) => {
    Alert.alert(
      "THÔNG BÁO",
      "Bạn có chắc chắn muốn xóa?",
      [
        {
          text: "YES",
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index,1);
            setTaskList(taskListTmp);
          },
        },
        {text: "YESN'T", onPress: () =>{}}
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.textHeader}>
          <Text style={styles.header}>DANH SÁCH CÔNG VIỆC</Text>
        </View>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
                return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)} />
            })
          }
          <Task />
        </ScrollView>
        
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}


