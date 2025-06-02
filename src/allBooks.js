import { useState, useCallback} from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { caricaLibri } from './fileStorage'; 
import styleAllBooks from './styles/styleAllBooks';


export default function BookList({ navigation }) {

 const [libri, setLibri] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        const data = await caricaLibri();
        setLibri(data);
      };
      loadData();
    }, [])
  );

 const bookComponent = ({ item }) => (

     <TouchableOpacity
       style={styleAllBooks.bookItem}
       onPress={() => navigation.navigate("Dettaglio", { book: item })}
     >
       <View style={{ flex: 1 }}>
         <Text style={styleAllBooks.bookTitle} numberOfLines={1}>{item.title}</Text>
         <Text style={styleAllBooks.bookAuthor} numberOfLines={1}>{item.author}</Text>
       </View>

       <Image
         source={item.img ? { uri: item.img } : require('../assets/default.jpg')}
         style={styleAllBooks.img}
         resizeMode="cover"
       />
     </TouchableOpacity>
  );


    if (libri.length === 0) {
      return (
        <View style={styleAllBooks.emptyContainer}>
          <Text style={styleAllBooks.emptyText}>Nessun libro presente.</Text>
        </View>
      );
    }

    return (
      <View style={styleAllBooks.container}>
        <FlatList
          data={libri}
            keyExtractor={(item) => item.id.toString()}
            renderItem={bookComponent}
            numColumns={2}
            columnWrapperStyle={styleAllBooks.row}
            contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    );


}