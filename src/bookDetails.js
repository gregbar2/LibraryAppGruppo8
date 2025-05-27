  import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

  import React, { useState } from 'react';


  export default function BookDetails({route}) {
      const { book } = route.params;
      return (
      
              <View style={styleBookDetail.container}>
                      <Text style={styleBookDetail.title}>{book.title}</Text> {/*Stile del titolo*/}
                      <Text style={styleBookDetail.author}>{book.author}</Text> {/*Stile del nome dell'autore*/}
                      <Image source={{ uri: book.coverImage }} style={styleBookDetail.coverImage} /> {/*Stile della copertina del libro*/}

                      <Text style={styleBookDetail.sectionTitle}>Trama</Text>
                      <Text style={styleBookDetail.description}>{book.description}</Text> {/*Stile della trama*/}
          
                      <Text style={styleBookDetail.sectionTitle}>Stato</Text>
                      <Text style={styleBookDetail.status}>{book.state || 'Nessuno stato disponibile'}</Text> {/*Stile dello stato*/}
                        
                        
                      <Text style={styleBookDetail.sectionTitle}>Valutazione</Text>
                      <Text style={{ fontSize: 18, marginBottom: 24 , color:'gold' }}>{book.rating ? '★'.repeat(book.rating) : 'Nessuna valutazione'}</Text>

                    
                      <Text style={styleBookDetail.sectionTitle}>Note</Text>
                      <Text style={styleBookDetail.noteBox}>{book.notes || 'Nessuna nota disponibile'}</Text>{/*Stile delle note*/}
                      
                      
                    {/*Bottone + Stile del bottone*/}
                      <TouchableOpacity style={styleBookDetail.addButton} >
                          <Text style={styleBookDetail.addButtonText}>+ Aggiungilo ai preferiti</Text>
                      </TouchableOpacity>
                    

              </View>
    
      );
  }


  const styleBookDetail = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 4,
      textAlign: 'center',
    },
    author: {
      fontSize: 16,
      color: '#666666',
      textAlign: 'center',
      marginBottom: 16,
    },
    coverImage: {
      width: 160,
      height: 240,
      alignSelf: 'center',
      resizeMode: 'cover',
      borderRadius: 8,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 6,
    },
    description: {
      fontSize: 14,
      color: '#333333',
      marginBottom: 20,
    },
    status: {
      fontSize: 16,
      marginBottom: 12,
      color: '#444',
    },
    starsContainer: {
      flexDirection: 'row',
      marginBottom: 24,
    },
    noteBox: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding:12,
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