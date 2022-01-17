import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native';


const Scrool = (item) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container2}>
         <View style={styles.container1}>
                <Text style={styles.title}>Title : First Item </Text>
                  <Text style={styles.description}>Description : Description 1</Text>
              </View> 
              <View style={styles.container1}>
                <Text style={styles.title}>Title : Second Item </Text>
                  <Text style={styles.description}>Description : Description 2</Text>
              </View> 
              <View style={styles.container1}>
                <Text style={styles.title}>Title : Third Item </Text>
                  <Text style={styles.description}>Description : Description 3</Text>
              </View> 
              <View style={styles.container1}>
                <Text style={styles.title}>Title : Fourth Item </Text>
                  <Text style={styles.description}>Description : Description 4</Text>
              </View> 
              <View style={styles.container1}>
                <Text style={styles.title}>Title : Fifth Item </Text>
                  <Text style={styles.description}>Description : Description 5</Text>
              </View> 
              <View style={styles.container1}>
                <Text style={styles.title}>Title : Sixth Item </Text>
                  <Text style={styles.description}>Description : Description 6</Text>
              </View> 
              <View style={styles.container1}>
                <Text style={styles.title}>Title : Seventh Item </Text>
                  <Text style={styles.description}>Description : Description 7</Text>
              </View> 
              <View style={styles.container1}>
                <Text style={styles.title}>Title : eigtht Item </Text>
                  <Text style={styles.description}>Description : Description 8</Text>
              </View> 
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  export default Scrool;
  
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
  
  
  