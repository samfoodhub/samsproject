import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from "react-native";
import { connect } from "react-redux";

function DataScreen(props) {

  useEffect(() => {
    setdata(props.getTextVal);
  }, []);
  console.log("mapStattttttt", props.getTextVal);
const [data,setdata]=useState()
  const renderItem = ({ item }) => (
    <View style={styles.container2}>
    <View style={styles.textflex}>
      <Text style={styles.textsize}>{item.value}</Text>
    </View>
    <TouchableOpacity style={styles.biniconflex}></TouchableOpacity>
  </View>
  );
  const goback = () => {
    props.navigation.navigate("mainscreen");
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.titleflex} onPress={() => goback()}>
          <Text style={styles.titletext}>TUDOS ADDED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.biniconflex}>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>

        <FlatList
          data={props.getTextVal}
          renderItem={renderItem}/>
        
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1
  },
  container1: {
    flex: 0.1,
    flexDirection: "row"
  },
  titletext: {
    marginLeft: 20,
    fontSize: 20
  },
  titleflex: {
    justifyContent: "center",
    flex: 0.8
  },
  biniconflex: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center"
  },
  binimagesize: {
    height: 30,
    width: 30
  },
  container2: {
    height: 70,
    backgroundColor: "grey",
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    marginBottom: 20
  },
  textflex: {
    flex: 0.8,
    justifyContent: "center",
    marginLeft: 10
  },
  textsize: {
    fontSize: 15
  },
  container3: {
    flex: 0.7
  }
});
function mapStateToProps(state) {
  return {
    getTextVal: state.textInstore.storeData
  };
}

export default connect(mapStateToProps, null)(DataScreen);
