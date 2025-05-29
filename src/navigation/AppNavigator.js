import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from './AppTabs.js'; // il tuo file App.js rinominato
import BookDetails from '../bookDetails.js';

const Stack = createNativeStackNavigator();
//racchiudiamo sia il tab navigator che la pagina Dettaglio, per renderla raggiungibile da qualunque punto dell'app
export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={AppTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Dettaglio" component={BookDetails} />
    </Stack.Navigator>
  );
}
