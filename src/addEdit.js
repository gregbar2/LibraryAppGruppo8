import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ImagePickerComponent from './imagePickerComponent.js';
import styleAddEditBook from './styles/styleAddEdit';
import { salvaLibri, caricaLibri } from './fileStorage';
import { Alert } from 'react-native';

export default function AddEdit({ navigation }) {
  // Stati per i campi del form
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Da leggere'); /* valore di default */
  const [type, setType] = useState('');
  const [img,setImg] = useState(null);
  /* Funzione chiamata al salvataggio */
const salvaLibro = async () => {
  try {
    /* Carica la lista libri già salvata (se presente) */
    const libriSalvati = await caricaLibri();

    /* Crea il nuovo libro con i dati dallo stato */
    const nuovoLibro = { title, author, description, status, type, id: Date.now().toString(),img};

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
      if(title != '' && author != '' && description != '' && type != '' && img != null){
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
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styleAddEditBook.label}>Autore</Text>
      <TextInput
        placeholder='Inserisci autore'
        style={styleAddEditBook.input}
        value={author}
        onChangeText={setAuthor}
      />

      <Text style={styleAddEditBook.label}>Trama</Text>
      <TextInput
        placeholder='Inserisci trama'
        style={styleAddEditBook.input}
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styleAddEditBook.label}>Copertina</Text>
      <ImagePickerComponent onImagePicked={(uri) => setImg(uri)} /> 
{/* noi creiamo il componente imagePicker in addEdit e associamo questa funzione anonima che viene eseguita ogni volta da imagePickerComponent all'interno dell' IF che salva lo stato */}
      <Text style={styleAddEditBook.label}>Stato</Text>
      <Picker
        style={styleAddEditBook.picker}
        selectedValue={status}
        onValueChange={(itemValue) => setStatus(itemValue)}
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
            value={type}
            onChangeText={setType}
      />

      <TouchableOpacity style={styleAddEditBook.saveButton} onPress={() => {if(controlloInserimenti()){salvaLibro();}}}>
        <Text style={styleAddEditBook.saveButtonText}>Salva</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
