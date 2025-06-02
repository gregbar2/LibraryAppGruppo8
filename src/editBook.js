import React, { useState } from 'react';
import {  Text, TouchableOpacity, TextInput, Image, ScrollView,Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ImagePickerComponent from './imagePickerComponent.js';
import styleAddEditBook from './styles/styleAddEdit';
import { salvaLibri, caricaLibri } from './fileStorage';

export default function EditBook({route, navigation}){
    const { libro } = route.params;
    const [title, setTitle] = useState(libro.title);
    const [author, setAuthor] = useState(libro.author);
    const [description, setDescription] = useState(libro.description);
    const [status, setStatus] = useState(libro.status); 
    const [type, setType] = useState(libro.type);
    const [img,setImg] = useState(libro.img);
    const notes = libro.notes;
    const rating = libro.rating;
    const favourite = libro.favourite;
    const idLibro = libro.id;

    const modificaLibro = async() => {
      try {
        const libriSalvati = await caricaLibri();
        
        const libriAggiornati = libriSalvati.filter(libroSalvato => libroSalvato.id !== libro.id); 
        
        const nuovoLibro = { title, author, description, status, type, id: libro.id,img,notes,rating,favourite};
    
        libriAggiornati.push(nuovoLibro);
        await salvaLibri(libriAggiornati);

        navigation.popToTop();
      } catch (error) {
        console.error('Errore nel salvataggio del libro:', error);
      }
    };

    const controlloInserimenti = () => {
      if(title.trim() != '' && author.trim() != '' && description.trim() != '' && type.trim() != ''){
        
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
          <ImagePickerComponent onImagePicked={(uri) => setImg(uri)} img={libro.img } /> 
          <Text style={styleAddEditBook.label}>Stato</Text>
          <Picker
            style={styleAddEditBook.picker}
            selectedValue={status}
            onValueChange={(itemValue) => setStatus(itemValue)}
          >
            <Picker.Item label='Da leggere' value='Da leggere' />
            <Picker.Item label='Letto' value='Letto' />
            <Picker.Item label='In lettura' value='In lettura' />
            
          </Picker>
    
          <Text style={styleAddEditBook.label}>Genere</Text>
          <TextInput
                placeholder='Inserisci genere'
                style={styleAddEditBook.input}
                value={type}
                onChangeText={setType}
          />
    
          <TouchableOpacity style={styleAddEditBook.saveButton} onPress={() => {if(controlloInserimenti()){modificaLibro();}}}>
            <Text style={styleAddEditBook.saveButtonText}>Salva</Text>
          </TouchableOpacity>
    
        </ScrollView>
      );
}
