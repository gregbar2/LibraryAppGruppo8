import { StyleSheet } from 'react-native';

import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const latestBooks = [
    { id: 1, title: 'Dune', author: 'Frank Herbert' },
    { id: 2, title: '1984', author: 'George Orwell'},
    { id: 3, title: 'Il nome della rosa', author: 'Umberto Eco' },
    { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari' },
    { id: 5, title: 'Il Gattopardo', author: 'Giuseppe Tomasi' },
  ];

  const randomSuggestions = [
    { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien'},
    { id: 7, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 8, title: 'Dracula', author: 'Bram Stoker'},
    { id: 9, title: 'Il piccolo principe', author: 'Antoine de Saint-Exupéry'},
  ];

  const renderBookItem = (book) => (
    <View key={book.id} style={styleHomepage.bookItem}>
      <Image source={book.cover} style={styleHomepage.bookImage} />
      <Text style={styleHomepage.bookTitle}>{book.title}</Text>
      <Text style={styleHomepage.bookAuthor}>{book.author}</Text>
    </View>
  );

  return (
    <ScrollView style={styleHomepage.container}>
      <Text style={styleHomepage.title}>Libreria Personale</Text>

      <Text style={styleHomepage.sectionTitle}>Ultimi libri aggiunti</Text>
      <View style={styleHomepage.bookList}>
        {latestBooks.map(renderBookItem)}
      </View>

      <Text style={styleHomepage.sectionTitle}>Suggerimenti casuali</Text>
      <View style={styleHomepage.bookList}>
        {randomSuggestions.map(renderBookItem)}
      </View>

      <TouchableOpacity style={styleHomepage.addButton}>
        <Text style={styleHomepage.addButtonText}>+ Aggiungi nuovo libro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};



const styleHomepage = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingHorizontal: 16,
      paddingTop: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginTop: 24,
      marginBottom: 12,
    },
    bookList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    bookItem: {
      width: '47%',
      marginBottom: 20,
    },
    bookImage: {
      width: '100%',
      height: 160,
      resizeMode: 'cover',
      borderRadius: 8,
    },
    bookTitle: {
      fontSize: 14,
      fontWeight: '600',
      marginTop: 6,
    },
    bookAuthor: {
      fontSize: 12,
      color: '#666666',
    },
    addButton: {
      backgroundColor: '#3366FF',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 20,
    },
    addButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  
export default HomeScreen;

