import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from './src/navigation/AppTabs.js';
import BookDetails from './src/bookDetails.js';
import EditBook from './src/editBook.js';
import CategoryDetails from './src/categoryDetails.js';
import AddBook from './src/addBook.js';
import BookList from './src/allBooks.js';
import Categories from './src/categories.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="Tabs" component={AppTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Dettaglio" component={BookDetails} />
            <Stack.Screen name="Modifica Libro" component={EditBook} />
            <Stack.Screen name="Dettaglio Categoria" component={CategoryDetails} />
            <Stack.Screen name="Aggiungi Libro" component={AddBook} />
            <Stack.Screen name="La mia libreria" component={BookList} />
            <Stack.Screen name="Categorie" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
