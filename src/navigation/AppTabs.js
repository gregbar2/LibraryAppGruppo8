import {Image } from 'react-native';
import Categories from '../categories.js';
import BookList from '../allBooks.js';
import SearchScreen from '../searchScreen.js';
import Settings from '../settings.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../homescreen.js';


const Tab = createBottomTabNavigator();

export default function AppTabs() {


  return (
    <Tab.Navigator initialRouteName="Homepage">
    <Tab.Screen name="Homepage" component={Homescreen} options={{tabBarIcon: ({ focused }) => (
          <Image source={require('../../assets/tabIcon/homeIcon.png')}
                 style={{
                   width: 30,
                   height: 30,
                 }}
           />
    ) }}/>

  <Tab.Screen name="Categorie" component={Categories} options={{tabBarIcon: ({ focused }) => (
        <Image
          source={require('../../assets/tabIcon/catIcon.png')}
          style={{
            width: 30,
            height: 30,
          }}
        />
  ) }}/>
      
          
  <Tab.Screen name="Ricerca" component={SearchScreen} options={{ tabBarIcon: ({ focused }) => (
    <Image
      source={require('../../assets/tabIcon/searchIcon.png')}
      style={{
        width: 30,
        height: 30
      }}
    />
  )}}
/>
  <Tab.Screen name="La mia libreria" component={BookList} options={{tabBarIcon: ({ focused }) => (
      <Image
        source={require('../../assets/tabIcon/library.png')}
        style={{
          width: 30,
          height: 30,
        }}
      />
  ) }}/>

  <Tab.Screen name="Impostazioni" component={Settings} options={{tabBarIcon: ({ focused }) => (
        <Image
          source={require('../../assets/tabIcon/settingsIcon.png')}
          style={{
            width: 30,
            height: 30,
          }}
        />
  ) }}/>
          
</Tab.Navigator>
);
};
