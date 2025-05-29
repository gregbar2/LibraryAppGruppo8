import { useState, useCallback } from 'react';
import {View,Image,Text,TextInput,TouchableOpacity,FlatList} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { caricaLibri } from './fileStorage.js';
import StyleSearchScreen from './styles/styleSearchscreen.js'; 

export default function SearchScreen({navigation}) {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [stato, setStato] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valutazione, setValutazione] = useState('');
  const categoriePredefinite = ["Romanzo", "Fantasy", "Comico", "Dramma", "Poetico"];


  useFocusEffect(
    useCallback(() => {
      const loadBooks = async () => {
        const loadedBooks = await caricaLibri();
        setBooks(loadedBooks);
      };
      loadBooks();
    }, [])
  );

  // Bottone per filtro
  const Bottone = (label, value, selected, setSelected) => (
    <TouchableOpacity
      style={[StyleSearchScreen.button, selected === value && StyleSearchScreen.selectedButton]}
      onPress={() => setSelected(selected === value ? '' : value)}>
      <Text style={[StyleSearchScreen.buttonText, selected === value && StyleSearchScreen.selectedButtonText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

 
  const filteredBooks = books.filter(book => {
  const titolo = book.title || '';
  const autore = book.author || '';
  const tipo = book.type || '';
  const statoLibro = book.status || '';
  const rating = book.rating ? String(book.rating) : '';

  return (
    (titolo.toLowerCase().includes(searchText.toLowerCase()) ||
      autore.toLowerCase().includes(searchText.toLowerCase())) &&
    (stato === '' || statoLibro.toLowerCase() === stato.toLowerCase()) &&
    (categoria === '' || ( categoria === 'Altro' ? !categoriePredefinite.includes(tipo): tipo === categoria)) &&
    (valutazione === '' || rating === valutazione)
  );
});


  return (
    <View style={StyleSearchScreen.container}>

      <TextInput
        style={StyleSearchScreen.searchInput}
        placeholder="Cerca per titolo o autore..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Stato */}
      <Text style={StyleSearchScreen.title}>Filtro per Stato</Text>
      <View style={StyleSearchScreen.row}>
        {Bottone("Letto", "Letto", stato, setStato)}
        {Bottone("In Lettura", "In lettura", stato, setStato)}
        {Bottone("Da Leggere", "Da leggere", stato, setStato)}
      </View>

      {/* Genere */}
      <Text style={StyleSearchScreen.title}>Filtro per Genere</Text>
      <View style={StyleSearchScreen.row}>
        {Bottone("Romanzo", "Romanzo", categoria, setCategoria)}
        {Bottone("Fantasy", "Fantasy", categoria, setCategoria)}
        {Bottone("Comico", "Comico", categoria, setCategoria)}
        {Bottone("Dramma", "Dramma", categoria, setCategoria)}
        {Bottone("Poetico", "Poetico", categoria, setCategoria)}
        {Bottone("Altro", "Altro", categoria, setCategoria)}
      </View>

      {/* Valutazione */}
      <Text style={StyleSearchScreen.title}>Filtro per Valutazione</Text>
      <View style={StyleSearchScreen.row}>
        {Bottone("★", "1", valutazione, setValutazione)}
        {Bottone("★★", "2", valutazione, setValutazione)}
        {Bottone("★★★", "3", valutazione, setValutazione)}
        {Bottone("★★★★", "4", valutazione, setValutazione)}
        {Bottone("★★★★★", "5", valutazione, setValutazione)}
      </View>

      {/* Lista Libri */}
      <FlatList
        data={filteredBooks}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
        <TouchableOpacity key={item.id} onPress={()=>navigation.navigate("Dettaglio", { book: item })}>
            <Image
              source={item.img ? { uri: item.img } : require('../assets/default.jpg')}
              style={StyleSearchScreen.bookCover}
            />
            <View>
              <Text style={StyleSearchScreen.bookTitle}>{item.title}</Text>
              <Text style={StyleSearchScreen.bookAuthor}>{item.author}</Text>
              <Text style={StyleSearchScreen.bookGenre}>{item.genere}</Text>
            </View>
          </TouchableOpacity> 
        )}
      />
    </View>
  );
}


