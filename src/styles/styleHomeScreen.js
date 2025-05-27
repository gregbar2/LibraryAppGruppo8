import { StyleSheet } from 'react-native';

const styleHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
  bookList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  bookItem: {
    width: '47%',
    marginBottom: 20,
  },
  bookImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
  },
  bookAuthor: {
    fontSize: 12,
    color: '#666666',
  },
  addButton: {
    backgroundColor: '#3366FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  bookImage: {
    width: 50,
    height: 75,
    resizeMode: 'cover',
    borderRadius: 4,
    marginRight: 12,
  },

  bookTextContainer: {
    flex: 1,
  },

  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  bookAuthor: {
    fontSize: 14,
    color: '#555',
  },

  bookStatus: {
    fontSize: 12,
    color: '#666',
  },
  suggestionList: {
    paddingHorizontal: 16,
    gap: 12,
  },

  suggestionItem: {
    width: 100,
    marginRight: 12,
    alignItems: 'center',
  },

  suggestionImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginBottom: 6,
  },

  suggestionTitle: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },

  suggestionAuthor: {
    fontSize: 11,
    color: '#555',
    textAlign: 'center',
  }
});

export default styleHomeScreen;