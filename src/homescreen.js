import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleHomeScreen from './styles/styleHomeScreen';
import { salvaLibri, caricaLibri,eliminaLibri } from './fileStorage'; //importo il modulo per la persistenza
import { useFocusEffect } from '@react-navigation/native';


export default function Homescreen({ navigation }) {


    const [libri, setLibri] = useState([]);

   /*la funzione sort mescola casualmente l'insieme di libri, poi di questi elementi prende solo i primi n(5)*/
    const getRandomBooks = (array, n) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);//ritorna solo i primi n elementi della lista mescolata
      };

  // Estraggo i libri suggeriti casualmente, massimo 5
  const suggestedBooksRandom = getRandomBooks(libri, 5);


   useFocusEffect(/* viene eseguita ogni volta che spostiamo il focus su questa pagina */
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


    {/*libri.slice serve a far visualizzare solo gli utlimi 5 libri aggiunti.*/}
    {/*faccio reverse() perchè così riesco a visualizzare i libri dal piu recente al meno recente*/}
      <View>
         {libri.slice(-5).reverse().map((item) => (
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

       {/*visualizzo il vettore di libri generati casualmente*/}
       {suggestedBooksRandom.map((item) => (
                <BookSuggestion
                  key={item.id}
                  title={item.title}
                  author={item.author}
                  imageSource={item.img}
                />
              ))}
       </ScrollView>




      <TouchableOpacity onPress={()=>navigation.navigate("Aggiungi Libro")} style={styleHomeScreen.addButton}>
        <Text style={styleHomeScreen.addButtonText} >+ Aggiungi nuovo libro</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={eliminaLibri} style={{ padding: 10, backgroundColor: 'red', margin: 10 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Svuota tutti i libri</Text>
       </TouchableOpacity>


    </ScrollView>
  );
}




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
