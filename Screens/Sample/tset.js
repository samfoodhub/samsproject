import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList,
} from 'react-native';

const test = () => {
    const [enteredText, setEntererd] = useState('');
    const [disText, setText] = useState([]);
    console.log(disText, 'ttt')
    const inputTextHAndler = enteredText => {
        setEntererd(enteredText);
    };
    const addtextHandler = () => {
        setText(currentText => [
            ...currentText,
            { key: Math.random().toString(), value: enteredText },
        ]);
    };

    return (
        <View style={style.outer}>
            <Text style={style.font}>Type Something</Text>
            <View style={style.inner}>
                <TextInput
                    placeholder="Type Here"
                    style={style.inputtext}
                    onChangeText={inputTextHAndler}
                    value={enteredText}
                />
                <Button title="ADD" onPress={addtextHandler} />
            </View>
            <FlatList
                data={disText}
                renderItem={itemData => (
                    <View key={itemData.item} style={style.textList}>
                        <Text>{itemData.item.value}</Text>
                    </View>
                )}
            />
        </View>
    );
}
export default test;
const style = StyleSheet.create({
    outer: {
        padding: 50,
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 80,
    },
    font: {
        fontSize: 25,
    },
    inner: {
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    inputtext: {
        padding: 10,
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'black',
    },
    textList: {
        padding: 10,
        backgroundColor: 'lightblue',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
    },
});