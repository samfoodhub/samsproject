import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Scroolflex from './scroolviewflex';

const Scrool = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container2}>
        <Scroolflex title='Title 1' description='Description 1'/>
        <Scroolflex  title='Title 2' description='Description 2'/>
        <Scroolflex title='Title 3' description='Description 3'/>
        <Scroolflex title='Title 4' description='Description 4'/>
        <Scroolflex title='Title 5' description='Description 5'/>
        <Scroolflex title='Title 6' description='Description 6'/>       
        <Scroolflex title='Title 7' description='Description 7'/>       
        <Scroolflex title='Title 8' description='Description 8'/>
        <Scroolflex title='Title 9' description='Description 9'/>        
        <Scroolflex title='Title 10' description='Description 10'/>
        

        
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
    height: 70, backgroundColor: 'white', borderRadius: 10, marginTop: 20, marginLeft: 10, marginRight: 10
  },
  title: {
    marginLeft: 30, marginBottom: 10, marginTop: 10
  },
  description: {
    marginLeft: 30
  },
  container2: {
    flex: 1
  }
});


