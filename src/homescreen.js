import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleHomeScreen from './styles/styleHomeScreen';
import { salvaLibri, caricaLibri,eliminaLibri } from './fileStorage'; //importo il modulo per la persistenza
import { useFocusEffect } from '@react-navigation/native';


export default function Homescreen({ navigation }) {
  const [libri, setLibri] = useState([]);
  

   useFocusEffect(/* viene eseguita quando torni dalla pagina AddEdit */
     useCallback(() => {
       const loadData = async () => {
         const data = await caricaLibri();
         setLibri(data);
       };
       loadData();
     }, [])
   );

  return (
    <ScrollView contentContainerStyle={styleHomeScreen.container}>
      <Text style={styleHomeScreen.title}>Libreria Personale</Text>
      <Text style={styleHomeScreen.sectionTitle}>Ultimi libri aggiunti</Text>


    {/*libri.slice serve a far visualizzare solo gli utlimi 5 libri aggiunti*/}
      <View>
         {libri.slice(0, 5).map((item) => (
             <TouchableOpacity key={item.id} onPress={()=>navigation.navigate("Dettaglio", { book: item })}>

                      <BookComponent
                        title={item.title}
                        author={item.author}
                        status={item.status}
                        imageSource={item.img}
                      />

              </TouchableOpacity>
          ))}
      </View>

      <Text style={styleHomeScreen.sectionTitle}>Suggerimenti casuali</Text>

       <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styleHomeScreen.suggestionList}
       >


       {suggestedBooks.map((item) => (
                <BookSuggestion
                  key={item.id}
                  title={item.title}
                  author={item.author}
                  imageSource={item.img}
                />
              ))}
       </ScrollView>




      <TouchableOpacity onPress={()=>navigation.navigate("Aggiunta o Modifica Libro")} style={styleHomeScreen.addButton}>
        <Text style={styleHomeScreen.addButtonText} >+ Aggiungi nuovo libro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}





const suggestedBooks = [
  {
    id: '1',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    imageSource: require('../assets/1984.jpg'),
  },
  {
    id: '2',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    imageSource: require('../assets/OrgoglioPregiudizio.jpg'),
  },
  {
    id: '3',
    title: 'Another Book',
    author: 'Jane Austen',
    imageSource: require('../assets/1984.jpg'),
  },
  {
    id: '4',
    title: 'Prince',
    author: 'Jane Austen',
    imageSource: require('../assets/prince.jpg'),
  }
];


const BookComponent = ({ title, author, imageSource, status }) => {
  return (
    <View style={styleHomeScreen.bookItem}>
      <Image source={imageSource 
      ? { uri: imageSource } 
      : require('../assets/default.jpg')} style={styleHomeScreen.bookImage} />
      <View style={styleHomeScreen.bookTextContainer}>
        <Text style={styleHomeScreen.bookTitle}>{title}</Text>
        <Text style={styleHomeScreen.bookAuthor}>{author}</Text>
      </View>
      <Text style={styleHomeScreen.bookStatus}>{status}</Text>
    </View>
  );
};

const BookSuggestion = ({ title, author, imageSource }) => {
  return (
    <View style={styleHomeScreen.suggestionItem}>
      <Image source={imageSource 
      ? { uri: imageSource } 
      : require('../assets/default.jpg') } style={styleHomeScreen.suggestionImage} />
      <Text style={styleHomeScreen.suggestionTitle} numberOfLines={1}>{title}</Text>
      <Text style={styleHomeScreen.suggestionAuthor} numberOfLines={1}>{author}</Text>
    </View>
  );
};
