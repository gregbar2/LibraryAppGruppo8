import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import MoveToDetails from './moveToDetails.js';
import Categories from '../categories.js';
import BookList from '../allBooks.js';
import SearchScreen from '../searchScreen.js';
import Settings from '../settings.js';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';



// Inizializzo il Tab Navigator, tab con le icone che ci permettono di accedere direttamente alle pagine dell'app
const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator initialRouteName="Homepage">
      <Tab.Screen name="Homepage" component={MoveToDetails} options={/* options è un obj che ci permette di personalizzare la tab.screen, definiamo una funzione per restituire tutte le proprietà imposte e per gestire il controllo per nascondere la tabBar*/
      ({ route }) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';// permette di verificare qual'è la schermata mostrata (FOCUS), e se non è Home lascia routeName come undefined

    return {
      headerShown: false, /* nasconde la scritta in alto   */
      tabBarIcon: ({ focused }) => ( /* imposta l'icona nella tabBar sotto */
        <Image
          source={require('../../assets/tabIcon/homeIcon.png')}
          style={{ width: 30, height: 30 }}
        />
      ),
      tabBarStyle: routeName === 'Home' ? undefined : { display: 'none' }, /* controllo per nascondere la tabBar  */
    };
  }}/>
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
          <Tab.Screen name="Categorie" component={Categories} options={{tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/tabIcon/catIcon.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ) }}/>

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
}
