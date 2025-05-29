import { View, Text, TouchableOpacity } from 'react-native';
import {eliminaLibri } from './fileStorage.js';
import {eliminaCategorie} from './catStorage.js';
import styleSettings from './styles/styleSettings.js';

export default function Settings({ navigation }){

    return(
         <View style={styleSettings.container}>
            <Text style={styleSettings.title}>Impostazioni</Text>

            <View style={styleSettings.buttonContainer}>
             <TouchableOpacity style={[styleSettings.button, styleSettings.danger]}  onPress={eliminaLibri}>
                      <Text style={styleSettings.buttonText}>🗑 Svuota tutti i libri</Text>
             </TouchableOpacity>

             <TouchableOpacity onPress={eliminaCategorie} style={[styleSettings.button, styleSettings.warning]}>
                      <Text style={styleSettings.buttonText}>⚠️ Elimina tutte le categorie personalizzate</Text>
             </TouchableOpacity>
            </View>

         </View>
    );
};

