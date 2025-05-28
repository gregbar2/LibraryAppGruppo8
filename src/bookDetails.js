  import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

  import React, { useState } from 'react';
  import styleBookDetail from './styles/styleBookDetails';

  export default function BookDetails({route, navigation}) {

      const { book } = route.params || {};
      if (!book) {
        return (
          <View>
            <Text>Errore: nessun libro fornito</Text>
          </View>
        );
      }
      console.log('route.params:', route.params);
      console.log('book:', route.params?.book);

    const getImage = (nome) => {
      switch (nome) {
        case '1984.jpg': return require('../assets/1984.jpg');
        case 'OrgoglioPregiudizio.jpg': return require('../assets/OrgoglioPregiudizio.jpg');
        case 'prince.jpg': return require('../assets/prince.jpg');
        default: return require('../assets/prince.jpg');
      }
    };

      return (
      
              <View style={styleBookDetail.container}>
                      <Text style={styleBookDetail.title}>{book.titolo}</Text> {/*Stile del titolo*/}
                      <Text style={styleBookDetail.author}>{book.autore}</Text> {/*Stile del nome dell'autore*/}
                      <Image source={getImage(book.immagine)} style={styleBookDetail.coverImage} /> {/*Stile della copertina del libro*/}

                      <Text style={styleBookDetail.sectionTitle}>Trama</Text>
                      <Text style={styleBookDetail.description}>{book.description || 'Nessuna trama disponibile'}</Text> {/*Stile della trama*/}
          
                      <Text style={styleBookDetail.sectionTitle}>Stato</Text>
                      <Text style={styleBookDetail.status}>{book.stato || 'Nessuno stato disponibile'}</Text> {/*Stile dello stato*/}
                        
                        
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


