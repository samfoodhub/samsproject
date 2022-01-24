import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { storeTextData } from '../Redux/action';

function WelcomeScreen(props) {

  const [inputVal, setInputVal] = useState('');
  //console.log('test...', props)

  const gotoNextPage = () => {
    console.log('typee');
    props.storeTextData(inputVal);
    props.navigation.navigate('HomeScreen');
  }
  const onValChangeText = (text) => {
    setInputVal(text);
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.input}
        placeholder="Enter here"
        onChangeText={(val) => { onValChangeText(val) }}
        value={inputVal}
      />
      <Button
        title="Go to Home"
        onPress={gotoNextPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

});
function mapDispatchToProps(dispatch) {
  return {
    storeTextData: (item) => { dispatch(storeTextData(item)) },
  }
}


export default connect(null, mapDispatchToProps)(WelcomeScreen);