import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleHomeScreen from './styles/styleHomeScreen';
import { salvaLibri, caricaLibri } from './fileStorage'; //importo il modulo per la persistenza


export default function Homescreen({ navigation }) {
  const [libri, setLibri] = useState([]);

  useEffect(() => {//carico i libri al primo avvio
    const loadData = async () => {
        const data = await caricaLibri();
        setLibri(data);
      };
      loadData();
  }, []);

/*
  const aggiungiLibro = async () => {
    const nuovoLibro = {
      id: Date.now().toString(),
      titolo: '1984',
      autore: 'George Orwell',
      stato: 'In lettura',
      immagine: '1984.jpg'
    };
     const nuoviLibri = [...libri, nuovoLibro];
      setLibri(nuoviLibri);
      await salvaLibri(nuoviLibri);
   };*/

  return (
    <ScrollView contentContainerStyle={styleHomeScreen.container}>
      <Text style={styleHomeScreen.title}>Libreria Personale</Text>
      <Text style={styleHomeScreen.sectionTitle}>Ultimi libri aggiunti</Text>

      <View>
         {libri.map((item) => (
                  <BookComponent
                    key={item.id}
                    title={item.titolo}
                    author={item.autore}
                    status={item.stato}
                    imageSource={getImage(item.immagine)}
                  />
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
                  imageSource={item.imageSource}
                />
              ))}
       </ScrollView>




      <TouchableOpacity onPress={()=>navigation.navigate('Aggiungi Modifica Libro')} style={styleHomeScreen.addButton}>
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

const getImage = (nome) => {
  switch (nome) {
    case '1984.jpg': return require('../assets/1984.jpg');
    case 'OrgoglioPregiudizio.jpg': return require('../assets/OrgoglioPregiudizio.jpg');
    case 'prince.jpg': return require('../assets/prince.jpg');
    default: return require('../assets/prince.jpg');
  }
};

const BookComponent = ({ title, author, imageSource, status }) => {
  return (
    <View style={styleHomeScreen.bookItem}>
      <Image source={imageSource} style={styleHomeScreen.bookImage} />
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
      <Image source={imageSource} style={styleHomeScreen.suggestionImage} />
      <Text style={styleHomeScreen.suggestionTitle} numberOfLines={1}>{title}</Text>
      <Text style={styleHomeScreen.suggestionAuthor} numberOfLines={1}>{author}</Text>
    </View>
  );
};
