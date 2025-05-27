import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MoveToDetail from './src/moveToDetail.js';
import AddEdit from './src/addEdit.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Inizializzo il Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={MoveToDetail} options={{ headerShown: false }}/>
      <Tab.Screen name="---" component={AddEdit} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
