import React from 'react';
import {StyleSheet } from 'react-native';


export default stylesCategories = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  newCategoryButton: {
    backgroundColor: '#eef3ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  newCategoryText: {
    color: '#2563eb',
    fontWeight: '500',
  },
  list: {
    paddingBottom: 25,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#fff',
    marginBottom:12,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
  },
  countText: {
    fontSize: 16,
    color: '#6b7280',
  },
  booksRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  iconStyle: {
    width: 20,
    height: 20,
    marginLeft: 6, // avvicina l’icona al testo
  },
});

