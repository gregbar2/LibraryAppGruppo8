import React, { useState, useEffect } from 'react';
import { Image, View, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComponent({onImagePicked,img }) {
  const [imageUri, setImageUri] = useState(img);

  useEffect(() => { /* viene eseguito una sola volta all'avvio dell'app e richiede l'accesso alla galleria del dispositivo */
    (async () => { /* funzione/effetto collaterale da eseguire quanod viene renderizzato il componente la prima volta */
        const permission  = await ImagePicker.requestMediaLibraryPermissionsAsync(); /* metodo per richiedere i permessi */
        if (permission.status !== 'granted') {
          Alert.alert('Permesso negato', 'È necessario il permesso per accedere alla galleria.');
        }
      
    })();
  }, []);/* avendo indicato un array vuoto come secondo argomento dello useEffect abbiamo l'effetto che venga eseguito solo al primo rendering del componente */

  /* lo eseguo quando clicco sul button */
  const pickImage = async () => { /* funzione asincrona per permettere l'apertura della galleria del DISPOSITIVO */
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'images', // Solo immagini
        allowsEditing: true, // Permette il crop
        aspect: [9, 16], // Proporzioni del crop (facoltativo)
        quality: 1, // Qualità massima
      });

      if (!result.canceled) { /* se non annullo l'operazione salvo nello stato l'uri dell'img */
        setImageUri(result.assets[0].uri); // Salva il percorso URI dell'immagine
        onImagePicked(result.assets[0].uri); // passo ad addEdit l'url che si salverà nella sua variabile di stato img
      }
    } catch (error) {
      console.error('Errore nella selezione dell\'immagine:', error);
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      
      {!imageUri && (<TouchableOpacity onPress={pickImage}><Image source={require('../assets/addImage.png')}/></TouchableOpacity>)}
      {imageUri && (<TouchableOpacity onPress={pickImage}>
        <Image
          source={{ uri: imageUri }}
          style={{ width: 100, height: 100, marginTop: 20, borderRadius: 10 }}
        /></TouchableOpacity>
      )/* questo blocco tra {} prende il nome di blocco condizionale, il suo comportamento è che se imageUri è != null o undefined allora mostra il componente <Image> altrimenti non mostra nulla */}
    </View>
  );
}
