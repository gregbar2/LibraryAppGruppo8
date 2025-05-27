  import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

  import React, { useState } from 'react';
  import styleBookDetail from './styles/styleBookDetails';

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


