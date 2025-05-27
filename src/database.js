import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('libreria.db');//crea oppure apre il db locale

console.log('SQLite:', SQLite);

export const setupDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS libri (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titolo TEXT NOT NULL,
        autore TEXT NOT NULL,
        stato TEXT,
        immagine TEXT
      );`
    );
  });
};


export const inserisciLibro = (titolo, autore, stato, immagine) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO libri (titolo, autore, stato, immagine) VALUES (?, ?, ?, ?);',
      [titolo, autore, stato, immagine]
    );
  });
};

export const caricaLibri = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM libri;',
      [],
      (_, { rows }) => callback(rows._array),
      (_, error) => { console.error(error); return true; }
    );
  });
};

export default db;
