import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Homescreen from './src/homescreen.js';
import AddRemove from './src/addRemove.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Inizializza lo Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="AddRemove" component={AddRemove} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




