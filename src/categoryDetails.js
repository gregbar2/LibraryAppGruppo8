import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView,Alert,StyleSheet } from 'react-native';
import { salvaLibri, caricaLibri } from './fileStorage';

export default function CategoryDetails({route,navigation}){
    const {selCat} = route.params; /* categoria selezionata in categories.js */
    const [libri, setLibri] = useState([]); 
    
    useFocusEffect(/* viene eseguita ogni volta che spostiamo il focus su questa pagina */
        useCallback(() => {
          const loadData = async () => {
            const data = await caricaLibri();
            setLibri(data);
          };
          loadData();
        }, [])
    );
/*
    const takeBook = () => {
        const libriFiltrati = libri.filter(libro => libro.type === selCat);
        return 
    }*/

    return (
        <View>
            
        </View>
    );
}