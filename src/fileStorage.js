import * as FileSystem from 'expo-file-system';

const FILE_URI = FileSystem.documentDirectory + 'libri.json';

// Funzione per salvare i dati
export const salvaLibri = async (libri) => {
  try {
    const jsonValue = JSON.stringify(libri);
    await FileSystem.writeAsStringAsync(FILE_URI, jsonValue);
  } catch (e) {
    console.error('Errore nel salvataggio dei libri:', e);
  }
};

// Funzione per caricare i dati
export const caricaLibri = async () => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(FILE_URI);
    if (!fileInfo.exists) {
      return []; // Se il file non esiste, ritorna un array vuoto
    }
    const jsonValue = await FileSystem.readAsStringAsync(FILE_URI);
    return JSON.parse(jsonValue);
  } catch (e) {
    console.error('Errore nel caricamento dei libri:', e);
    return [];
  }
};
