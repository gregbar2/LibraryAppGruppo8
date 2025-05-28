import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ImagePickerComponent from './imagePickerComponent.js';
import styleAddEditBook from './styles/styleAddEdit';

export default function EditBook({route, navigation}){
    const { book } = route.params;
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [description, setDescription] = useState(book.description);
    const [status, setStatus] = useState(book.state); /* valore di default */
    const [type, setType] = useState(book.type);
    const [img,setImg] = useState(book.img);

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
          <ImagePickerComponent onImagePicked={(uri) => setImg(uri)} img={book.img /* passo l'uri dell'immagine*/} /> 
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

/* devo gestire che mostra nello STATO lo stato già salvato nel file */
/* applico le modifiche e le salva nel file */
/* modificare il nome del file addEdit.js come addBook.js */
/* categoria preferiti */
/* importare il resto delle funzioni ad esempio per controllare gli inserimenti */
