import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Image,Button, ScrollView  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ImagePickerComponent from './imagePickerComponent.js';

export default function AddEdit({navigation}){
    return(
      <ScrollView style={styleAddEditBook.container}> 
            <Text style={styleAddEditBook.firstLabel}>Titolo</Text>
            <TextInput placeholder='Inserisci titolo' style={styleAddEditBook.input}/>
            <Text style={styleAddEditBook.label}>Autore</Text>
            <TextInput placeholder='Inserisci autore' style={styleAddEditBook.input}/>  
            <Text style={styleAddEditBook.label}>Trama</Text>
            <TextInput placeholder='Inserisci trama' style={styleAddEditBook.input}/>
            <Text style={styleAddEditBook.label}>Copertina</Text>
            <ImagePickerComponent/>
            <Text style={styleAddEditBook.label}>Stato</Text>
            <Picker style={styleAddEditBook.picker}>
            <Picker.Item label='Da leggere' style={styleAddEditBook.textarea}/>
            <Picker.Item label='Letto'/>
            <Picker.Item label='In lettura'/>
            <Picker.Item label=' --- '/>
            </Picker>
            <Text style={styleAddEditBook.label}>Genere</Text>
            <TextInput placeholder='Inserisci trama' style={styleAddEditBook.input}/>
            <TouchableOpacity style={styleAddEditBook.saveButton} >
                <Text style={styleAddEditBook.saveButtonText}>Salva</Text>
            </TouchableOpacity>
        
        </ScrollView> 
    );
}


const styleAddEditBook = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    firstLabel:{
      fontSize: 16,
      marginBottom: 6,
      fontWeight: '500',
      color: '#333',
      marginTop: 35
    },
    label: {
      fontSize: 16,
      marginBottom: 6,
      fontWeight: '500',
      color: '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      marginBottom: 16,
      fontSize: 14,
      backgroundColor: '#fff',
    },
    textarea: {
      height: 100,
      textAlignVertical: 'top',
    },
    imagePickerContainer: {
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 8,
      borderStyle: 'dashed',
      justifyContent: 'center',
      alignItems: 'center',
      height: 120,
      marginBottom: 20,
    },
    imagePickerText: {
      color: '#888',
      fontSize: 14,
      marginTop: 8,
    },
    picker: {
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 8,
      marginBottom: 16,
      paddingHorizontal: 12,
      paddingVertical: 10,
      backgroundColor: '#fff',
    },
    saveButton: {
      backgroundColor: '#3366FF',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 50
    },
    saveButtonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  

