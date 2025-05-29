  import { ScrollView, Text,TextInput, Image, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
  import { useState, useEffect } from 'react';
  import styleBookDetail from './styles/styleBookDetails';
  import { salvaLibri, caricaLibri } from './fileStorage'; //importo il modulo per la persistenza


  export default function BookDetails({route, navigation}) {

      const { book } = route.params;
      const [notes, setNotes] = useState(book.notes);
      const [rating, setRating] = useState(book.rating);
      const [libri, setLibri] = useState([]);

      const aggiungiPreferiti = async (fav) =>{
        try {
          
          
          const libriAggiornati = libri.filter(libroSalvato => libroSalvato.id !== book.id); 
          
          const nuovoLibro = {title: book.title,author: book.author,description: book.description,status: book.status,type: book.type, id: book.id,img: book.img,notes,rating,favourite: fav};
          
          libriAggiornati.push(nuovoLibro);
          
          await salvaLibri(libriAggiornati);
  
          navigation.popToTop();
        } catch (error) {
          console.error('Errore nel salvataggio del libro:', error);
        }
      };



      

        useEffect(() => {
          async function loadLibri() {
            const data = await caricaLibri();
            setLibri(data);
          }
          loadLibri();
        }, []);

        useEffect(() => {

          const saveData = async () => {
            try {
              const libriCorrenti = await caricaLibri();

              const updatedLibri = [];

              for (let i = 0; i < libriCorrenti.length; i++) {
                const l = libriCorrenti[i];
                if (l.id.toString() === book.id.toString()) {
                  l.notes=notes;
                  l.rating=rating;
                  updatedLibri.push(l);
                } else {
                  updatedLibri.push(l);
                }
              }

              await salvaLibri(updatedLibri);

              setLibri(updatedLibri);


            } catch (e) {
              Alert.alert('Errore nel salvataggio', e.message);
            }
          };

          saveData();
        }, [notes, rating]);

        const eliminaLibro = async (idDaEliminare) => {

        const libriAggiornati = libri.filter(libro => libro.id !== idDaEliminare); 

          await salvaLibri(libriAggiornati); 
          navigation.goBack(); 
        };





      return (
      
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={styleBookDetail.container}>
                      <Text style={styleBookDetail.title}>{book.title}</Text>
                      <Text style={styleBookDetail.author}>{book.author}</Text>
                      <Image source={book.img 
                        ? { uri: book.img  } 
                        : require('../assets/default.jpg') } style={styleBookDetail.coverImage} />

                      <Text style={styleBookDetail.sectionTitle}>Trama</Text>
                      <Text style={styleBookDetail.description}>{book.description}</Text> 
                
          
                      <Text style={styleBookDetail.sectionTitle}>Stato</Text>
                      <Text style={styleBookDetail.status}>{book.status}</Text>
               
                        
                        
                      <Text style={styleBookDetail.sectionTitle}>Valutazione</Text>
                      <Text style={styleBookDetail.ratingStar}>{rating ? '★'.repeat(rating) : 'Nessuna valutazione'}</Text>
                       <TextInput
                             style={styleBookDetail.ratingInput}
                             value={rating}
                             keyboardType="numeric"
                             onChangeText={text => {
                                const num = parseInt(text);
                                if (!isNaN(num) && num >= 0 && num <= 5) {
                                  setRating(num);
                                }else  if (text === '') {
                                  setRating('');
                                }else {
                                  Alert.alert('Valore non valido', 'Inserisci un numero compreso tra 1 e 5');
                                  setRating('');  
                                        
                                }
                              }}
                            placeholder="Scrivi un numero tra 1 e 5..."
                       />

                      <Text style={styleBookDetail.sectionTitle}>Note</Text>
                      
                      <TextInput
                        value={notes}
                        onChangeText={setNotes}
                        placeholder="Scrivi una nota..."
                      />
                      
                      
                    
                      <TouchableOpacity style={styleBookDetail.addButton} onPress={() => aggiungiPreferiti(book.favourite === 'false' ? 'true' : 'false')}>
                          <Text style={styleBookDetail.addButtonText}>{book.favourite === 'false' ? "+ Aggiungi ai preferiti" : "- Rimuovi dai preferiti"}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styleBookDetail.topRightButton} onPress={() => eliminaLibro(book.id)}>
                        <Image source={require('../assets/trash.png')} style={styleBookDetail.icondx} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styleBookDetail.topLeftButton} onPress={()=>navigation.navigate("Modifica Libro", { libro: book })}>
                      <Image source={require('../assets/pencil.png')} style={styleBookDetail.iconsx} />
                      </TouchableOpacity>
                </ScrollView>
              </TouchableWithoutFeedback>
    
      );
  }


