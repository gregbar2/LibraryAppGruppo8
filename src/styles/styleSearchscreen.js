import {StyleSheet } from 'react-native';

export default StyleSearchScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    searchInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      marginBottom: 16,
      backgroundColor: '#fff',
    },
    bookItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    bookCover: {
      width: 50,
      height: 75,
      resizeMode: 'cover',
      borderRadius: 4,
      marginRight: 12,
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
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 12,
      },
      button: {
        backgroundColor: '#eee',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginRight: 8,
        marginBottom: 8,
      },
      selectedButton: {
        backgroundColor: '#007AFF',
      },
      buttonText: {
        color: '#333',
      },
      selectedButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
  });
  
