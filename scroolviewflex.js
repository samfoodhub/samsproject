import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';

const Scroolflex = (props) => {
  return (
    <View style={styles.container1}>
    <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
  </View> 
  );
}

export default Scroolflex;
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
  