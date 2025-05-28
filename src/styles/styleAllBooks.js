import {StyleSheet} from 'react-native';

const styleAllBooks = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fefefe',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 18,
    color: '#888',
  },

  bookItem: {
    paddingVertical: 12,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },

  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  }

});

export default styleAllBooks;