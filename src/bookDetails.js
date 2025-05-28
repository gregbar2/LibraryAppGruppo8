  import { View, Text,TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native';
  import React, { useState, useEffect } from 'react';
  import styleBookDetail from './styles/styleBookDetails';
<<<<<<< HEAD
  import { salvaLibri, caricaLibri } from './fileStorage';
=======
import { salvaLibri, caricaLibri } from './fileStorage'; //importo il modulo per la persistenza
>>>>>>> 267348f4595d60f1ced5ac026844301ed52e2a9d

  export default function BookDetails({route, navigation}) {

      const { book } = route.params;


      if (!book) {
        return (
          <View>
            <Text>Errore: nessun libro fornito</Text>
          </View>
        );
      }

      const [notes, setNotes] = useState(book.notes);
      const [libri, setLibri] = useState([]);

        useEffect(() => {
          async function loadLibri() {
            const data = await caricaLibri();
            setLibri(data);
          }
          loadLibri();
        }, []);

        // Salva le modifiche ogni volta che cambia la nota
        useEffect(() => {
          

          const saveData = async () => {
            try {
              // Carica la lista aggiornata da file per sicurezza
              const libriCorrenti = await caricaLibri();

              // Aggiorna solo il libro con lo stesso id
              const updatedLibri = [];

              for (let i = 0; i < libriCorrenti.length; i++) {
                const l = libriCorrenti[i];
                if (l.id.toString() === book.id.toString()) {
                  l.notes=notes;
                  updatedLibri.push(l);
                } else {
                  updatedLibri.push(l);
                }
              }

              // Salva la lista aggiornata intera
              await salvaLibri(updatedLibri);

              // Aggiorna lo stato locale
              setLibri(updatedLibri);


            } catch (e) {
              Alert.alert('Errore nel salvataggio', e.message);
            }
          };

          saveData();
        }, [notes]);






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
                      <Text style={styleBookDetail.title}>{book.title}</Text>
                      {/*Stile del titolo*/}
                      <Text style={styleBookDetail.author}>{book.author}</Text>
                      {/*Stile del nome dell'autore*/}
                      <Image source={getImage(book.image)} style={styleBookDetail.coverImage} />
                      {/*Stile della copertina del libro*/}

                      <Text style={styleBookDetail.sectionTitle}>Trama</Text>
                      <Text style={styleBookDetail.description}>{book.description || 'Nessuna trama disponibile'}</Text> 
                      {/*Stile della trama*/}
          
                      <Text style={styleBookDetail.sectionTitle}>Stato</Text>
                      <Text style={styleBookDetail.status}>{book.status || 'Nessuno stato disponibile'}</Text>
                      {/*Stile dello stato*/}
                        
                        
                      <Text style={styleBookDetail.sectionTitle}>Valutazione</Text>
                      <Text style={{ fontSize: 18, marginBottom: 24 , color:'gold' }}>{book.rating ? '★'.repeat(book.rating) : 'Nessuna valutazione'}</Text>


                      <Text style={styleBookDetail.sectionTitle}>Note</Text>
                      <Text style={styleBookDetail.noteBox}>{notes}</Text>
                      {/*Stile delle note*/}
                      <TextInput
                        multiline
                        style={{ height: 100, borderColor: 'gray', borderWidth: 1, padding: 8 }}
                        value={notes}
                        onChangeText={setNotes}
                        placeholder="Scrivi una nota..."
                      />
                      
                      
                    {/*Bottone + Stile del bottone*/}
                      <TouchableOpacity style={styleBookDetail.addButton} >
                          <Text style={styleBookDetail.addButtonText}>+ Aggiungilo ai preferiti</Text>
                      </TouchableOpacity>
                    

              </View>
    
      );
  }


