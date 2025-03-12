import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function ReceitasScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const receitas = [
        { id: 1, imagem: require('../assets/boloChocolate.jpg') ,nome: 'Bolo de Chocolate', ingredientes: 'Farinha, Ovos, Chocolate...', preparo: 'Misture tudo e asse por 40min.' },
        { id: 2, imagem: require('../assets/panqueca.jpg'), nome: 'Panqueca', ingredientes: 'Farinha, Leite, Ovos...', preparo: 'Misture tudo e frite em uma frigideira.' },
        { id: 3, imagem: require('../assets/brigadeiro.jpg'), nome: 'Brigadeiro', ingredientes: 'Leite Condensado, Chocolate, Manteiga...', preparo: 'Cozinhe até engrossar e enrole.' },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🍽 Lista de Receitas</Text>
            {receitas.map((receita) => (
                <View key={receita.id} style={styles.card}>
                    <View style={styles.imgView} >
                    <Image style={styles.imagem} source={receita.imagem}/>
                    </View>
                    <Text style={styles.recipeName}>{receita.nome}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Detalhes', receita)} >
                        <Text style={styles.buttonText}>Ver Detalhes</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#333333',
        paddingTop:'25'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#ec895f',
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
    },
    recipeName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#ec895f',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imagem:{
        width:100,
        height:100,
    },
    imgView:{
        justifyContent:'center',
        alignItems:'center'
    }
});
