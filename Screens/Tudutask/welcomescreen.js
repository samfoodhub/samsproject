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
import { storeTextData } from "../Redux/action";

const mainScreen = (props) => {
  // var tudoone ={key:""}
  const [tudoone, settudoone] = useState({ val: "" });
  const [disText, setText] = useState("");
  const [datass, setdata] = useState();

  useEffect(() => {
    setdata(props.getTextVal);
  }, []);
  console.log(tudoone, "11111111111");
  // const [disText, setText] = useState([]);
  // console.log(disText, "ssssssss");
  const keygenerate = () => {
    setText((text) => [
      ...text,
      { key: Math.random().toString(), value: tudoone }
    ]);
  };
  const gotoNextPage = () => {
    console.log("propsvalue datass", typeof datass);
    let redarr = [];
    redarr.push(datass);
    redarr.push(disText);
    console.log("redarrredarr", redarr);

    props.storeTextData(disText);
    props.navigation.navigate("datascreen");
  };

  const onValChangeText = (text) => {
    settudoone(text);
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container1}>
        <Text style={styles.normaltext}>Add Your Datas</Text>
      </View>
      <View style={styles.container4}>
        <View style={styles.searchbar}>
          <TextInput
            style={styles.input}
            placeholder="Enter your data"
            placeholderTextColor="blue"
            // onChangeText={tudoone}
            onChangeText={(val) => {
              onValChangeText(val);
            }}
          />
        </View>
      </View>
      <View style={styles.plusiconflex}>
          <TouchableOpacity onPress={keygenerate} style={styles.plusicon}>
            <Text style={styles.plusicontext}>Save Data</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.plusiconflex}>
          <TouchableOpacity onPress={gotoNextPage} style={styles.plusicon1}>
            <Text style={styles.plusicontext}>Go To Tudus</Text>
          </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    storeTextData: (item) => {
      dispatch(storeTextData(item));
    }
  };
}
function mapStateToProps(state) {
  return {
    getTextVal: state.textInstore.storeData
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(mainScreen);
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1
  },
  container1: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginLeft:80,
    top:30
  },
  normaltext: {
    marginLeft: 40,
    fontSize: 20,
    color: "blue",
    fontWeight:"bold"
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
  },
  container4: {
    flex: 0.4,
    flexDirection: "row"
  },
  searchbar: {
    flex: 0.9,
    justifyContent: "center"
  },
  plusicon: {
    height: 50,
    width: 300,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10
  },
  plusicon1: {
    height: 50,
    width: 300,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
    marginTop:30
  },
  plusiconflex: {
    alignItems: "center",
    justifyContent: "center",
  },
  plusicontext: {
    color: "white",
    fontSize: 20
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    left: 20
  }
});
