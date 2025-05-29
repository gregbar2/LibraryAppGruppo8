import React, {useState, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView,Alert,StyleSheet } from 'react-native';
import styleCategoryDetails from './styles/styleCategoryDetails.js';
import {caricaLibri} from './fileStorage.js';

export default function CategoryDetails({route,navigation}){
    const {selCat} = route.params; /* categoria selezionata in categories.js */

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
           style={[styleCategoryDetails.bookItem, { flexDirection: 'row', alignItems: 'center' }]}
           onPress={() => navigation.navigate("Dettaglio", { book: item })}
         >
           <View style={{ flex: 1 }}>
             <Text style={styleCategoryDetails.bookTitle}>{item.title}</Text>
             <Text style={styleCategoryDetails.bookAuthor}>{item.author}</Text>
           </View>

           <Image
             source={item.img ? { uri: item.img } : require('../assets/default.jpg')}
             style={{ width: 60, height: 90, marginLeft: 10, borderRadius: 4 }}
             resizeMode="cover"
           />
         </TouchableOpacity>
      );


        if (libri.length === 0) {/*se non c'è nessun libro per quella categoria mostra un avviso*/
          return (
            <View style={styleCategoryDetails.emptyContainer}>
              <Text style={styleCategoryDetails.emptyText}>Nessun libro presente.</Text>
            </View>
          );
        }

    return (
        <View style={styleCategoryDetails.container}>
            <FlatList
                      data={libri}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        numColumns={2}
                        columnWrapperStyle={styleCategoryDetails.row}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />
        </View>
    );
};