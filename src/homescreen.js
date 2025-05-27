import React, { useEffect, useState } from 'react';
import styleHomeScreen from './styles/styleHomeScreen';

export default function Homescreen({navigation}) {

  const [libri, setLibri] = useState([]);
  useEffect(() => {


    return (
        <View style={styleHomeScreen.container}>
        <Text style={styleHomeScreen.title}>Libreria Personale</Text>
        <Text style={styleHomeScreen.sectionTitle}>Ultimi libri aggiunti</Text>
          <View>
            {libri.slice(0, 1).map(libro => (
                     <BookComponent
                       key={libro.id}
                       title={libro.titolo}
                       author={libro.autore}
                       status={libro.stato}
                       imageSource={getImage(libro.immagine)}
                     />
                   ))}
          </View>
        <Text style={styleHomeScreen.sectionTitle}>Suggerimenti casuali</Text>

          <FlatList //flat list per contenere orizzontalmente i libri suggeriti
            data={suggestedBooks}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <BookSuggestion
                title={item.title}
                author={item.author}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styleHomeScreen.suggestionList}
          />

        <TouchableOpacity style={styleHomeScreen.addButton} >
          <Text style={styleHomeScreen.addButtonText}>+ Aggiungi nuovo libro</Text>
        </TouchableOpacity>
      </View>
      );
}


const suggestedBooks = [//vettore da passare alla flat list dei libri suggeriti
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
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      imageSource: require('../assets/1984.jpg'),
    },
    {
        id: '4',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        imageSource: require('../assets/prince.jpg'),
      },
  // altri...
];
type BookComponentProps = {
  title: string;
  author: string;
  imageSource: ImageSourcePropType;
  status: 'Letto' | 'In lettura' | 'Da leggere';

//componente che rappresenta il singolo libro nella pagina
const BookComponent = ({ title, author, imageSource, status }: BookComponentProps) => {
  return (//le props sono il titolo,l'autore,il path dell'immagine di copertina del libro e lo stato (letto/ non letto)
    <View style={styleHomeScreen.bookItem}>
      <Image source={imageSource} style={styleHomeScreen.bookImage} />
      <View style={styleHomeScreen.bookTextContainer}>
        <Text style={styleHomeScreen.bookTitle}>{title}</Text>
        <Text style={styleHomeScreen.bookAuthor}>{author}</Text>
      </View>
      <Text style={styleHomeScreen.bookStatus}>{status}</Text>
    </View>);//tutte le props fanno riferimento allo stile definito nel componente styleHomeScreen
};

const BookSuggestion = ({ title, author, imageSource }) => {//componente che rappresenta i libri suggeriti casualmente
  return (
    <View style={styleHomeScreen.suggestionItem}>
      <Image source={imageSource} style={styleHomeScreen.suggestionImage} />
      <Text style={styleHomeScreen.suggestionTitle} numberOfLines={1}>{title}</Text>
      <Text style={styleHomeScreen.suggestionAuthor} numberOfLines={1}>{author}</Text>
    </View>
  );
};
