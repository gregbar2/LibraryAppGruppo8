import React, { useState, useCallback} from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { caricaLibri } from './fileStorage'; // la tua funzione di caricamento
import styleAllBooks from './styles/styleAllBooks'; // tuo stile personalizzato


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

const renderItem = ({ item }) => (
     <TouchableOpacity
       style={[styleAllBooks.bookItem, { flexDirection: 'row', alignItems: 'center' }]}
       onPress={() => navigation.navigate('Dettaglio', { book: item })}
     >
       <View style={{ flex: 1 }}>
         <Text style={styleAllBooks.bookTitle}>{item.title}</Text>
         <Text style={styleAllBooks.bookAuthor}>{item.author}</Text>
       </View>

       <Image
         source={item.img ? { uri: item.img } : require('../assets/default.jpg')}
         style={{ width: 60, height: 90, marginLeft: 10, borderRadius: 4 }}
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
          renderItem={renderItem}
        />
      </View>
    );


}