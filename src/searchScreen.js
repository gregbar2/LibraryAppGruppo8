import React, { useState, useCallback } from 'react';
import {StyleSheet,View,Image,Text,TextInput,TouchableOpacity,FlatList} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { caricaLibri } from './fileStorage';

export default function SearchScreen({navigation}) {
  const [books, setBooks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [stato, setStato] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valutazione, setValutazione] = useState('');


  const categoriePredefinite = ["Romanzo", "Fantasy", "Comico", "Dramma", "Poetico"];


  // Carica i libri ogni volta che si torna su questa schermata
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
      style={[styles.button, selected === value && styles.selectedButton]}
      onPress={() => setSelected(selected === value ? '' : value)}>
      <Text style={[styles.buttonText, selected === value && styles.selectedButtonText]}>
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
    <View style={styleSearchScreen.container}>
      <Text style={styleSearchScreen.title}>Ricerca</Text>

      <TextInput
        style={styleSearchScreen.searchInput}
        placeholder="Cerca per titolo o autore..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Stato */}
      <Text style={styleSearchScreen.title}>Filtro per Stato</Text>
      <View style={styles.row}>
        {Bottone("Letto", "Letto", stato, setStato)}
        {Bottone("In Lettura", "In lettura", stato, setStato)}
        {Bottone("Da Leggere", "Da leggere", stato, setStato)}
      </View>

      {/* Genere */}
      <Text style={styleSearchScreen.title}>Filtro per Genere</Text>
      <View style={styles.row}>
        {Bottone("Romanzo", "Romanzo", categoria, setCategoria)}
        {Bottone("Fantasy", "Fantasy", categoria, setCategoria)}
        {Bottone("Comico", "Comico", categoria, setCategoria)}
        {Bottone("Dramma", "Dramma", categoria, setCategoria)}
        {Bottone("Poetico", "Poetico", categoria, setCategoria)}
        {Bottone("Altro", "Altro", categoria, setCategoria)}
      </View>

      {/* Valutazione */}
      <Text style={styleSearchScreen.title}>Filtro per Valutazione</Text>
      <View style={styles.row}>
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
              style={styleSearchScreen.bookCover}
            />
            <View>
              <Text style={styleSearchScreen.bookTitle}>{item.title}</Text>
              <Text style={styleSearchScreen.bookAuthor}>{item.author}</Text>
              <Text style={styleSearchScreen.bookGenre}>{item.genere || item.genre}</Text>
            </View>
          </TouchableOpacity> 
        )}
      />
    </View>
  );
}

const styleSearchScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  bookCover: {
    width: 50,
    height: 75,
    resizeMode: 'cover',
    borderRadius: 4,
    marginRight: 12,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#555',
  },
  bookGenre: {
    fontSize: 12,
    color: '#888',
  },
});

// Stili dei bottoni
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#333',
  },
  selectedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
