
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen1 from '../Tudutask/homescreen';
// import WelcomeScreen1 from '../Tudutask/welcomescreen';
import mainScreen from '../Tudutask/welcomescreen';
import DataScreen from '../Tudutask/homescreen';
// import Schroolview from '../Sample/Scroolview';
// import Tuduapp from '../Tudutask/mainScreen';
// import Test from '../Sample/tset';


const Stack = createNativeStackNavigator();

function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='mainscreen'>
                <Stack.Screen name="mainscreen" component={mainScreen} />
                <Stack.Screen name="datascreen" component={DataScreen} />
                {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen1} />
                <Stack.Screen name="HomeScreen" component={HomeScreen1} /> */}
                {/* <Stack.Screen name="Tuduapp" component={Tuduapp} /> */}
                {/* <Stack.Screen name="Test" component={Test} /> */}


                {/* <Stack.Screen name="scroolview" component={Schroolview}/> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;