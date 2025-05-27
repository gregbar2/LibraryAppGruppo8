import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ImagePickerComponent from './imagePickerComponent.js';
import styleAddEditBook from './styles/styleAddEdit';
import { salvaLibri, caricaLibri } from './fileStorage';
import { Alert } from 'react-native';

export default function AddEdit({ navigation }) {
  // Stati per i campi del form
  const [titolo, setTitolo] = useState('');
  const [autore, setAutore] = useState('');
  const [trama, setTrama] = useState('');
  const [stato, setStato] = useState('Da leggere'); /* valore di default */
  const [genere, setGenere] = useState('');
  const [img,setImg] = useState(null);
  /* Funzione chiamata al salvataggio */
const salvaLibro = async () => {
  try {
    /* Carica la lista libri già salvata (se presente) */
    const libriSalvati = await caricaLibri();

    /* Crea il nuovo libro con i dati dallo stato */
    const nuovoLibro = { titolo, autore, trama, stato, genere, id: Date.now().toString() };

    /* Aggiungi il nuovo libro alla lista esistente*/
    const nuoviLibri = [...libriSalvati, nuovoLibro];

    /* Salva la lista aggiornata su file*/
    await salvaLibri(nuoviLibri);

    console.log('Libro salvato con successo:', nuovoLibro);

    /* Eventualmente, puoi navigare indietro o resettare il form qui*/
     navigation.goBack();
  } catch (error) {
    console.error('Errore nel salvataggio del libro:', error);
  }

};
  const controlloInserimenti = () => {
      if(titolo != '' && autore != '' && trama != '' && genere != '' && img != null){
        console.log(img);
        return true;
      }else{
        Alert.alert('ATTENZIONE!!', 'Popolare tutti i campi');
        return false;
      }
      
  };

  return (
    <ScrollView style={styleAddEditBook.container}>

      <Text style={styleAddEditBook.firstLabel}>Titolo</Text>
      <TextInput
        placeholder='Inserisci titolo'
        style={styleAddEditBook.input}
        value={titolo}
        onChangeText={setTitolo}
      />

      <Text style={styleAddEditBook.label}>Autore</Text>
      <TextInput
        placeholder='Inserisci autore'
        style={styleAddEditBook.input}
        value={autore}
        onChangeText={setAutore}
      />

      <Text style={styleAddEditBook.label}>Trama</Text>
      <TextInput
        placeholder='Inserisci trama'
        style={styleAddEditBook.input}
        value={trama}
        onChangeText={setTrama}
      />

      <Text style={styleAddEditBook.label}>Copertina</Text>
      <ImagePickerComponent onImagePicked={(uri) => setImg(uri)} /> 
{/* noi creiamo il componente imagePicker in addEdit e associamo questa funzione anonima che viene eseguita ogni volta da imagePickerComponent all'interno dell' IF che salva lo stato */}
      <Text style={styleAddEditBook.label}>Stato</Text>
      <Picker
        style={styleAddEditBook.picker}
        selectedValue={stato}
        onValueChange={(itemValue) => setStato(itemValue)}
      >
        <Picker.Item label='Da leggere' value='Da leggere' />
        <Picker.Item label='Letto' value='Letto' />
        <Picker.Item label='In lettura' value='In lettura' />
        <Picker.Item label='---' value='' />
      </Picker>

      <Text style={styleAddEditBook.label}>Genere</Text>
      <TextInput
            placeholder='Inserisci genere'
            style={styleAddEditBook.input}
            value={genere}
            onChangeText={setGenere}
      />

      <TouchableOpacity style={styleAddEditBook.saveButton} onPress={() => {if(controlloInserimenti()){salvaLibro();}}}>
        <Text style={styleAddEditBook.saveButtonText}>Salva</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
