import React, { useLayoutEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import ReceitasContext from '../components/context';

export default function ReceitasScreen({ navigation }) {
    const [searchQuery, setSearchQuery] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const {receitasData} = useContext(ReceitasContext)

    const filteredReceitas = receitasData.filter((receitasData) =>
        receitasData.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Receitas</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Buscar Receita"
                placeholderTextColor="#aaa"
                value={searchQuery}
                onChangeText={setSearchQuery} />

            <FlatList
                data={filteredReceitas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.imgView}>
                            <Image style={styles.imagem} source={item.imagem} />
                        </View>
                        <Text style={styles.recipeName}>{item.nome}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Detalhes', item)} >
                            <Text style={styles.buttonText}>Ver Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#333333',
        paddingTop: 25,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#ec895f',
    },
    searchInput: {
        height: 40,
        borderColor: '#ec895f',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 15,
        color: '#fff',
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
    imagem: {
        width: 100,
        height: 100,
    },
    imgView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
