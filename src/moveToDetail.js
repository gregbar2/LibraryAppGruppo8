import AddEdit from './addEdit.js';
import Homescreen from './homescreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MoveToDetail(){ 
/* STACK NAVIGATOR serve per far si che quando clicco su un libro mi porta alla schermata di aggiunta o modifica */
        const Stack = createNativeStackNavigator();
        return(
                <Stack.Navigator initialRouteName="Homescreen">
                <Stack.Screen name="Homescreen" component={Homescreen} />
                <Stack.Screen name="Aggiungi Modifica Libro" component={AddEdit} />
                <Stack.Screen name="Dettaglio" component={BookDetails} />
                </Stack.Navigator>

        );

}