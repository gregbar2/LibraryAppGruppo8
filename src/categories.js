import { View, Text, Image, TouchableOpacity, ScrollView,Alert } from 'react-native';
import styleCategories from './styles/styleCategories';
import { caricaLibri } from './fileStorage.js';
import { salvaCategorie,caricaCategorie } from './catStorage.js';
import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Dialog from 'react-native-dialog';


export default function Categories({navigation}){
    const [libri, setLibri] = useState([]); 
    const [categorie, setCategorie] = useState([]);  
    const [newGenere,setNewGenere] = useState(''); 
    const [visible, setVisible] = useState(false); 

    const eliminaCategoria = async ({genere}) => {
        const categorieAggiornate = categorie.filter(cat => cat.categoria !== genere); 
        await salvaCategorie(categorieAggiornate);
        setCategorie(categorieAggiornate);

    };
    
    const MyCategoryItem = ({genere,number}) => { 
        
        return (
            <View>
                
                <TouchableOpacity onPress={() => navigation.navigate("Dettaglio Categoria",{selCat: genere})} style={styleCategories.categoryItem}>
                <Text style={styleCategories.categoryText}>{genere}</Text>
                
                    <View style={styleCategories.booksRow}>
                        <Text style={styleCategories.countText}>{number()} books</Text>
                        
                        <TouchableOpacity onPress={() => eliminaCategoria({genere})}>
                            <Image source={require('../assets/delCat.png')} style={styleCategories.iconStyle}  />
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
            </View>
            
        );
    };
    const CategoryItem = ({genere,number}) => { 
        
        return (
            <View>
            <TouchableOpacity onPress={() => navigation.navigate("Dettaglio Categoria",{selCat: genere})} style={styleCategories.categoryItem}>
                <Text style={styleCategories.categoryText}>{genere}</Text>
                
                <Text style={styleCategories.countText}>{number()} books</Text>
            
                
            </TouchableOpacity>
            </View>
            
        );
    };

  
    useFocusEffect(
        useCallback(() => {
          const loadData = async () => {
            const data = await caricaLibri();
            const data2 = await caricaCategorie();
            setLibri(data);
            setCategorie(data2);
          };
          loadData();
        }, [])
      );


    const contaLibriGenere = (genere) => { 
        let count=0;
        for(let i=0;i<libri.length;i++){
            if(libri[i].type === genere){
                count++;
            }
        }
        return count;
    }

    const contaLibriPreferiti = () => {
        let count=0;
        for(let i=0;i<libri.length;i++){
            if(libri[i].favourite === 'true'){
                count++;
            }

        }
        return count;
    }
    const handleCancel = () => { 
        setVisible(false); 
        setNewGenere(''); 
      };
      
      const handleAdd = async () => { 
        if(newGenere === ''){
            setVisible(false);
            Alert.alert('Inserire genere');
            return;
        }
        try {
            const catSalvate = await caricaCategorie();
        
            const nuovaCat = {categoria: newGenere }; 
        
            catSalvate.push(nuovaCat);
            await salvaCategorie(catSalvate);
        
            setCategorie(catSalvate); 
            setVisible(false);
            setNewGenere(''); 
        } catch (error) {
            console.error('Errore nel salvataggio del libro:', error);
            setVisible(false);
            setNewGenere('');
            
        }
      };
    
    return(
        
        <ScrollView style={styleCategories.container}>
            <Dialog.Container visible={visible}>
                
            <Dialog.Title>Nuova Categoria</Dialog.Title>
            <Dialog.Description>Inserisci la nuova categoria</Dialog.Description>
            <Dialog.Input
                placeholder="Inserisci categoria"
                value={newGenere}
                onChangeText={setNewGenere}
            />
            <Dialog.Button label="Annulla" onPress={handleCancel} />
            <Dialog.Button label="Aggiungi" onPress={handleAdd} />
            </Dialog.Container>

        <View style={styleCategories.header}>
            <Text style={styleCategories.title}>Categorie</Text>
            <TouchableOpacity style={styleCategories.newCategoryButton} onPress={() => setVisible(true)}>
                <Text style={styleCategories.newCategoryText}>+ New category</Text>
            </TouchableOpacity>


        </View>
        <View style={styleCategories.list} >
            <CategoryItem genere={'Preferiti'} number={() => contaLibriPreferiti()}/>
            <CategoryItem genere={'Romanzo'} number={() => contaLibriGenere('Romanzo')}/>
            <CategoryItem genere={'Fantasy'} number={() => contaLibriGenere('Fantasy')}/>
            <CategoryItem genere={'Comico'} number={() => contaLibriGenere('Comico')}/>
            <CategoryItem genere={'Dramma'} number={() => contaLibriGenere('Dramma')}/>
            <CategoryItem genere={'Poetico'} number={() => contaLibriGenere('Poetico')}/>
        {categorie.map((cat, index) => (
          <MyCategoryItem key={index} genere={cat.categoria} number={() => contaLibriGenere(cat.categoria)} />
        ))}
        </View>
        </ScrollView>
    );
}