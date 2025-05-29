import { StyleSheet } from 'react-native';

const styleAllBooks = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 16,
    backgroundColor: '#F9F9F9'
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16
    },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9'
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F9F9F9'
  },

  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center'
  },

  bookItem: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    width: '48%', // due elementi per riga con spazio
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3
  },

  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4
  },

  bookAuthor: {
    fontSize: 14,
    color: '#666'
  }
});

export default styleAllBooks;
