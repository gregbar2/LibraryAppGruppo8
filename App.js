import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from './src/navigation/AppTabs.js';
import BookDetails from './src/bookDetails.js';
import EditBook from './src/editBook.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="Tabs" component={AppTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Dettaglio" component={BookDetails} />
            <Stack.Screen name="Modifica Libro" component={EditBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
