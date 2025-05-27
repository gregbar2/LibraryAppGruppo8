import AddEdit from './addEdit.js';
import Homescreen from './homescreen.js';
import BookDetails from './bookDetails.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MoveToDetail(){ 
/* STACK NAVIGATOR serve per far si che quando clicco su un libro mi porta alla schermata di aggiunta o modifica */
        const Stack = createNativeStackNavigator();
        return(
                <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Homescreen} />
                <Stack.Screen name="Aggiunta o Modifica Libro" component={AddEdit} />
                <Stack.Screen name="Dettaglio" component={BookDetails} />
                </Stack.Navigator>

        );

}