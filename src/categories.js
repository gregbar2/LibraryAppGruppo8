import { View, Text, FlatList, Image, TouchableOpacity, ScrollView,Alert,StyleSheet } from 'react-native';
import styleCategories from './styles/styleCategories';
import { caricaLibri } from './fileStorage.js';
import { salvaCategorie,caricaCategorie,eliminaCategorie } from './catStorage.js';
import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Dialog from 'react-native-dialog';


export default function Categories({navigation}){
    const [libri, setLibri] = useState([]); //vettore di libri per poter calcolare il numero di libri per categoria
    const [categorie, setCategorie] = useState([]); //vettore di tutte le categorie/generi 
    const [newGenere,setNewGenere] = useState(''); //nuovo genere appena inserito
    const [visible, setVisible] = useState(false); // mostra/nasconde il dialog

    const eliminaCategoria = async ({genere}) => {
        const categorieAggiornate = categorie.filter(cat => cat.categoria !== genere); //prelevo tutti i libri escluso quello da eliminare
        await salvaCategorie(categorieAggiornate);
        setCategorie(categorieAggiornate);

    };
    
    const MyCategoryItem = ({genere,number}) => { /* sono quelle che creiamo noi */
        /* genere e number sono le props che passo a CategoryItem quando le richiamo  */
        
        return (
            <View>
                
                <TouchableOpacity onPress={() => navigation.navigate("Dettaglio Categoria",{selCat: genere})} style={styleCategories.categoryItem}>
                <Text style={styleCategories.categoryText}>{genere}</Text>
                
                    <View style={styleCategories.booksRow}>
                        <Text style={styleCategories.countText}>{number()} books</Text>
                        
                        <TouchableOpacity onPress={() => eliminaCategoria({genere})}>
                            <Image source={require('../assets/delCat.png')} style={styleCategories.iconStyle}  />
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
            </View>
            
        );
    };
    const CategoryItem = ({genere,number}) => { /* categorie predefinite */
        /* genere e number sono le props che passo a CategoryItem quando le richiamo  */
        
        return (
            <View>
            <TouchableOpacity onPress={() => navigation.navigate("Dettaglio Categoria",{selCat: genere})} style={styleCategories.categoryItem}>
                <Text style={styleCategories.categoryText}>{genere}</Text>
                <View style={styleCategories.booksRow}>
                <Text style={styleCategories.countText}>{number()} books</Text>
            
                </View>
            </TouchableOpacity>
            </View>
            
        );
    };

  
    useFocusEffect(/* viene eseguito ogni volta che da una pagina torniamo qui */
        useCallback(() => {
          const loadData = async () => {
            const data = await caricaLibri();
            const data2 = await caricaCategorie();
            setLibri(data);
            setCategorie(data2);
          };
          loadData();
        }, [])
      );


    const contaLibriGenere = (genere) => { //conto il numero di libri per genere
        let count=0;
        for(let i=0;i<libri.length;i++){
            if(libri[i].type === genere){
                count++;
            }
        }
        return count;
    }
    const contaLibriPreferiti = () => {
        let count=0;
        for(let i=0;i<libri.length;i++){
            if(libri[i].favourite === 'true'){
                count++;
            }

        }
        return count;
    }
    const handleCancel = () => { /* annulla l'operazione di inserimento */
        setVisible(false); //nascondo il Dialog
        setNewGenere(''); //svuoto il textInput
        eliminaCategorie();
      };
      
      const handleAdd = async () => { /* quando clicco sul bottone 'Aggiungi' del Dialog aggiunge il Genere nel file e nel vettore degli stati per poi nostrare un nuovo categoryItem */
        if(newGenere === ''){
            setVisible(false);
            Alert.alert('Inserire genere');
            return;
        }
        try {
            /* Carica la lista di categorie già salvata (se presente) */
            const catSalvate = await caricaCategorie();
        
            /* Crea la nuova categoria con i dati dallo stato */
            const nuovaCat = {categoria: newGenere }; //popola
        
            /* Aggiunge la nuova categoria alla lista esistente */
            const nuoveCat = [...catSalvate, nuovaCat];
        
            /* Salva la lista aggiornata su file*/
            await salvaCategorie(nuoveCat);
        
            setCategorie(nuoveCat); // necessaria perchè quando aggiungo una categoria e sto già nella pagina non viene aggiornato il vettore
            setVisible(false);
            setNewGenere(''); //svuoto il TextInput
        } catch (error) {
            console.error('Errore nel salvataggio del libro:', error);
            setVisible(false);
            setNewGenere('');//svuoto il TextInput
            
        }
      };
    
    return(
        
        <ScrollView style={styleCategories.container}>
            <Dialog.Container visible={visible}>
                {/* a cosa serve il Dialog?? */}
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
            <CategoryItem genere={'Preferiti'} number={() => contaLibriPreferiti()}/>
            <CategoryItem genere={'Romanzo'} number={() => contaLibriGenere('Romanzo')}/>
            <CategoryItem genere={'Fantasy'} number={() => contaLibriGenere('Fantasy')}/>
            <CategoryItem genere={'Comico'} number={() => contaLibriGenere('Comico')}/>
            <CategoryItem genere={'Dramma'} number={() => contaLibriGenere('Dramma')}/>
            <CategoryItem genere={'Poetico'} number={() => contaLibriGenere('Poetico')}/>
        {categorie.map((cat, index) => (/* .map è una funzione che itera su ogni elemento dell'array categorie e restituisce un nuovo array di elementi React (in questo caso, CategoryItem). */
          <MyCategoryItem key={index/* rn richiede un identif per ogni elemento uso l'indice del vettore categorie */} genere={cat.categoria} number={() => contaLibriGenere(cat.categoria)} />
        ))}
        </View>
        </ScrollView>
    );
}