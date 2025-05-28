import * as FileSystem from 'expo-file-system';

const FILE_URI = FileSystem.documentDirectory + 'categorie.json';

// Funzione per salvare i dati
export const salvaCategorie = async (libri) => {
  try {
    const jsonValue = JSON.stringify(libri);
    await FileSystem.writeAsStringAsync(FILE_URI, jsonValue);
  } catch (e) {
    console.error('Errore nel salvataggio delle Categorie:', e);
  }
};

// Funzione per caricare i dati
export const caricaCategorie = async () => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(FILE_URI);
    if (!fileInfo.exists) {
      return []; // Se il file non esiste, ritorna un array vuoto
    }
    const jsonValue = await FileSystem.readAsStringAsync(FILE_URI);
    return JSON.parse(jsonValue);
  } catch (e) {
    console.error('Errore nel caricamento delle Categorie:', e);
    return [];
  }
};

export const eliminaCategorie = async () => {
    try {
      await FileSystem.writeAsStringAsync(FILE_URI, '[]'); // un array vuoto come JSON
      console.log('Categorie svuotate con successo');
    } catch (e) {
      console.error('Errore nella pulizia delle categorie:', e);
    }
  };
