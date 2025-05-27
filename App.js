import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import MoveToDetail from './src/moveToDetail.js';
import AddEdit from './src/addEdit.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Inizializzo il Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Homepage">
      <Tab.Screen name="Homepage" component={MoveToDetail} options={{/*con options possiamo personalizzare la tab.screen,la prima proprietà nasconde la scritta in alto invece la seconda definisce l'icona della tabBar sotto */ headerShown: false,tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/tabIcon/homeIcon.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ) }}/>
      <Tab.Screen name="---" component={AddEdit} options={{tabBarIcon: ({ focused }) => (
            <Image
              source={require('./assets/tabIcon/catIcon.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ) }}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}
