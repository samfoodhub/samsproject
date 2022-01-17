import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';


const DATA = [
  {
    title: "First Item",
    Description: 'Description 1'
  },
  {
    title: "Second Item",
    Description: 'Description 2'

  },
  {
    title: "Third Item",
    Description: 'Description 3'
  },
  {
    title: "Fourth Item",
    Description: 'Description 3'
  },
  {
    title: "Fifth Item",
    Description: 'Description 3'
  },
  {
    title: "Sixth Item",
    Description: 'Description 3'
  },
  {
    title: "Seventh Item",
    Description: 'Description 3'
  },
];

const Flat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <FlatList
          data={DATA}
          renderItem={
            ({ item }) => <View style={styles.container1}>
              <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.Description}</Text>
            </View> 
        }
        />
      </View>
    </SafeAreaView>
  );
}

export default Flat;

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'lightgrey'
  },
  container1: {
    height:70, backgroundColor: 'white', borderRadius: 10, marginTop: 20, marginLeft: 10, marginRight: 10
  },
  title: {
    marginLeft: 30, marginBottom: 10,marginTop:10
  },
  description: {
    marginLeft: 30
  },
  container2: {
    flex: 1
  }
});


