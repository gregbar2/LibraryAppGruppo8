import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import styleCategories from './styles/styleCategories';
import React from 'react';

const CategoryItem = ({genere,number}) => {
    /* genere e number sono le props che passo a CategoryItem quando le richiamo  */
    return (
        <View style={styleCategories.categoryItem}>
        <Text>{genere}</Text>
        <Text style={styleCategories.countText}>{number} books</Text>
        </View>
    );
}

export default function Categories(){

    return(
        <ScrollView style={styleCategories.container}>
        <View style={styleCategories.header}>
            <Text style={styleCategories.title}>Categorie</Text>
            <TouchableOpacity style={styleCategories.newCategoryButton}>
                <Text style={styleCategories.newCategoryText}>+ New category</Text>
            </TouchableOpacity>


        </View>
        <ScrollView style={styleCategories.list} >
        <CategoryItem genere="Giallo" number={13}/>
        
        <CategoryItem genere="Fiction" number={13}/>
        <CategoryItem genere="Giallo" number={13}/>
        
        
        </ScrollView>
        </ScrollView>
    );

    
}