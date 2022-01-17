import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native';


const Scrool = () => {

  const [object, setobject] = useState([
    {
      key:'1',
      title: "First Item",
      Description: 'Description 1'
    },
    {
      key:'2',
      title: "Second Item",
      Description: 'Description 2'
  
    },
    {
      key:'3',
      title: "Third Item",
      Description: 'Description 3'
    },
    {
      key:'4',
      title: "Fourth Item",
      Description: 'Description 3'
    },
    {
      key:'5',
      title: "Fifth Item",
      Description: 'Description 3'
    },
    {
      key:'6',
      title: "Sixth Item",
      Description: 'Description 3'
    },
    {
      key:'7',
      title: "Seventh Item",
      Description: 'Description 3'
    },
  ])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container2}>
      {object.map(item => (
          <View key={item.key} style={styles.container1}>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.Description}</Text>
          </View>
      ))}
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


{/* <Scroolflex title='Title 1' description='Description 1'/>
<Scroolflex  title='Title 2' description='Description 2'/>
<Scroolflex title='Title 3' description='Description 3'/>
<Scroolflex title='Title 4' description='Description 4'/>
<Scroolflex title='Title 5' description='Description 5'/>
<Scroolflex title='Title 6' description='Description 6'/>       
<Scroolflex title='Title 7' description='Description 7'/>       
<Scroolflex title='Title 8' description='Description 8'/>
<Scroolflex title='Title 9' description='Description 9'/>        
<Scroolflex title='Title 10' description='Description 10'/>
   */}
