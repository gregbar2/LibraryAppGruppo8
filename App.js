import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
<<<<<<< HEAD
import Homescreen from './src/homescreen.js';
import AddRemove from './src/addRemove.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Inizializza lo Stack Navigator
const Stack = createStackNavigator();
=======
import MoveToDetail from './src/moveToDetail.js';
import AddEdit from './src/addEdit.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Inizializzo il Tab Navigator
const Tab = createBottomTabNavigator();
>>>>>>> d834428b2d4263a2e9ead735844cc8883d33bd06

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="AddRemove" component={AddRemove} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




=======
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={MoveToDetail} options={{ headerShown: false }}/>
      <Tab.Screen name="---" component={AddEdit} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
>>>>>>> d834428b2d4263a2e9ead735844cc8883d33bd06
