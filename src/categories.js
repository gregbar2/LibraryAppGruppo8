import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleCategories from './styles/styleCategories';
import { caricaLibri } from './fileStorage.js';
import { salvaCategorie,caricaCategorie,eliminaCategorie } from './catStorage.js';
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Dialog from 'react-native-dialog';

const CategoryItem = ({genere,number}) => {
    /* genere e number sono le props che passo a CategoryItem quando le richiamo  */
    return (
        <View style={styleCategories.categoryItem}>
        <Text>{genere}</Text>
        <Text style={styleCategories.countText}>{number()} books</Text>
        </View>
    );
}

export default function Categories(){
    const [libri, setLibri] = useState([]);
    const [categorie, setCategorie] = useState([]);
    const [newGenere,setNewGenere] = useState('');
    const [visible, setVisible] = useState(false); // mostra/nasconde il dialog

    useFocusEffect(/* viene eseguita quando torni dalla pagina AddEdit */
        useCallback(() => {
          const loadData = async () => {
            const data = await caricaLibri();
            setLibri(data);
          };
          loadData();
        }, [])
      );

    useFocusEffect(/* viene eseguita quando torni dalla pagina AddEdit */
    useCallback(() => {
        const loadData = async () => {
        const data = await caricaCategorie();
        setCategorie(data);
        };
        loadData();
    }, [])
    );

    const contaLibriGenere = (genere) => {
        let count=0;
        for(let i=0;i<libri.length;i++){
            if(libri[i].type === genere){
                count++;
            }

        }
        return count;
    }
    
    const handleCancel = () => {
        setVisible(false);
        setNewGenere('');
        eliminaCategorie();
      };
      
      const handleAdd = async () => {
        try {
            /* Carica la lista libri già salvata (se presente) */
            const catSalvate = await caricaCategorie();
        
            /* Crea il nuovo libro con i dati dallo stato */
            const nuovaCat = {newGenere }; //popola
        
            /* Aggiungi il nuovo libro alla lista esistente */
            const nuoveCat = [...catSalvate, nuovaCat];
        
            /* Salva la lista aggiornata su file*/
            await salvaCategorie(nuoveCat);
        
            console.log('Libro salvato con successo:', nuoveCat);
            setCategorie(nuoveCat);
            setVisible(false);
            setNewGenere('');
        } catch (error) {
            console.error('Errore nel salvataggio del libro:', error);
            setVisible(false);
            setNewGenere('');
        }
      };
    
    return(
        
        <ScrollView style={styleCategories.container}>
            <Dialog.Container visible={visible}>
            <Dialog.Title>Nuova Categoria</Dialog.Title>
            <Dialog.Description>Inserisci la nuova categoria</Dialog.Description>
            <Dialog.Input
                placeholder="Inserisci categoria"
                value={newGenere}
                onChangeText={setNewGenere}
            />
            <Dialog.Button label="Annulla" onPress={handleCancel} />
            <Dialog.Button label="Aggiungi" onPress={handleAdd} />
            </Dialog.Container>

        <View style={styleCategories.header}>
            <Text style={styleCategories.title}>Categorie</Text>
            <TouchableOpacity style={styleCategories.newCategoryButton} onPress={() => setVisible(true)}>
                <Text style={styleCategories.newCategoryText}>+ New category</Text>
            </TouchableOpacity>


        </View>
        <View style={styleCategories.list} >
        {categorie.map((cat, index) => (
          <CategoryItem key={index} genere={cat.newGenere} number={() => contaLibriGenere(cat.newGenere)} />
        ))}
        </View>
        </ScrollView>
    );

    
}