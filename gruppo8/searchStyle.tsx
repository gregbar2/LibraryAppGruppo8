import { StyleSheet } from 'react-native';

const styleSearchScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  searchIcon: {
    marginLeft: 'auto',
    fontSize: 18,
    color: '#666',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 8,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
  bookList: {
    marginTop: 12,
  },
  bookItem: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  bookCover: {
    width: 50,
    height: 75,
    resizeMode: 'cover',
    borderRadius: 4,
    marginRight: 12,
  },
  bookInfo: {
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
  bookGenre: {
    fontSize: 12,
    color: '#888',
  },
});

export default styleSearchScreen;