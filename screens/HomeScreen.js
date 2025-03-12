import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/icon.jpg')} />
            <Text style={styles.title}>Mini App de Receitas</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Receitas')}>
                <Text style={styles.buttonText}>Ver Receitas</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginBottom: 50
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#ec895f',
    },
    button: {
        backgroundColor: '#ec895f',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
