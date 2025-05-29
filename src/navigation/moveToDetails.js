import AddBook from '../addBook.js';
import Homescreen from '../homescreen.js';
import BookDetails from '../bookDetails.js';
import EditBook from '../editBook.js';
import BookList from '../allBooks.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MoveToDetails(){ 
/* STACK NAVIGATOR serve per far si che quando clicco su un libro mi porta alla schermata di aggiunta o modifica */
        const Stack = createNativeStackNavigator();
        return(
                <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Homescreen} />
                <Stack.Screen name="Modifica Libro" component={EditBook} />
                <Stack.Screen name="Aggiungi Libro" component={AddBook} />
                <Stack.Screen name="La mia libreria" component={BookList} />
                <Stack.Screen name="Dettaglio" component={BookDetails} />
                </Stack.Navigator>

        );

}